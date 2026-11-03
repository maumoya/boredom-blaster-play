# Contributing

v1 is kept as released; new gameplay goes to [Boredom Blaster v2](https://github.com/maumoya/boredom-blaster-v2).
Fixes (bugs, security, docs) are welcome here.

1. Open an issue first for anything bigger than a typo, so we agree on the change.
2. Branch, change, and run the tests locally (Node 20 or newer, no install step):
   ```bash
   node --test
   ```
3. New behavior needs a test in `test/`. Bug fixes need a test that failed before the fix.
4. Open a PR. CI (tests and CodeQL) must be green. A maintainer reviews and merges.

## Coding standards

- Plain JavaScript inside `index.html`, no dependencies, no build step. English only.
- Match the surrounding code.
- CodeQL (security-and-quality) runs on every PR and must report no new warnings.

By contributing you agree to follow the [code of conduct](CODE_OF_CONDUCT.md).
