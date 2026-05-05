# Diagnosis

## Symptom
`greetUser({ id: '2' })` throws `TypeError: Cannot read properties of undefined (reading 'toUpperCase')` when the user object has no `name` property.

## Root Cause
`src/user.ts:7` — `user.name.toUpperCase()` calls `.toUpperCase()` on `user.name` without checking whether it is `undefined`. The `User` interface declares `name` as optional (`name?: string`), so `user.name` is `undefined` when omitted.

## Candidate Fixes

### Fix A: Nullish coalescing with default (chosen)
```ts
const displayName = user.name ?? 'STRANGER';
return `Hello, ${displayName.toUpperCase()}!`;
```
- Pro: matches the test expectation exactly (`'Hello, STRANGER!'`)
- Pro: handles both `undefined` and `null`
- Pro: keeps the greeting format consistent

### Fix B: Conditional/ternary
```ts
return `Hello, ${(user.name ?? 'STRANGER').toUpperCase()}!`;
```
- Pro: one-liner
- Con: slightly less readable with nested expressions

### Fix C: Optional chaining + fallback
```ts
return `Hello, ${(user.name?.toUpperCase() ?? 'STRANGER')}!`;
```
- Pro: also safe
- Con: produces `'STRANGER'` for an empty name, which differs from the test expectation — the test expects `'Hello, STRANGER!'` not `'Hello, !'`

## Verification
- Run `pnpm exec vitest run src/user.test.ts` — both tests should pass
- Test 1: `greetUser({ id: '1', name: 'alice' })` → `'Hello, ALICE!'`
- Test 2: `greetUser({ id: '2' })` → `'Hello, STRANGER!'` and does not throw
