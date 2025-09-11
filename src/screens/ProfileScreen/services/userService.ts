import { User } from "../models/User";

export async function getUserProfile(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: "1", name: "João da Silva", email: "joao@exemplo.com" }), 1000);
  });
}
