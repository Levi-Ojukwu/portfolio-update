
"use client"

  import { Palette } from "lucide-react"
  import { Button } from "./ui/button"
  import { DropdownMenu, DropdownMenuContent,  DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu"
  import { ColorTheme, useColorTheme } from "./color-theme-provider" // <-- Use the correct hook

  export function ThemeSelector() {
    const { colorTheme, setColorTheme } = useColorTheme()

    // Type the theme option correctly 
    const themes: { name: string; value: ColorTheme; color: string }[]  = [
      { name: "Purple", value: "theme-purple", color: "#9c36b5" },
      { name: "Blue", value: "theme-blue", color: "#1098ad" },
      { name: "Emerald", value: "theme-emerald", color: "#009473" },
      { name: "Amber", value: "theme-amber", color: "#ff7e00" },
      { name: "Rose", value: "theme-rose", color: "#e5788f" },
    ];

    // const handleThemeChange = (theme: string) => {
    //   console.log(`Attempting to set theme to: ${theme}`)
    //   setColorTheme(theme as ColorTheme)
    // }

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

