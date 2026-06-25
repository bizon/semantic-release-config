# CLAUDE.md

> **Maintenance rule**: when editing this file, ensure every rule is unambiguous, non-redundant, and non-contradictory. Keep sections focused — each rule belongs in exactly one place. Remove or merge anything that overlaps. The goal is a single source of truth that leaves zero room for interpretation.

## Project overview

Shared semantic-release configuration, published to npm as `@bizon/semantic-release-config` and used to release the other repositories. Written in JavaScript (ESM, with JSDoc types), managed with pnpm.

## Checks (run after every change)

```bash
pnpm xo        # linter (ESLint-based via XO)
```

- `pnpm xo --fix <path>` to auto-fix lint issues in a specific file
- No build, type-check, or test step — this is a plain JS config

## Commit and PR conventions

- Use semantic commit messages (Conventional Commits)
- Subject line under 55 characters, body lines under 72 characters
- No `Co-Authored-By` trailer
- PR titles follow the same conventions as commit subjects
- No "Generated with Claude Code" footer in PR descriptions
- Branch names prefixed with GitHub username (use `gh api user --jq '.login'`)

## Project structure

- `index.js` — the exported semantic-release config (single entry point)

## Code patterns

- **Node version**: 24 (see `.node-version`)
- **Package runner**: use `pnpx` instead of `npx`
- **Module format**: ESM (`"type": "module"`)

## CI/CD

- **Tests** (`tests.yml`): lint on every PR and push to master
- **Release** (`release.yml`): semantic-release + npm publish
- **PR validation** (`pr.yml`): enforces semantic PR titles

## Documentation

- Keep `README.md` in sync with the codebase (exported config, usage).
