import type React from "react"
import Header from "../header"
import Footer from "../footer"
import ThemeSwitcher from "../theme-switcher"
// import ColorThemeButton from "../color-theme-button"

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* Theme switchers with improved positioning and styling */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <div className="p-2 rounded-lg bg-background/80 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex flex-col gap-3">
            {/* <div className="text-xs text-center text-muted-foreground mb-1">Theme</div> */}
            {/* <ColorThemeButton /> */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout

