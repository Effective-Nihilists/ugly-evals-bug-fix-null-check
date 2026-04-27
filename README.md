# bug-fix-null-check

A coding-agent eval task from [ugly-studio](https://github.com/Effective-Nihilists). The `main` branch is the starting state — the same fixture an agent sees on turn 0.

**Kind:** `bug-fix`  •  **Tags:** `ts`, `vitest`

## Prompt

> There is a failing test in src/user.test.ts. Read the test and the source file, then fix the bug so the test passes. Do not modify the test file.

## Success criteria

The test in src/user.test.ts passes. The fix must be in src/user.ts — adding a null/undefined guard to greetUser so calling it with a user missing a name does not throw. The test file itself is not modified.

## Budget

- Max turns: 12
- Max cost (USD): 0.75
- Timeout: 150s

## Branches

Each eval run pushes a branch named `<model-slug>-<unix-timestamp>` (e.g. `opus-4-7-1745764987`, `auto-1745765012`). Diff any branch against `main` to see what that model produced.

## Local run

```bash
npm install
npm test  # if defined — see package.json
```

## Grading

If `eval/check.ts` exists, the eval harness runs it after the agent finishes. It returns a deterministic pass/fail scorecard.
