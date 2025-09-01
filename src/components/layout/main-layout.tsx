import { useState } from "react"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import { Footer } from "./footer"
import { cn } from "@/lib/utils"

interface MainLayoutProps {
  children: React.ReactNode
  currentView?: string
  onViewChange?: (view: string) => void
}

export function MainLayout({ children, currentView, onViewChange }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onMobileMenuToggle={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      
      <div className="flex">
        <Sidebar isOpen={isMobileMenuOpen} onNavigate={onViewChange} currentView={currentView} />
        
        {/* Main Content */}
        <main className="flex-1 md:ml-0 min-h-screen flex flex-col">
          <div className="flex-1 container mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer />
        </main>
      </div>
      
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  )
}