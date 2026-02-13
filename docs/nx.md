# NX project generation guidelines

- Prefer `@nx/*` generators over `@schematics/*` - the latter are internal generators used as dependencies

## Parameters

- `buildable`: `true` for publishable projects, `false` for shared libraries
- `bundler`: `esbuild` > `webpack`
- `directory`:
  - `apps/<name>` for publishable projects
  - `libs/<name>` for shared libraries
  - `tools/<name>` for development dependencies
- `e2eTestRunner`: `playwright` > `jest`
- `importPath`: `@avocado/<name>`
- `linter`: `eslint`
- `name`: Globally unique name without previxes
- `strict`: `true`
- `unitTestRunner`: `vitest-angular` > `jest`
- `useProjectJson`: `true` for publishable projects, `false` for shared libraries

## Other notes

- Build output must be in `dist` subdirectory in the application directory, not workspace root
