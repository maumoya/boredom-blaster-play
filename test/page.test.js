// Smoke tests for the one-file game: the page is complete, self-contained and its scripts parse.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);

test("the page has a title, a canonical link and the game canvas", () => {
  assert.match(html, /<title>[^<]*Boredom Blaster/);
  assert.match(html, /<link rel="canonical" href="https:\/\/maumoya\.github\.io\/boredom-blaster-play\/">/);
  assert.match(html, /<canvas id="screen"/);
});

test("no external scripts: the whole game ships in index.html", () => {
  assert.doesNotMatch(html, /<script[^>]+src=/);
  assert.ok(scripts.length > 0);
});

test("every inline script is valid JavaScript", () => {
  for (const code of scripts) assert.doesNotThrow(() => new Function(code));
});

test("the link-preview images are 1200 x 630 PNGs", () => {
  for (const name of ["og.png", "og2.png"]) {
    const png = readFileSync(new URL(`../${name}`, import.meta.url));
    assert.equal(png.toString("ascii", 1, 4), "PNG");
    assert.equal(png.readUInt32BE(16), 1200);
    assert.equal(png.readUInt32BE(20), 630);
  }
});
