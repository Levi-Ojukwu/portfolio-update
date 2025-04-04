import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Navbar from "./components/navbar"
// import Footer from "./components/footer"
// import HomePage from "./pages/home"
// import AboutPage from "./pages/about"
// import ServicesPage from "./pages/services"
// import PortfolioPage from "./pages/portfolio"
// import ContactPage from "./pages/contact"
import './App.css'
import "./index.css"

function App() {
  return (
    // <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              {/* <Route path="/about" element={<AboutPage />} /> */}
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
              {/* <Route path="/contact" element={<ContactPage />} /> */}
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </Router>
    // </ThemeProvider>
  )
}

export default App




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
