import React from 'react';
import { useAuth, UserRole, roleNames } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  UserCog, Stethoscope, Heart, Users, FlaskConical, Pill, Receipt, BarChart3, Building2
} from 'lucide-react';

const roleIcons: Record<UserRole, React.ReactNode> = {
  admin: <UserCog className="w-8 h-8" />,
  doctor: <Stethoscope className="w-8 h-8" />,
  nurse: <Heart className="w-8 h-8" />,
  front_desk: <Users className="w-8 h-8" />,
  lab_technician: <FlaskConical className="w-8 h-8" />,
  pharmacist: <Pill className="w-8 h-8" />,
  billing: <Receipt className="w-8 h-8" />,
  management: <BarChart3 className="w-8 h-8" />,
};

const roleDescriptions: Record<UserRole, string> = {
  admin: 'Full system access',
  doctor: 'Patient care & EMR',
  nurse: 'Nursing station & tasks',
  front_desk: 'Registration & scheduling',
  lab_technician: 'Lab & radiology',
  pharmacist: 'Pharmacy & inventory',
  billing: 'Billing & insurance',
  management: 'Reports & analytics',
};

const Login: React.FC = () => {
  const { login } = useAuth();

  const roles: UserRole[] = ['admin', 'doctor', 'nurse', 'front_desk', 'lab_technician', 'pharmacist', 'billing', 'management'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">MedCare HIS</h1>
          </div>
          <p className="text-lg text-muted-foreground">Hospital Information System</p>
          <p className="text-sm text-muted-foreground mt-2">Select your role to continue</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((role) => (
            <Card 
              key={role} 
              className="cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-200 group"
              onClick={() => login(role)}
            >
              <CardHeader className="pb-2 text-center">
                <div className="mx-auto text-muted-foreground group-hover:text-primary transition-colors">
                  {roleIcons[role]}
                </div>
                <CardTitle className="text-base mt-2">{roleNames[role]}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-center text-xs">
                  {roleDescriptions[role]}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Demo Mode • No authentication required
        </p>
      </div>
    </div>
  );
};

export default Login;
