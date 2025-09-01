import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        draft: "bg-muted text-muted-foreground",
        pending: "bg-warning/10 text-warning border border-warning/20",
        approved: "bg-primary/10 text-primary border border-primary/20",
        accepted: "bg-secondary/10 text-secondary border border-secondary/20",
        fulfilled: "bg-success/10 text-success border border-success/20",
        delivered: "bg-success text-success-foreground",
        paid: "bg-gradient-success text-success-foreground font-semibold",
        rejected: "bg-destructive/10 text-destructive border border-destructive/20",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "draft",
      size: "md",
    },
  }
)

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statusBadgeVariants> {}

function StatusBadge({ className, variant, size, ...props }: StatusBadgeProps) {
  return (
    <div
      className={cn(statusBadgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { StatusBadge, statusBadgeVariants }