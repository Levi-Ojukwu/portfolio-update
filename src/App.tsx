/** @format */

import type React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main-layout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";
import WelcomePage from "./pages/welcome";
import WelcomeGuard from "./components/welcome-guard";
import { useColorTheme } from "./components/color-theme-provider";
import "./index.css";
import "./output.css";

const App: React.FC = () => {
	const { colorTheme } = useColorTheme();
	// const [showWelcome, setShowWelcome] = useState(true);

	// // Check if this is the first visit
	// useEffect(() => {
	// 	const hasVisited = sessionStorage.getItem("hasVisited");
	// 	if (hasVisited) {
	// 		setShowWelcome(false);
	// 	} else {
	// 		sessionStorage.setItem("hasVisited", "true");
	// 	}
	// }, []);

	// Ensure theme is applied on initial load
	useEffect(() => {
		// Remove all theme classes
		document.documentElement.classList.remove(
			"theme-purple",
			"theme-blue",
			"theme-emerald",
			"theme-amber",
			"theme-rose",
		);

		// Add current theme class
		document.documentElement.classList.add(`theme-${colorTheme}`);
	}, [colorTheme]);

	// Otherwise show the main app
	return (
		// <MainLayout>
		// 	<Routes>
		// 		<Route
		// 			path='/'
		// 			element={<HomePage />}
		// 		/>
		// 		<Route
		// 			path='/about'
		// 			element={<AboutPage />}
		// 		/>
		// 		<Route
		// 			path='/services'
		// 			element={<ServicesPage />}
		// 		/>
		// 		<Route
		// 			path='/portfolio'
		// 			element={<PortfolioPage />}
		// 		/>
		// 		<Route
		// 			path='/contact'
		// 			element={<ContactPage />}
		// 		/>
		// 		<Route
		// 			path='/welcome'
		// 			element={<WelcomePage />}
		// 		/>
		// 	</Routes>
		// </MainLayout>

		<WelcomeGuard>
			<Routes>
				{/* Welcome page route - rendered without MainLayout */}
				<Route
					path='/welcome'
					element={<WelcomePage />}
				/>

				{/* All other routes - rendered with MainLayout */}
				<Route
					path='/'
					element={
						<MainLayout>
							<HomePage />
						</MainLayout>
					}
				/>
				<Route
					path='/about'
					element={
						<MainLayout>
							<AboutPage />
						</MainLayout>
					}
				/>
				<Route
					path='/services'
					element={
						<MainLayout>
							<ServicesPage />
						</MainLayout>
					}
				/>
				<Route
					path='/portfolio'
					element={
						<MainLayout>
							<PortfolioPage />
						</MainLayout>
					}
				/>
				<Route
					path='/contact'
					element={
						<MainLayout>
							<ContactPage />
						</MainLayout>
					}
				/>
			</Routes>
		</WelcomeGuard>
	);
};

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { ThemeProvider } from "./components/theme-provider"
// import Navbar from "./components/navbar"
// import Footer from "./components/footer"
// // import HomePage from "./pages/home"
// import AboutPage from "./pages/about"
// // import ServicesPage from "./pages/services"
// // import PortfolioPage from "./pages/portfolio"
// import ContactPage from "./pages/contact"
// import './App.css'
// import "./index.css"
// import "./output.css"

// function App() {
//   return (
//     <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
//       <Router>
//         <div className="flex flex-col min-h-screen">
//           <Navbar />
//           <main className="flex-grow">
//             <Routes>
//               {/* <Route path="/" element={<HomePage />} /> */}
//               <Route path="/about" element={<AboutPage />} />
//               {/* <Route path="/services" element={<ServicesPage />} /> */}
//               {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
//               <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     // </ThemeProvider>
//   )
// }

// export default App

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
