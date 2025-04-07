"use client"

import type React from "react"
import { createContext, forwardRef, useContext, useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"

interface DropdownMenuContextType {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenuContext = createContext<DropdownMenuContextType>({
  open: false,
  setOpen: () => {},
})

interface DropdownMenuProps {
  children: React.ReactNode
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)

  return <DropdownMenuContext.Provider value={{ open, setOpen }}>{children}</DropdownMenuContext.Provider>
}

interface DropdownMenuTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
}

const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, asChild, ...props }, ref) => {
    const { open, setOpen } = useContext(DropdownMenuContext)
    const Comp = asChild ? "span" : "button"

    return (
      <Comp ref={ref as any} onClick={() => setOpen(!open)} {...props}>
        {children}
      </Comp>
    )
  },
)

DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

interface DropdownMenuContentProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  align?: "start" | "center" | "end"
  className?: string
}

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ children, align = "center", className, ...props }, ref) => {
    const { open, setOpen } = useContext(DropdownMenuContext)

    const alignClasses: Record<string, string> = {
      start: "left-0",
      center: "left-1/2 -translate-x-1/2",
      end: "right-0",
    }

    if (typeof document === "undefined") return null

    return createPortal(
      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-50" onClick={() => setOpen(false)} />
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className={`absolute z-50 mt-2 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md ${alignClasses[align]} ${className || ""}`}
              {...props}
            >
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body,
    )
  },
)

DropdownMenuContent.displayName = "DropdownMenuContent"

interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`px-2 py-1.5 text-sm font-semibold ${className || ""}`} {...props} />
))

DropdownMenuLabel.displayName = "DropdownMenuLabel"

interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const DropdownMenuSeparator = forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={`-mx-1 my-1 h-px bg-border ${className || ""}`} {...props} />
))

DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator }



// import * as React from "react"
// import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

// import { cn } from "../../lib/utils" 

// const DropdownMenu = DropdownMenuPrimitive.Root

// const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

// const DropdownMenuContent = React.forwardRef<
//   React.ElementRef<typeof DropdownMenuPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
// >(({ className, sideOffset = 4, ...props }, ref) => (
//   <DropdownMenuPrimitive.Portal>
//     <DropdownMenuPrimitive.Content
//       ref={ref}
//       sideOffset={sideOffset}
//       className={cn(
//         "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//         className,
//       )}
//       {...props}
//     />
//   </DropdownMenuPrimitive.Portal>
// ))
// DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// const DropdownMenuItem = React.forwardRef<
//   React.ElementRef<typeof DropdownMenuPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <DropdownMenuPrimitive.Item
//     ref={ref}
//     className={cn(
//       "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
//       className,
//     )}
//     {...props}
//   />
// ))
// DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

// export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }

