# Diagnosis: greetUser throws on missing name

## Symptom
`greetUser({ id: '2' })` throws `TypeError: Cannot read properties of undefined (reading 'toUpperCase')`.

## Cause
In `src/user.ts:7`, `user.name.toUpperCase()` is called unconditionally. Since `name` is optional (`name?: string`), it can be `undefined`. When a `User` object without a `name` property is passed, `user.name` evaluates to `undefined`, and calling `.toUpperCase()` on `undefined` throws.

## Candidate fixes
1. **Nullish coalescing (**`` **?? ``\`\`\`)**\`\`\` — `const name = user.name ?? 'stranger';`  
   Most idiomatic, handles both `undefined` and `null`. Returns `'stranger'` when name is missing, matching the test expectation `'Hello, STRANGER!'`.

2. **Logical OR (\`||\`)** — `const name = user.name || 'stranger';`  
   Broader — catches empty string `''` too. Could mask bugs where empty string is meaningful.

3. **Optional chaining + fallback** — `user.name?.toUpperCase() ?? 'STRANGER'`  
   Works but inlines the fallback into the template literal, making it harder to read.

Fix #1 is preferred: minimal diff, matches test expectation, idiomatic TypeScript.
