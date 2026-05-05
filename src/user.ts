export interface User {
  id: string;
  name?: string;
}

export function greetUser(user: User): string {
  const displayName = user.name ?? 'STRANGER';
  return `Hello, ${displayName.toUpperCase()}!`;
}
