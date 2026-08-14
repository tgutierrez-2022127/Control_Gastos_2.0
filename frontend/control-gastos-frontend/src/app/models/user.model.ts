export interface User {
  id: number;
  email: string;
  role: 'ADMIN' | 'USER';
  fullName: string;
  active: boolean;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}