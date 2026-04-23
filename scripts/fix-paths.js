/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

function getHtmlFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (item.name.endsWith(".html")) {
      results.push(fullPath);
    }
  }
  return results;
}

function fixCssFiles(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      fixCssFiles(fullPath);
    } else if (item.name.endsWith(".css")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      const original = content;

      // Fix absolute font URLs in CSS @font-face
      // url(/_next/static/media/...) -> url(relative path)
      const cssDir = path.dirname(fullPath);
      let relPrefix = path.relative(cssDir, outDir).replace(/\\/g, "/");
      if (relPrefix === "") relPrefix = ".";

      content = content.replace(/url\(\/_next\//g, `url(${relPrefix}/_next/`);

      if (content !== original) {
        fs.writeFileSync(fullPath, content, "utf-8");
        console.log(`✓ Fixed CSS: ${path.relative(outDir, fullPath)}`);
      }
    }
  }
}

const htmlFiles = getHtmlFiles(outDir);

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, "utf-8");

  // Calculate relative path from this file's directory to the out root
  const fileDir = path.dirname(file);
  let relPrefix = path.relative(fileDir, outDir).replace(/\\/g, "/");
  if (relPrefix === "") {
    relPrefix = ".";
  }

  // --- Fix HTML tag attributes ---
  // Replace absolute href/src paths for _next, img, favicon
  content = content.replace(
    /(href|src)="\/_next\//g,
    `$1="${relPrefix}/_next/`,
  );
  content = content.replace(/(href|src)="\/img\//g, `$1="${relPrefix}/img/`);
  content = content.replace(
    /(href|src)="\/favicon\.ico/g,
    `$1="${relPrefix}/favicon.ico`,
  );

  // --- Fix inline script/JSON paths (RSC payload) ---
  // These are inside self.__next_f.push([1,"..."]) blocks
  // Fix /_next/ references inside inline scripts
  content = content.replace(
    /"\/_next\/static\//g,
    `"${relPrefix}/_next/static/`,
  );
  content = content.replace(/"\/_next\/static/g, `"${relPrefix}/_next/static`);

  // Fix paths in JSON-like strings within scripts: \"/_next/
  content = content.replace(/\\"\/_next\//g, `\\"${relPrefix}/_next/`);

  // Fix image paths in scripts
  content = content.replace(/"\/img\//g, `"${relPrefix}/img/`);
  content = content.replace(/\\"\/img\//g, `\\"${relPrefix}/img/`);
  content = content.replace(/"\/favicon\.ico/g, `"${relPrefix}/favicon.ico`);

  // --- Fix CORS issues for file:// protocol ---
  // Remove crossorigin="" from font preload links (causes CORS errors on file://)
  content = content.replace(
    /(<link[^>]*rel="preload"[^>]*as="font"[^>]*) crossorigin=""/g,
    "$1",
  );
  // Also handle crossorigin="" before as="font"
  content = content.replace(
    /(<link[^>]*) crossorigin=""([^>]*as="font")/g,
    "$1$2",
  );

  // Remove crossorigin from font hints in RSC payload
  content = content.replace(/"crossOrigin":""/g, '"crossOrigin":""');

  // --- Fix internal navigation links for static files ---
  // /servicos/slug/ -> ./servicos/slug.html (for file:// browsing)
  content = content.replace(
    /href="\/servicos\/([^"#]+?)\/"/g,
    `href="${relPrefix}/servicos/$1.html"`,
  );
  content = content.replace(
    /href="\/servicos\/([^"#]+?)"/g,
    `href="${relPrefix}/servicos/$1.html"`,
  );

  fs.writeFileSync(file, content, "utf-8");
  console.log(`✓ Fixed: ${path.relative(outDir, file)}`);
}

// Also fix CSS files that may reference absolute font paths
fixCssFiles(path.join(outDir, "_next"));

console.log(
  `\n✅ Done! Fixed ${htmlFiles.length} HTML files for file:// compatibility.`,
);
