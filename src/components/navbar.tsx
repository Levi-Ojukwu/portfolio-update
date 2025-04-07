/** @format */

"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSelector } from "./theme-selector";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsMenuOpen(false);
	}, [location.pathname]);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMenuOpen]);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-16 items-center justify-between bg-green-500'>
				<div className='flex items-center gap-2'>
					<Link
						to='/'
						className='flex items-center'>
						<span className='text-2xl font-bold'>
							<span className='text-primary'>Oj</span> N&apos;edu
						</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							to={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								location.pathname === link.href
									? "text-primary"
									: "text-muted-foreground"
							}`}>
							{link.label}
						</Link>
					))}
				</nav>

				<div className='flex items-center gap-4'>
					<ThemeSelector />
					<ThemeToggle />

					{/* Mobile Menu Button */}
					<Button
						variant='ghost'
						size='icon'
						className='md:hidden'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label='Toggle menu'>
						{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className='fixed inset-0 top-16 z-50 bg-background md:hidden'>
					<nav className='container flex flex-col gap-6 p-6'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								className={`text-lg font-medium transition-colors hover:text-primary ${
									location.pathname === link.href
										? "text-primary"
										: "text-muted-foreground"
								}`}>
								{link.label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
