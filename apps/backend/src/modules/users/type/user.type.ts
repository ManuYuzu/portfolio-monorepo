export type UserType = {
  id: number;
  email: string;
  name?: string | null;
  password: string;
  role: 'READER' | 'ADMIN';
  createdAt: Date;
};
