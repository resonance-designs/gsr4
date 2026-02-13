#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const COMPONENT_ROOT = path.join("src", "ui", "components");
const USAGE_ROOTS = [path.join("src", "ui", "engines"), path.join("src", "ui", "devices")];

const normalizeName = (name) => name.replace(/_/g, "-");

const builtinProps = new Set(
  [
    "x", "y", "z", "width", "height", "min-width", "min-height", "max-width", "max-height",
    "preferred-width", "preferred-height", "background", "color", "clip", "opacity", "visible",
    "enabled", "cursor", "col", "row", "rowspan", "colspan", "vertical-stretch", "horizontal-stretch",
    "padding", "padding-left", "padding-right", "padding-top", "padding-bottom", "spacing", "alignment",
    "horizontal-alignment", "vertical-alignment", "text", "text-color", "font-size", "font-weight",
    "font-family", "wrap", "overflow", "source", "image-fit", "border-width", "border-color",
    "border-radius", "is-open", "current-index", "model", "value", "checked", "active", "icon",
    "size", "orientation", "title", "kind", "viewport-width", "viewport-height", "forward-focus",
  ].map(normalizeName)
);

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (entry.isFile() && full.endsWith(".slint")) {
      files.push(full);
    }
  }
  return files;
}

function countChar(str, ch) {
  return (str.match(new RegExp(`\\${ch}`, "g")) || []).length;
}

const componentProps = new Map();
for (const file of walk(COMPONENT_ROOT)) {
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  let component = null;
  for (const line of lines) {
    const compMatch = line.match(/^\s*export\s+component\s+(RDS\w+)/);
    if (compMatch) {
      component = compMatch[1];
      if (!componentProps.has(component)) componentProps.set(component, new Set());
      continue;
    }
    if (!component) continue;

    const propMatch = line.match(/^\s*(?:in|in-out|out)\s+property\s*<[^>]+>\s*([A-Za-z][A-Za-z0-9_-]*)/);
    if (propMatch) {
      componentProps.get(component).add(normalizeName(propMatch[1]));
    }
  }
}

const issues = [];
for (const root of USAGE_ROOTS) {
  for (const file of walk(root)) {
    const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
    let depth = 0;
    const stack = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const openCount = countChar(line, "{");
      const closeCount = countChar(line, "}");

      for (const match of line.matchAll(/\b(RDS\w+)\s*\{/g)) {
        const component = match[1];
        if (componentProps.has(component)) {
          stack.push({ component, depth: depth + 1 });
        }
      }

      if (stack.length > 0) {
        if (!/^\s*property\s*</.test(line)) {
          const propMatch = line.match(/^\s*([A-Za-z][A-Za-z0-9_-]*)\s*:/);
          if (propMatch) {
            const rawProp = propMatch[1];
            const prop = normalizeName(rawProp);
            const component = stack[stack.length - 1].component;
            if (!builtinProps.has(prop) && !componentProps.get(component).has(prop)) {
              issues.push(`${file}:${i + 1}: ${component} uses unknown property '${rawProp}'`);
            }
          }
        }
      }

      depth += openCount - closeCount;
      while (stack.length > 0 && stack[stack.length - 1].depth > depth) {
        stack.pop();
      }
    }
  }
}

if (issues.length > 0) {
  console.error("UI component API compatibility issues found:");
  for (const issue of issues) console.error(issue);
  process.exit(1);
}

console.log("UI component API compatibility check passed.");
