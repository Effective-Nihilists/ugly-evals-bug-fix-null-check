# (untitled spec)

## Context
`greetUser` in `src/user.ts` throws `TypeError: Cannot read properties of undefined (reading 'toUpperCase')` when `user.name` is undefined.

## Repro
`pnpm exec vitest run src/user.test.ts` — second test fails.

## Plan
- [x] Reproduce failure
- [ ] Fix `greetUser` to handle missing `name` (default to "STRANGER")
- [ ] Verify tests pass

## Verification
`pnpm exec vitest run src/user.test.ts` exits 0.