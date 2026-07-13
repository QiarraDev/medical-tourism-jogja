import * as React from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
  }

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, ...props }, ref) => (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <select
        className={cn(
          "flex h-10 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-gray-400 appearance-none cursor-pointer",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  )
)
Select.displayName = "Select"

export { Select }
