/** @format */

"use client";

import type React from "react";
import { useColorTheme } from "./color-theme-provider";
import { Button } from "./ui/button";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface ThemeOption {
	name: string;
	value: string;
	color: string;
}

const ColorThemeButton: React.FC = () => {
	const { colorTheme, setColorTheme } = useColorTheme();

	const themes: ThemeOption[] = [
		{ name: "Purple", value: "purple", color: "#9c36b5" },
		{ name: "Blue", value: "blue", color: "#1098ad" },
		{ name: "Emerald", value: "emerald", color: "#10b981" },
		{ name: "Amber", value: "amber", color: "#f59e0b" },
		{ name: "Rose", value: "rose", color: "#f43f5e" },
	];

	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant='outline'
						size='icon'
						className='rounded-full h-10 w-10 shadow-md border border-gray-200 dark:border-gray-700 backdrop-blur-md bg-background/80'
						aria-label='Change color theme'>
						<Palette className='h-5 w-5' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					align='end'
					className=' border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-md bg-background/80'>
					{/* <div className='grid grid-cols-5 gap-2'>
						{themes.map((theme) => (
							<button
								key={theme.value}
								className={`h-5 w-5 rounded-full cursor-pointer transition-all ${
									colorTheme === theme.value
										? "ring-2 ring-offset-2 ring-offset-background ring-foreground"
										: ""
								}`}
								style={{ backgroundColor: theme.color }}
								onClick={() => setColorTheme(theme.value as any)}
								title={theme.name}
								aria-label={`Switch to ${theme.name} theme`}
							/>
						))}
					</div> */}

					<div className='p-1'>
						{themes.map((theme) => (
							<div
								key={`text-${theme.value}`}
								className={`px-3 py-2 rounded text-sm cursor-pointer flex items-center ${
									colorTheme === theme.value
										? "bg-secondary"
										: "hover:bg-secondary/50"
								}`}
								onClick={() => setColorTheme(theme.value as any)}>
								<div
									className='w-4 h-4 rounded-full mr-2'
									style={{ backgroundColor: theme.color }}>

								</div>
								{/* <span>{theme.name}</span> */}
								{colorTheme === theme.value && (
									<span className='ml-auto'>✓</span>
								)}
							</div>
						))}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</motion.div>
	);
};

export default ColorThemeButton;
