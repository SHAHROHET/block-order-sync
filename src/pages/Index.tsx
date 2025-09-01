import { useState } from "react"
import { MainLayout } from "@/components/layout/main-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { CreatePOForm } from "@/components/po/create-po-form"
import { Button } from "@/components/ui/button"

type ViewType = 'dashboard' | 'create-po' | 'pos' | 'suppliers'

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard')

  const handleViewChange = (view: string) => {
    setCurrentView(view as ViewType)
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardOverview onCreatePO={() => handleViewChange('create-po')} />
      case 'create-po':
        return <CreatePOForm />
      case 'pos':
        return <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Purchase Orders List</h2>
          <p className="text-muted-foreground mb-6">This feature is coming soon! You'll be able to view and manage all purchase orders here.</p>
          <Button onClick={() => handleViewChange('create-po')}>Create Your First PO</Button>
        </div>
      case 'suppliers':
        return <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Supplier Management</h2>
          <p className="text-muted-foreground mb-6">This feature is coming soon! You'll be able to manage supplier relationships here.</p>
          <Button onClick={() => handleViewChange('dashboard')}>Back to Dashboard</Button>
        </div>
      default:
        return <DashboardOverview onCreatePO={() => handleViewChange('create-po')} />
    }
  }

  return (
    <MainLayout currentView={currentView} onViewChange={handleViewChange}>
      {renderView()}
    </MainLayout>
  );
};

export default Index;
