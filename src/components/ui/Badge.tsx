import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-100 text-blue-800 border border-blue-300",
        secondary: "bg-gray-100 text-gray-800 border border-gray-300",
        destructive: "bg-red-100 text-red-800 border border-red-300",
        success: "bg-green-100 text-green-800 border border-green-300",
        warning: "bg-yellow-100 text-yellow-800 border border-yellow-300",
        info: "bg-cyan-100 text-cyan-800 border border-cyan-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
