/** @format */

import type React from "react";
import PortfolioSection from "../components/sections/portfolio";
import ParticlesBackground from "../components/ui/particles-background";

const PortfolioPage: React.FC = () => {
	return (
		<div className='relative'>
			<ParticlesBackground />
			<PortfolioSection />
		</div>
	);
};

export default PortfolioPage;
