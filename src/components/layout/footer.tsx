import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur">
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 rounded bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="font-medium">SmartX v1.0.0</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span>© 2024 SmartX. Blockchain-powered procurement.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-success rounded-full animate-pulse"></div>
              <span>Ethereum Connected</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <span>System Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}