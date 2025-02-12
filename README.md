# froala-vite-build-reproducer
A small reproducer for my problems bundling froala using vite

# Steps to reproduce

1. checkout repository and run `npm install`.
2. run `npm run dev-watch`.
3. wait for initial build to complete.
4. change something in `src/some-dependency.ts`. Adding a whitespace is sufficient.

**Expected behavior:** A new bundle is generated

**Actual behavior:** The build is stuck after printing `transforming (1) src/some-dependency.ts`

# Notes
It seems like removing any import in `main.ts` resolves the issue. Even removing a single language file resolves the issue.
