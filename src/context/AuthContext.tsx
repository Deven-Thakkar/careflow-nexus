import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 
  | 'admin'
  | 'doctor'
  | 'nurse'
  | 'front_desk'
  | 'lab_technician'
  | 'pharmacist'
  | 'billing'
  | 'management';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  department?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (role: UserRole, name?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const roleNames: Record<UserRole, string> = {
  admin: 'Administrator',
  doctor: 'Doctor',
  nurse: 'Nurse',
  front_desk: 'Front Desk',
  lab_technician: 'Lab Technician',
  pharmacist: 'Pharmacist',
  billing: 'Billing & Insurance',
  management: 'Management',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (role: UserRole, name?: string) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: name || roleNames[role],
      role,
      department: role === 'doctor' ? 'General Medicine' : undefined,
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { roleNames };
