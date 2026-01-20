import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { getNavigationForRole, NavGroup } from '@/config/navigation';
import { cn } from '@/lib/utils';
import { Building2, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const navigation = getNavigationForRole(user.role);

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col h-screen sticky top-0">
      <div className="p-4 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2">
          <Building2 className="w-8 h-8 text-sidebar-primary" />
          <div>
            <h1 className="font-bold text-lg">MedCare HIS</h1>
            <p className="text-xs text-sidebar-foreground/70">Hospital System</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navigation.map((group) => (
          <NavGroupComponent key={group.title} group={group} currentPath={location.pathname} />
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border text-xs text-sidebar-foreground/50">
        v1.0.0 • Demo Mode
      </div>
    </aside>
  );
};

const NavGroupComponent: React.FC<{ group: NavGroup; currentPath: string }> = ({ group, currentPath }) => {
  const hasActiveItem = group.items.some((item) => currentPath === item.href);
  const [isOpen, setIsOpen] = React.useState(hasActiveItem || group.items.length <= 3);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider hover:text-sidebar-foreground/70">
        {group.title}
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-0.5">
        {group.items.map((item) => {
          const isActive = currentPath === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "nav-item",
                isActive && "nav-item-active"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1">{item.title}</span>
              {item.badge && (
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-xs font-medium",
                  item.badgeType === 'critical' && "bg-status-critical text-status-critical-foreground",
                  item.badgeType === 'warning' && "bg-status-warning text-status-warning-foreground",
                  item.badgeType === 'info' && "bg-status-info text-status-info-foreground"
                )}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Sidebar;
