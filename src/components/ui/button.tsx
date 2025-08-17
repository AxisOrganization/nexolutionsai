import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Enhanced Nexolutions variants
        nexo: "bg-nexo-pink text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-glow",
        "nexo-white": "bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-soft",
        "nexo-outline": "bg-white text-black font-semibold rounded hover:scale-105 transition-all duration-300 border border-nexo-pink/20 hover:border-nexo-pink/40",
        // Premium Framer-inspired variants
        premium: [
          "relative overflow-hidden",
          "bg-gradient-primary text-white font-semibold",
          "border border-nexo-pink/20 rounded-full",
          "shadow-elegant hover:shadow-glow",
          "transition-all duration-300 ease-out",
          "hover:scale-105 hover:-translate-y-0.5",
          "btn-glow"
        ],
        hero: [
          "relative",
          "bg-white/10 text-white font-bold",
          "border border-white/20 backdrop-blur-sm rounded-full",
          "hover:bg-white/20 hover:border-white/40",
          "transition-all duration-300",
          "shadow-lg hover:shadow-xl",
          "hover:scale-105"
        ],
        elegant: [
          "bg-bg-card text-foreground",
          "border border-muted hover:border-nexo-pink/30",
          "shadow-card hover:shadow-elegant",
          "transition-all duration-300",
          "hover:-translate-y-1 hover:scale-[1.02]",
          "rounded-2xl"
        ],
        glow: [
          "bg-nexo-pink text-white font-semibold",
          "shadow-glow hover:animate-glow-pulse",
          "transition-all duration-300",
          "hover:scale-105",
          "rounded-full"
        ],
        minimal: [
          "bg-transparent text-text-muted",
          "hover:text-foreground hover:bg-muted/50",
          "transition-colors duration-200"
        ]
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 px-8 text-base font-semibold",
        "2xl": "h-14 px-10 text-lg font-bold",
        "3xl": "h-16 px-24 text-3xl font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
