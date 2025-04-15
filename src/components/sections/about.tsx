/** @format */

"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ProgressBar } from "../ui/progress-bar";
import { Timeline } from "../ui/timeline";
import { Download } from "lucide-react";

interface Skill {
	name: string;
	percentage: number;
}

interface PersonalInfo {
	label: string;
	value: string;
}

interface TimelineItem {
	title: string;
	description: string;
}

const AboutSection: React.FC = () => {
	const skills: Skill[] = [
		{ name: "Solidity", percentage: 75 },
		{ name: "Cairo", percentage: 50 },
		{ name: "React.js", percentage: 88 },
		{ name: "TypeScript", percentage: 65 },
		{ name: "Tailwind CSS", percentage: 97 },
	];

	const personalInfo: PersonalInfo[] = [
		{ label: "Email", value: "levdevoj17@gmail.com" },
		{ label: "Phone", value: "+234 704 895 2008" },
		{ label: "City", value: "Abuja, Nigeria" },
	];

	const skillItems: TimelineItem[] = [
		{
			title: "Blockchain Engineering",
			description:
				"As a Blockchain Engineer, I bring the technical expertise in Cairo, Solidity, and Foundry, creating creative problem-solving skills needed to help achieve your goals in the web3 space. If you are ready to take your blockchain projects to another level, I am here to help.",
		},
		{
			title: "Frontend Development",
			description:
				"I am a frontend developer who specializes in building user-centric, visually stunning, and high-performing applications that help businesses connect to their audience and achieve their goals. Whether you are launching a startup, building a dApp, or maintaining your digital presence, I'm here to help.",
		},
		{
			title: "Technical Writing",
			description:
				"I use this skill to bridge the gaps between complex technical concepts and accessible, actionable information. My writing is designed to empower your audience whether they are developers, end-users, or decision-makers by providing clarity and value.",
		},
	];

	const experienceItems: TimelineItem[] = [
		{
			title: "Creative Thinking",
			description:
				"My career as a developer, my responsibilities are highly technical. However, I use creative thinking and experience to approach user's application features. Using design innovative programs that both function well and meet the browser's needs.",
		},
		{
			title: "Design Clarification",
			description:
				"As a well experienced frontend Developer, I have, and operate with clear and thorough understanding of web design and SEO optimization that helps explain the purposes of the website to the users.",
		},
		{
			title: "Website Planning",
			description:
				"I am well experienced in the planning and the delivery of web across multiple platforms. My job descriptions are, writing efficient and readable code, using best practice when creating or building websites using the above mentioned stacks.",
		},
	];

	return (
		<section className='py-20 pt-32'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='mb-12 text-center'>
					<h1 className='text-4xl md:text-5xl font-bold font-heading mb-4'>
						About <span className='text-gradient'>Me</span>
					</h1>
					<div className='w-24 h-1 bg-gradient mx-auto rounded-full'></div>
				</motion.div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<h3 className='text-2xl font-semibold mb-4 font-heading'>
							I am Levi Ojukwu,{" "}
							<span className='text-gradient'>
								a Web Developer, and A Technical Writer
							</span>
						</h3>
						<p className='text-muted-foreground mb-6'>
							I develop web and blockchain applications using Solidity, Cairo,
							TypeScript, React.js, Laravel, and PHP. I enjoy creating smart
							solutions that solve real-world problems while making sure they
							are easy to use. As a technical writer, I also simplify complex
							technical concepts into clear and accessible content to support
							and grow developer communities
						</p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-8'>
							{personalInfo.map((info, index) => (
								<div
									key={index}
									className='border-b border-border py-3'>
									<p className='font-semibold'>
										{info.label}:{" "}
										<span className='font-normal text-muted-foreground'>
											{info.value}
										</span>
									</p>
								</div>
							))}
						</div>

						<Button
							asChild
							className='bg-gradient text-white hover:opacity-90 group'>
							<a
								href='/MyCV.pdf'
								download
								className='flex items-center gap-2'>
								Download CV
								<Download className='h-4 w-4 transition-transform group-hover:translate-y-1' />
							</a>
						</Button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className='space-y-6'>
						<h3 className='text-2xl font-semibold mb-4 font-heading'>
							My Skills
						</h3>
						{skills.map((skill, index) => (
							<div key={index}>
								<div className='flex justify-between mb-2'>
									<h5 className='font-medium'>{skill.name}</h5>
									<span className='text-muted-foreground'>
										{skill.percentage}%
									</span>
								</div>
								<ProgressBar value={skill.percentage} />
							</div>
						))}
					</motion.div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16'>
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}>
						<h3 className='text-2xl font-semibold mb-6 font-heading'>
							Professional Skills
						</h3>
						<Timeline items={skillItems} />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}>
						<h3 className='text-2xl font-semibold mb-6 font-heading'>
							Experience
						</h3>
						<Timeline items={experienceItems} />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
