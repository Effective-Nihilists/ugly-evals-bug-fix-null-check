# Diagnosis: greetUser throws on users with no name

## Symptom
`greetUser({ id: '2' })` throws `TypeError: Cannot read properties of undefined (reading 'toUpperCase')` because `user.name` is `undefined` when the optional `name` field is omitted.

## Root Cause
`src/user.ts:7` calls `user.name.toUpperCase()` without guarding against `name` being `undefined`. The `User` interface declares `name?: string`, so callers may legitimately omit it.

## Candidate Fixes

1. **Nullish coalescing before `.toUpperCase()`** — `(user.name ?? "STRANGER").toUpperCase()`
   - Pros: Minimal change, matches test expectations exactly, no branching logic.
   - Cons: Hardcodes the fallback string.

2. **Conditional branch** — `user.name ? user.name.toUpperCase() : "Hello, STRANGER!"`
   - Pros: Explicit, easy to read.
   - Cons: Duplicates the template string, slightly more verbose.

3. **Default parameter** — `greetUser(user: User & { name: string })` with a wrapper
   - Pros: Type-safe at call site.
   - Cons: Over-engineered for this scope; shifts responsibility to callers.

## Selected Fix
Option 1 — `(user.name ?? "STRANGER").toUpperCase()`. Already applied and verified (2/2 tests pass).