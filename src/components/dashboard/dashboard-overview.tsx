import { KPICard } from "@/components/ui/kpi-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { WelcomeSection } from "./welcome-section"
import { 
  FileText, 
  DollarSign, 
  Clock, 
  TrendingUp, 
  Users, 
  AlertCircle,
  Plus,
  Eye
} from "lucide-react"

interface DashboardOverviewProps {
  onCreatePO?: () => void
}

const mockKPIs = {
  totalPOs: 156,
  automationRate: 87.5,
  avgCycleTime: 4.2,
  supplierCompliance: 94.8,
  pendingApprovals: 8,
  totalValue: 2847500
}

const recentPOs = [
  {
    id: "PO-2024-001",
    supplier: "TechCorp Solutions",
    amount: 45000,
    status: "pending",
    dueDate: "2024-01-15",
    items: 3
  },
  {
    id: "PO-2024-002", 
    supplier: "Industrial Supply Co",
    amount: 23500,
    status: "approved",
    dueDate: "2024-01-18",
    items: 7
  },
  {
    id: "PO-2024-003",
    supplier: "Global Manufacturing",
    amount: 87200,
    status: "fulfilled",
    dueDate: "2024-01-20",
    items: 2
  },
  {
    id: "PO-2024-004",
    supplier: "Quick Parts LLC",
    amount: 15800,
    status: "delivered",
    dueDate: "2024-01-12",
    items: 5
  }
]

export function DashboardOverview({ onCreatePO }: DashboardOverviewProps) {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <WelcomeSection onCreatePO={onCreatePO} />

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Purchase Orders"
          value={mockKPIs.totalPOs}
          subtitle="This month"
          icon={FileText}
          variant="primary"
          trend={{ value: 12, isPositive: true }}
        />
        <KPICard
          title="Automation Rate"
          value={`${mockKPIs.automationRate}%`}
          subtitle="Process efficiency"
          icon={TrendingUp}
          variant="success"
          trend={{ value: 3.2, isPositive: true }}
        />
        <KPICard
          title="Avg Cycle Time"
          value={`${mockKPIs.avgCycleTime} days`}
          subtitle="From creation to payment"
          icon={Clock}
          variant="warning"
          trend={{ value: 0.8, isPositive: false }}
        />
        <KPICard
          title="Supplier Compliance"
          value={`${mockKPIs.supplierCompliance}%`}
          subtitle="On-time delivery rate"
          icon={Users}
          variant="success"
          trend={{ value: 2.1, isPositive: true }}
        />
      </div>

      {/* Action Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border-l-4 border-l-warning">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-warning" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning mb-2">
              {mockKPIs.pendingApprovals}
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Purchase orders awaiting approval
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Review Now
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-primary">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Total Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary mb-2">
              ${mockKPIs.totalValue.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Combined value of active POs
            </p>
            <Button variant="outline" size="sm" className="w-full">
              View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Plus className="h-4 w-4 text-success" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button 
                variant="gradient" 
                size="sm" 
                className="w-full"
                onClick={onCreatePO}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create New PO
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Invite Supplier
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Purchase Orders */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Purchase Orders</CardTitle>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPOs.map((po) => (
              <div
                key={po.id}
                className="flex items-center justify-between p-4 rounded-lg border transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center space-x-4">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{po.id}</p>
                    <p className="text-sm text-muted-foreground">{po.supplier}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">${po.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{po.items} items</p>
                  </div>
                  <StatusBadge variant={po.status as any}>
                    {po.status.charAt(0).toUpperCase() + po.status.slice(1)}
                  </StatusBadge>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Due</p>
                    <p className="text-xs font-medium">{po.dueDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}