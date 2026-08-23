# Verification Rules

## Required Checks

After React, TypeScript, SCSS, config, package, asset, or documentation changes,
run:

```bash
yarn format:check
yarn build
```

If formatting was intentionally changed, run:

```bash
yarn format
```

## Package Manager

- Use `yarn`, not npm or pnpm.
- Keep `yarn.lock`.
- Do not keep `package-lock.json`.
- Do not manually edit `yarn.lock` unless there is no safer option.

## Tests

- This project does not use tests by default.
- Do not add a test framework unless the user explicitly asks for it.

## Browser Checks

- For UI changes, check the affected screen in a browser when practical.
- If the backend API is unavailable locally, report that limitation instead of
  claiming full visual verification.
- Stop any local dev server started only for verification before finishing.

## Reporting

When finishing work, report:

- what changed
- which commands were run
- whether they passed
- anything that could not be verified

Do not claim the project builds or formats correctly unless the command was run
successfully.
