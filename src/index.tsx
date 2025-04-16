import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
// import { ThemeProvider } from "./components/theme-provider"
import { ThemeProvider } from "next-themes"
import { ColorThemeProvider } from "./components/color-theme-provider"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ColorThemeProvider>
          <App />
        </ColorThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

