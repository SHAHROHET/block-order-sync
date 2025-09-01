import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  LayoutDashboard, 
  FileText, 
  Plus, 
  Users, 
  BarChart3, 
  Settings,
  Wallet,
  Shield
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean
  onNavigate?: (page: string) => void
  currentView?: string
}

const navigation = [
  {
    name: "Dashboard",
    key: "dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Purchase Orders",
    key: "pos",
    icon: FileText,
  },
  {
    name: "Create PO",
    key: "create-po",
    icon: Plus,
  },
  {
    name: "Suppliers",
    key: "suppliers",
    icon: Users,
  },
  {
    name: "Analytics",
    key: "analytics",
    icon: BarChart3,
  },
  {
    name: "Blockchain",
    key: "blockchain",
    icon: Wallet,
  },
]

const adminNavigation = [
  {
    name: "User Management",
    href: "#",
    icon: Shield,
    current: false,
  },
  {
    name: "Settings",
    href: "#",
    icon: Settings,
    current: false,
  },
]

export function Sidebar({ className, isOpen, onNavigate, currentView = 'dashboard', ...props }: SidebarProps) {
  return (
    <div 
      className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-card border-r transition-transform duration-300 ease-in-out",
        "md:relative md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        className
      )}
      {...props}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">SmartX</h2>
              <p className="text-xs text-muted-foreground">v1.0.0</p>
            </div>
          </div>
        </div>
        
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="space-y-2">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                const isCurrent = currentView === item.key
                return (
                  <Button
                    key={item.name}
                    variant={isCurrent ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      isCurrent && "bg-gradient-primary text-white shadow-glow"
                    )}
                    size="sm"
                    onClick={() => onNavigate?.(item.key)}
                  >
                    <Icon className="mr-3 h-4 w-4" />
                    {item.name}
                  </Button>
                )
              })}
            </div>
            
            <div className="pt-4">
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Administration
                </h3>
              </div>
              <div className="space-y-1">
                {adminNavigation.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="w-full justify-start"
                      size="sm"
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      {item.name}
                    </Button>
                  )
                })}
              </div>
            </div>
          </nav>
        </ScrollArea>
        
        <div className="border-t p-4">
          <div className="rounded-lg bg-gradient-subtle p-4">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
              <div>
                <p className="text-sm font-medium">Blockchain Status</p>
                <p className="text-xs text-muted-foreground">Connected to Ethereum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}