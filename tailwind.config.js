/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
     content: ["./src/**/*.{html,js,ts,jsx,tsx}", ],
     darkMode: "class", // enables dark mode via class
     safelist: ['border-border'], // 👈 Force Tailwind to generate it
      theme: {
        extend: {
          colors: {
            border: "hsl(var(--border) / <alpha-value>)",
            input: "hsl(var(--input) / <alpha-value>)",
            background: "hsl(var(--background) / <alpha-value>)",
            foreground: "hsl(var(--foreground) / <alpha-value>)",
            primary: "hsl(var(--primary) / <alpha-value>)",
            "primary-foreground": "hsl(var(--primary-foreground) / <alpha-value>)",
            secondary: "hsl(var(--secondary) / <alpha-value>)",
            "secondary-foreground": "hsl(var(--secondary-foreground) / <alpha-value>)",
            muted: "hsl(var(--muted) / <alpha-value>)",
            "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
            accent: "hsl(var(--accent) / <alpha-value>)",
            "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
            destructive: "hsl(var(--destructive) / <alpha-value>)",
            "destructive-foreground": "hsl(var(--destructive-foreground) / <alpha-value>)",
            ring: "hsl(var(--ring) / <alpha-value>)",
          },
          backgroundColor: {
            background: "hsl(var(--background) / <alpha-value>)",
          },
          textColor: {
            foreground: "hsl(var(--foreground) / <alpha-value>)",
          },
          borderColor: {
            border: "hsl(var(--border) / <alpha-value>)",
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
        },
      },
      plugins: [],
    }
