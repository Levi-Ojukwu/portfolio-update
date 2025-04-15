/** @format */

import type React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className='border-t border-border/50 backdrop-blur-md bg-background/80'>
			<div className='container mx-auto px-4 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					<div className='md:col-span-2'>
						<Link
							to='/'
							className='text-2xl font-bold font-heading'>
							<span className='text-gradient'>Oj</span> N'edu
						</Link>
						<p className='mt-4 text-muted-foreground max-w-md'>
							A passionate Web3 Full-Stack Developer and technical writer with
							expertise in building scalable decentralized applications that
							bridge innovation and usability.
						</p>
						<div className='flex space-x-4 mt-6'>
							<a
								href='https://github.com/Levi-Ojukwu'
								target='_blank'
								rel='noopener noreferrer'
								className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'
								aria-label='GitHub'>
								<Github size={20} />
							</a>
							<a
								href='https://x.com/levdev_ojukwu'
								target='_blank'
								rel='noopener noreferrer'
								className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'
								aria-label='Twitter'>
								<Twitter size={20} />
							</a>
							<a
								href='https://www.linkedin.com/in/levi-ojukwu-a132762b7/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'
								aria-label='LinkedIn'>
								<Linkedin size={20} />
							</a>
							<a
								href='https://mail.google.com/mail/?view=cm&fs=1&to=ojukwulevichinedu@gmail.com'
								className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'
								target='_blank'
								aria-label='Email'>
								<Mail size={20} />
							</a>

							<a
								href='tel:+2347048952008'
								className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'
								aria-label='Phone'>
								<Phone size={20} />
							</a>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4 font-heading'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<Link
									to='/'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									Home
								</Link>
							</li>
							<li>
								<Link
									to='/about'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									About
								</Link>
							</li>
							<li>
								<Link
									to='/services'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									Services
								</Link>
							</li>
							<li>
								<Link
									to='/portfolio'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									to='/contact'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold mb-4 font-heading'>
							Contact Info
						</h3>
						<ul className='space-y-2'>
							<li className='text-foreground/80'>Abuja, Nigeria</li>
							<li>
								<a
									href='https://mail.google.com/mail/?view=cm&fs=1&to=ojukwulevichinedu@gmail.com'
									target='_blank'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors'>
									ojukwulevichinedu@gmail.com
								</a>
							</li>
							<li>
								<a
									href='tel:+2347048952008'
									className='text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors flex items-center gap-2'>
									<Phone size={16} />
									+234 704 895 2008
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground'>
					<p>
						© {new Date().getFullYear()} Ojukwu Levi Chinedu. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
