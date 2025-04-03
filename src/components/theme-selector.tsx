"use client"

import { Palette } from "lucide-react"
import { useTheme } from "./theme-provider"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

export function ThemeSelector() {
  const { colorTheme, setColorTheme } = useTheme()

  // Define theme colors
  const themes = [
    { name: "Red", value: "theme-red", color: "#ec1839" },
    { name: "Green", value: "theme-green", color: "#5c940d" },
    { name: "Orange", value: "theme-orange", color: "#fd7e14" },
    { name: "Blue", value: "theme-blue", color: "#1098ad" },
    { name: "Purple", value: "theme-purple", color: "#9c36b5" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select theme color">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.color }}></div>
            <span>{theme.name}</span>
            {colorTheme === theme.value && <span className="ml-auto">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

