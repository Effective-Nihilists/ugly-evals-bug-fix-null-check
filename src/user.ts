export interface User {
  id: string;
  name?: string;
}

export function greetUser(user: User): string {
  const name = user.name ? user.name.toUpperCase() : 'STRANGER';
  return `Hello, ${name}!`;
}
