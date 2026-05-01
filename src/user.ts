export interface User {
  id: string;
  name?: string;
}

export function greetUser(user: User): string {
  return `Hello, ${(user.name ?? 'STRANGER').toUpperCase()}!`;
}
