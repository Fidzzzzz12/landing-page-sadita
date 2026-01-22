import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-card active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom Sadita variants
        whatsapp:
          "bg-[hsl(145_70%_42%)] text-[hsl(0_0%_100%)] shadow-card hover:bg-[hsl(145_70%_38%)] hover:shadow-elevated active:scale-[0.98]",
        gold:
          "bg-accent text-accent-foreground shadow-card hover:bg-accent/90 hover:shadow-elevated active:scale-[0.98]",
        hero:
          "bg-[hsl(0_0%_100%)] text-primary shadow-elevated hover:bg-[hsl(45_40%_95%)] hover:shadow-card active:scale-[0.98]",
        "hero-outline":
          "border-2 border-[hsl(0_0%_100%/0.4)] bg-[hsl(0_0%_100%/0.1)] text-[hsl(0_0%_100%)] backdrop-blur-sm hover:bg-[hsl(0_0%_100%/0.2)] hover:border-[hsl(0_0%_100%/0.6)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-13 rounded-xl px-8 py-4 text-base",
        xl: "h-14 rounded-xl px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
