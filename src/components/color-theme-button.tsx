"use client"

import type React from "react"
import { useColorTheme } from "./color-theme-provider"
import { Button } from "./ui/button"
import { Palette } from "lucide-react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"

interface ThemeOption {
  name: string
  value: string
  color: string
}

const ColorThemeButton: React.FC = () => {
  const { colorTheme, setColorTheme } = useColorTheme()

  const themes: ThemeOption[] = [
    { name: "Purple", value: "purple", color: "bg-purple-500" },
    { name: "Blue", value: "blue", color: "bg-blue-500" },
    { name: "Emerald", value: "emerald", color: "bg-emerald-500" },
    { name: "Amber", value: "amber", color: "bg-amber-500" },
    { name: "Rose", value: "rose", color: "bg-rose-500" },
  ]

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 shadow-md border border-border/50 backdrop-blur-md bg-background/80"
          >
            <Palette className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 p-2 border border-border/50 backdrop-blur-md bg-background/80">
          <div className="grid grid-cols-5 gap-2">
            {themes.map((theme) => (
              <button
                key={theme.value}
                className={`h-10 w-10 rounded-full ${theme.color} cursor-pointer transition-all ${
                  colorTheme === theme.value ? "ring-2 ring-offset-2 ring-offset-background ring-foreground" : ""
                }`}
                onClick={() => setColorTheme(theme.value as any)}
                title={theme.name}
              />
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}

export default ColorThemeButton

