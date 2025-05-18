
// Simple authentication utilities
export type UserRole = "student" | "teacher" | "college";

export interface User {
  name: string;
  email: string;
  role: UserRole;
}

// Mock users data
export const mockUsers: User[] = [
  { name: "John Student", email: "student@vibehub.edu", role: "student" },
  { name: "Mary Teacher", email: "teacher@vibehub.edu", role: "teacher" },
  { name: "Admin College", email: "admin@vibehub.edu", role: "college" },
];

export const authenticateUser = (email: string, password: string): User | null => {
  // In a real app, you would verify the password against a hashed version
  // For this demo, we're just checking if the email exists
  const user = mockUsers.find(user => user.email === email);
  return user || null;
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) return null;
  
  try {
    const user = JSON.parse(userJson) as User;
    return user;
  } catch (e) {
    return null;
  }
};

export const saveCurrentUser = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logoutCurrentUser = (): void => {
  localStorage.removeItem('currentUser');
};
