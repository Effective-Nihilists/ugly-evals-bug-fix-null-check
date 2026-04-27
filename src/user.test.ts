import { describe, expect, it } from 'vitest';
import { greetUser } from './user.js';

describe('greetUser', () => {
  it('greets a named user', () => {
    expect(greetUser({ id: '1', name: 'alice' })).toBe('Hello, ALICE!');
  });

  it('handles a user with no name without throwing', () => {
    expect(() => greetUser({ id: '2' })).not.toThrow();
    expect(greetUser({ id: '2' })).toBe('Hello, STRANGER!');
  });
});
