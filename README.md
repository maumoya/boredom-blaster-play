<p align="center">
  <a href="https://maumoya.github.io/boredom-blaster-play/"><img src="og2.png" alt="Boredom Blaster v1: a retro space shooter for short breaks, played free in the browser" width="100%"></a>
</p>

<p align="center">
  <a href="https://maumoya.github.io/boredom-blaster-play/"><img src="https://img.shields.io/badge/%E2%96%B6%20PLAY%20v1-in%20your%20browser-ff8a2a?style=for-the-badge" alt="Play v1 in your browser"></a>
  <a href="https://github.com/maumoya/boredom-blaster-v2"><img src="https://img.shields.io/badge/NEWER-play%20v2-3ff0ff?style=for-the-badge" alt="The newer v2 of the game"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/one%20file-13.6%20KB-2da44e" alt="One file, 13.6 KB">
  <img src="https://img.shields.io/badge/plain%20JavaScript-no%20engine-f7df1e?logo=javascript&logoColor=black" alt="Plain JavaScript, no game engine">
  <img src="https://img.shields.io/badge/HTML-canvas-e34f26?logo=html5&logoColor=white" alt="HTML canvas">
  <img src="https://img.shields.io/badge/privacy-no%20login%20%C2%B7%20no%20tracking-7c5cfc" alt="Privacy: no login, no tracking">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT license"></a>
  <br>
  <a href="https://github.com/maumoya/boredom-blaster-play/actions/workflows/test.yml"><img src="https://github.com/maumoya/boredom-blaster-play/actions/workflows/test.yml/badge.svg" alt="Tests"></a>
  <a href="https://github.com/maumoya/boredom-blaster-play/actions/workflows/codeql.yml"><img src="https://github.com/maumoya/boredom-blaster-play/actions/workflows/codeql.yml/badge.svg" alt="CodeQL"></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/maumoya/boredom-blaster-play"><img src="https://api.scorecard.dev/projects/github.com/maumoya/boredom-blaster-play/badge" alt="OpenSSF Scorecard"></a>
  <a href="https://www.bestpractices.dev/projects/16291"><img src="https://www.bestpractices.dev/projects/16291/badge" alt="OpenSSF Best Practices"></a>
  <a href="https://github.com/maumoya/boredom-blaster-play/releases/latest"><img src="https://img.shields.io/github/v/release/maumoya/boredom-blaster-play" alt="Latest release"></a>
</p>

# Boredom Blaster v1

**The first version of Boredom Blaster: a retro arcade space shooter for short breaks.** One HTML file,
plays in the browser on a Mac or a phone. No login, no install.

This is the original game, kept as it was released. The newer, bigger game, with five worlds, bosses and global
scores, is [Boredom Blaster v2](https://github.com/maumoya/boredom-blaster-v2).

## The game

- **Arcade classic.** Rows of pixel saucers, one ship and a fire button.
- **Mac or phone.** Keyboard on the desktop, touch on the phone.
- **Tiny.** Everything (game, art and sound) lives in one 13.6 KB `index.html`, plus one web font.

## How it is built

Plain JavaScript and the HTML canvas in a single file, with no engine, framework or build step.
GitHub Pages serves `index.html` as it is. `og.png` and `og2.png` are the link-preview images.

## Results

Measured on 2026-11-03 against `main` at `7e6aec7` (release v1.0.0). Repeat it with the command below.

| Check | Result |
|---|---|
| Live page | HTTP **200**, **13,613 bytes**, loaded in 0.14 s |
| Live page is this repo's `main` | SHA-256 of the live page = SHA-256 of `index.html` (`391badb7…`) |
| External scripts | **0** (one Google Fonts stylesheet) |

```bash
curl -s https://maumoya.github.io/boredom-blaster-play/ | shasum -a 256 && curl -s https://raw.githubusercontent.com/maumoya/boredom-blaster-play/main/index.html | shasum -a 256
```

The two hashes match when the live game is exactly the code in this repository.

Smoke tests (`test/`, run with `node --test`) check that the page is complete, has no external scripts and that its
JavaScript parses.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md). Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## About the author

Designed and developed by **Mauricio Alonso Moya Tapia** ([@maumoya](https://github.com/maumoya)), his first game.
Released under the [MIT License](LICENSE). More of his work on [GitHub](https://github.com/maumoya); say hi on
[LinkedIn](https://www.linkedin.com/in/mba-mmoyat/).
