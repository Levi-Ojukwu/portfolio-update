import type React from "react"
import Header from "../header"
import Footer from "../footer"
import ThemeSwitcher from "../theme-switcher" 
import ColorThemeButton from "../color-theme-button" 

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <ColorThemeButton />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default MainLayout

