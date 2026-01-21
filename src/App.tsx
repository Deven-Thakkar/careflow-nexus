import Landing from "./pages/Landing";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layout/MainLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* ---------- PUBLIC ROUTES ---------- */}
      <Route
        path="/"
        element={
          isAuthenticated
            ? <Navigate to="/dashboard" replace />
            : <Landing />
        }
      />

      <Route
        path="/login"
        element={
          isAuthenticated
            ? <Navigate to="/dashboard" replace />
            : <Login />
        }
      />

      {/* ---------- PROTECTED APP ROUTES ---------- */}
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Dashboard />} />
        <Route path="/patients" element={<Dashboard />} />
        <Route path="/opd" element={<Dashboard />} />
        <Route path="/doctor" element={<Dashboard />} />
        <Route path="/nursing" element={<Dashboard />} />
        <Route path="/emergency" element={<Dashboard />} />
        <Route path="/lab" element={<Dashboard />} />
        <Route path="/pharmacy" element={<Dashboard />} />
        <Route path="/inventory" element={<Dashboard />} />
        <Route path="/beds" element={<Dashboard />} />
        <Route path="/ot" element={<Dashboard />} />
        <Route path="/billing" element={<Dashboard />} />
        <Route path="/insurance" element={<Dashboard />} />
        <Route path="/resources" element={<Dashboard />} />
        <Route path="/audit" element={<Dashboard />} />
        <Route path="/management" element={<Dashboard />} />
      </Route>

      {/* ---------- FALLBACK ---------- */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};



const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
