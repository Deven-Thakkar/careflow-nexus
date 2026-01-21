import React from 'react';
import { useAuth, UserRole, roleNames } from '@/context/AuthContext';
import { 
  UserCog, Stethoscope, Heart, Users, FlaskConical, Pill, Receipt, BarChart3, 
  Building2, ArrowRight, Activity, Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';

const roleIcons: Record<UserRole, React.ReactNode> = {
  admin: <UserCog className="w-7 h-7" />,
  doctor: <Stethoscope className="w-7 h-7" />,
  nurse: <Heart className="w-7 h-7" />,
  front_desk: <Users className="w-7 h-7" />,
  lab_technician: <FlaskConical className="w-7 h-7" />,
  pharmacist: <Pill className="w-7 h-7" />,
  billing: <Receipt className="w-7 h-7" />,
  management: <BarChart3 className="w-7 h-7" />,
};

const roleDescriptions: Record<UserRole, string> = {
  admin: 'Full system access & configuration',
  doctor: 'Patient care, EMR & prescriptions',
  nurse: 'Nursing station, vitals & tasks',
  front_desk: 'Registration & appointment scheduling',
  lab_technician: 'Lab tests & radiology reports',
  pharmacist: 'Pharmacy & inventory management',
  billing: 'Billing, invoices & insurance',
  management: 'Analytics, reports & KPIs',
};

const roleColors: Record<UserRole, string> = {
  admin: 'from-purple-500 to-indigo-600',
  doctor: 'from-primary to-teal-600',
  nurse: 'from-pink-500 to-rose-600',
  front_desk: 'from-blue-500 to-cyan-600',
  lab_technician: 'from-amber-500 to-orange-600',
  pharmacist: 'from-green-500 to-emerald-600',
  billing: 'from-slate-500 to-zinc-600',
  management: 'from-violet-500 to-purple-600',
};

const Login: React.FC = () => {
  const { login } = useAuth();

  const roles: UserRole[] = ['admin', 'doctor', 'nurse', 'front_desk', 'lab_technician', 'pharmacist', 'billing', 'management'];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">MedCare</h1>
              <p className="text-xs text-muted-foreground">Hospital Information System</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-2 pill-tabs">
            <span className="pill-tab pill-tab-active">Login</span>
            <span className="pill-tab">About</span>
            <span className="pill-tab">Support</span>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="hero-title text-foreground mb-4">
                Your path to<br />
                <span className="gradient-text">better healthcare</span>
                <span className="accent-dot"></span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Select your role to access the hospital management system
              </p>
            </div>

            {/* Role Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roles.map((role, index) => (
                <button
                  key={role}
                  onClick={() => login(role)}
                  className={cn(
                    "group floating-card text-left p-5 cursor-pointer border border-border/50",
                    "hover:border-primary/30 hover:bg-accent/30",
                    "focus:outline-none focus:ring-2 focus:ring-primary/20"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 text-white shadow-lg transition-transform group-hover:scale-110",
                    roleColors[role]
                  )}>
                    {roleIcons[role]}
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                    {roleNames[role]}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {roleDescriptions[role]}
                  </p>
                </button>
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-status-success/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-status-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">99.9% Uptime</p>
                  <p className="text-xs">System Status: Online</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">HIPAA Compliant</p>
                  <p className="text-xs">Secure & Encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center">
          <p className="text-xs text-muted-foreground">
            Demo Mode • No authentication required • v1.0.0
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;