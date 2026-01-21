import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth, UserRole, roleNames } from '@/context/AuthContext';
import { 
  UserCog, Stethoscope, Heart, Users, FlaskConical, Pill, Receipt, BarChart3, 
  Building2, ArrowRight, Shield, Clock, Activity, CheckCircle2, ChevronRight,
  Bed, FileText, HeartPulse
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const roleIcons: Record<UserRole, React.ReactNode> = {
  admin: <UserCog className="w-5 h-5" />,
  doctor: <Stethoscope className="w-5 h-5" />,
  nurse: <Heart className="w-5 h-5" />,
  front_desk: <Users className="w-5 h-5" />,
  lab_technician: <FlaskConical className="w-5 h-5" />,
  pharmacist: <Pill className="w-5 h-5" />,
  billing: <Receipt className="w-5 h-5" />,
  management: <BarChart3 className="w-5 h-5" />,
};

const features = [
  {
    icon: Bed,
    title: 'Smart Bed Management',
    description: 'Real-time bed availability tracking with instant allocation'
  },
  {
    icon: FileText,
    title: 'Electronic Medical Records',
    description: 'ISBAR formatted notes with voice-to-text capabilities'
  },
  {
    icon: HeartPulse,
    title: 'Emergency Triage',
    description: 'Color-coded patient prioritization for critical care'
  },
  {
    icon: Activity,
    title: 'Live Analytics',
    description: 'Real-time KPIs, occupancy rates, and revenue tracking'
  }
];

const Login: React.FC = () => {
  const { login } = useAuth();
  const [showRoles, setShowRoles] = useState(false);

  const roles: UserRole[] = ['admin', 'doctor', 'nurse', 'front_desk', 'lab_technician', 'pharmacist', 'billing', 'management'];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/8 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">MedCare HIS</h1>
              <p className="text-xs text-muted-foreground">Hospital Information System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" />
              System Online
            </span>
          </div>
        </motion.header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-5xl">
            <AnimatePresence mode="wait">
              {!showRoles ? (
                <motion.div
                  key="hero"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Left - Hero Content */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <p className="text-sm font-medium text-primary mb-4 tracking-wide">
                        HOSPITAL INFORMATION SYSTEM
                      </p>
                      <h2 className="hero-title text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                        Streamlined healthcare<br />
                        <span className="gradient-text">management</span>
                        <span className="accent-dot"></span>
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
                        A comprehensive hospital management platform designed for doctors, nurses, 
                        and administrators. Manage patients, beds, labs, pharmacy, and billing — 
                        all in one unified system.
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-8">
                        <Button 
                          size="lg" 
                          onClick={() => setShowRoles(true)}
                          className="rounded-full px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="lg"
                          className="rounded-full px-8"
                        >
                          Learn More
                        </Button>
                      </div>

                      {/* Trust Badges */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          HIPAA Compliant
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          99.9% Uptime
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Secure & Encrypted
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Right - Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        className="floating-card p-5 hover:border-primary/20"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="roles"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-2xl mx-auto"
                >
                  <button 
                    onClick={() => setShowRoles(false)}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 rotate-180" />
                    Back to home
                  </button>

                  <div className="text-center mb-8">
                    <h2 className="hero-title text-3xl text-foreground mb-3">
                      Select your role<span className="accent-dot"></span>
                    </h2>
                    <p className="text-muted-foreground">
                      Choose your role to access the relevant modules
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {roles.map((role, index) => (
                      <motion.button
                        key={role}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onClick={() => login(role)}
                        className={cn(
                          "group floating-card p-4 cursor-pointer border border-border/50 text-center",
                          "hover:border-primary/40 hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                        )}
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {roleIcons[role]}
                        </div>
                        <h3 className="font-medium text-foreground text-sm">
                          {roleNames[role]}
                        </h3>
                      </motion.button>
                    ))}
                  </div>

                  <p className="text-center text-xs text-muted-foreground mt-8">
                    Demo Mode • No authentication required
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-6 text-center"
        >
          <p className="text-xs text-muted-foreground">
            MedCare HIS v1.0.0 • Built for healthcare professionals
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Login;