# Contributing to BICKOSA Website

Thank you for your interest in contributing. This project is open to contributions from the community.

## How to contribute

1. **Fork** the repository and clone your fork locally.
2. Install dependencies: `npm install`
3. Create a branch: `git checkout -b fix/short-description` or `feature/short-description`
4. Make your changes. Please:
   - Follow the existing code style (TypeScript, ESLint).
   - Use the Bento design system for UI (`docs/BENTO_STYLE.md`): `BentoCard`, `BentoGrid`, section-eyebrow/heading/sub, design tokens.
   - Avoid `any`; keep types clear.
5. Run lint and tests:
   - `npm run lint`
   - `npm run test`
6. Commit with a clear message (e.g. `fix: correct footer link` or `feat: add X to events page`).
7. Push to your fork and open a **Pull Request** against the default branch.

## Before opening a PR

- For **larger changes** or new features, consider opening an **Issue** first so we can agree on the approach.
- Ensure the app builds: `npm run build`
- If you add or change routes or meta, update `src/config/metadata.ts` and the README routes table if needed.

## Repository

- **Code**: [https://github.com/BICKOSA/bickosa-website](https://github.com/BICKOSA/bickosa-website)
- **Issues**: [https://github.com/BICKOSA/bickosa-website/issues](https://github.com/BICKOSA/bickosa-website/issues)
