import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, BookOpen, Zap } from "lucide-react"
import heroImage from "@/assets/hero-blockchain.jpg"

interface WelcomeSectionProps {
  onCreatePO?: () => void
}

export function WelcomeSection({ onCreatePO }: WelcomeSectionProps) {
  return (
    <Card className="relative overflow-hidden mb-8">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="SmartX Blockchain Technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-primary opacity-80" />
      </div>
      
      <CardContent className="relative p-8 md:p-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Welcome to SmartX
              </h1>
              <p className="text-white/80 text-lg">
                Automated Purchase Order System on Blockchain
              </p>
            </div>
          </div>
          
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Streamline your procurement process with automated purchase orders, 
            smart contracts, and real-time blockchain transparency. Create, approve, 
            and track purchase orders with unprecedented efficiency and security.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-large"
              onClick={onCreatePO}
            >
              <Plus className="h-5 w-5 mr-2" />
              Create Your First PO
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Learn More
            </Button>
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <Zap className="h-4 w-4" />
              <span>Powered by Ethereum</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}