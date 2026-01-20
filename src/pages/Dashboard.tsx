import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { kpiData } from '@/data/mockData';
import { useAuth } from '@/context/AuthContext';
import { 
  Bed, Users, Stethoscope, AlertTriangle, FlaskConical, 
  Receipt, TrendingUp, Clock, Activity
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Bed Occupancy', value: `${kpiData.bedOccupancy}%`, icon: Bed, color: 'text-primary' },
    { title: 'Today Admissions', value: kpiData.todayAdmissions, icon: Users, color: 'text-status-success' },
    { title: 'OPD Visits', value: kpiData.opdVisits, icon: Stethoscope, color: 'text-status-info' },
    { title: 'Critical Patients', value: kpiData.criticalPatients, icon: AlertTriangle, color: 'text-status-critical' },
    { title: 'Pending Labs', value: kpiData.pendingLabTests, icon: FlaskConical, color: 'text-status-warning' },
    { title: 'Pending Bills', value: kpiData.pendingBills, icon: Receipt, color: 'text-status-pending' },
    { title: "Today's Revenue", value: `₹${(kpiData.revenue.today / 1000).toFixed(0)}K`, icon: TrendingUp, color: 'text-status-success' },
    { title: 'Avg Wait Time', value: `${kpiData.averageWaitTime} min`, icon: Clock, color: 'text-muted-foreground' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="module-header">Dashboard</h1>
        <p className="text-muted-foreground -mt-4">Overview of hospital operations</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Staff on Duty
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span>Doctors</span><span className="font-bold">{kpiData.staffOnDuty.doctors}</span></div>
            <div className="flex justify-between"><span>Nurses</span><span className="font-bold">{kpiData.staffOnDuty.nurses}</span></div>
            <div className="flex justify-between"><span>Support Staff</span><span className="font-bold">{kpiData.staffOnDuty.support}</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-status-warning" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="p-3 bg-status-critical/10 rounded-lg text-sm">
              <span className="font-medium text-status-critical">Critical:</span> {kpiData.criticalPatients} patients require attention
            </div>
            <div className="p-3 bg-status-warning/10 rounded-lg text-sm">
              <span className="font-medium text-status-warning">Inventory:</span> {kpiData.lowStockItems} items low stock
            </div>
            <div className="p-3 bg-status-info/10 rounded-lg text-sm">
              <span className="font-medium text-status-info">Pending:</span> {kpiData.pendingInsuranceClaims} insurance claims
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
