import type React from "react"
import { ThemeProvider } from "../components/theme-provider" 
import { ColorThemeProvider } from "../components/color-theme-provider" 
import { Poppins, Inter, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import "./index.css"


interface RootLayoutProps {
    children: React.ReactNode
  }

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "Ojukwu Levi Chinedu | Web3 Developer",
  description:
    "Professional portfolio of Ojukwu Levi Chinedu, a Web3 Full-Stack Developer and Technical Writer specializing in blockchain technology.",
}

export default function RootLayout({ children }: RootLayoutProps){
  
  return (
    <html lang="en" suppressHydrationWarning data-color-theme="theme-purple" className="dark">
      <body className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ColorThemeProvider>{children}</ColorThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
