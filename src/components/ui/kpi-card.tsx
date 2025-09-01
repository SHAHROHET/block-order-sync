import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface KPICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  subtitle?: string
  icon: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "primary" | "success" | "warning"
}

function KPICard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  variant = "default",
  className, 
  ...props 
}: KPICardProps) {
  return (
    <Card className={cn("relative overflow-hidden transition-all hover:shadow-glow", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={cn(
          "p-2 rounded-lg",
          variant === "primary" && "bg-gradient-primary text-white",
          variant === "success" && "bg-gradient-success text-white", 
          variant === "warning" && "bg-warning/10 text-warning",
          variant === "default" && "bg-muted"
        )}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div className="flex items-center space-x-2">
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <div className={cn(
              "text-xs font-medium flex items-center",
              trend.isPositive ? "text-success" : "text-destructive"
            )}>
              <span className="mr-1">
                {trend.isPositive ? "↗" : "↘"}
              </span>
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export { KPICard }