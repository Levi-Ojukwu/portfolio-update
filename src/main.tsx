/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ColorThemeProvider } from "./components/color-theme-provider";
import { ThemeProvider } from "./components/theme-provider";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<React.StrictMode>
		<ThemeProvider >
			<ColorThemeProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ColorThemeProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
