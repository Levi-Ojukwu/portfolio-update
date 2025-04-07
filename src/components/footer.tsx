import type React from "react"
import { Link } from "react-router-dom"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/50 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold font-heading">
              <span className="text-gradient">Oj</span> N'edu
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              A passionate Web3 Full-Stack Developer and technical writer with expertise in building scalable
              decentralized applications that bridge innovation and usability.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:levdevoj17@gmail.com"
                className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-foreground/80">Abuja, Nigeria</li>
              <li>
                <a
                  href="mailto:levdevoj17@gmail.com"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  levdevoj17@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347048952008"
                  className="text-foreground/80 hover:text-[hsl(var(--theme-primary))] transition-colors"
                >
                  +234 704 895 2008
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ojukwu Levi Chinedu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer




// import { Link } from "react-router-dom"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="border-t border-border/40 bg-background">
//       <div className="container py-8 md:py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="md:col-span-2">
//             <Link to="/" className="flex items-center mb-4">
//               <span className="text-2xl font-bold">
//                 <span className="text-primary">Oj</span> N&apos;edu
//               </span>
//             </Link>
//             <p className="text-muted-foreground max-w-md mb-4">
//               A passionate Web3 Full-Stack Developer and technical writer with expertise in building scalable
//               decentralized applications that bridge innovation and usability.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                 </svg>
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect x="2" y="9" width="4" height="12"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                 </svg>
//               </a>
//               <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                 </svg>
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick  Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
//                   Portfolio
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-2">
//               <li className="flex items-center gap-2 text-muted-foreground">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//                 </svg>
//                 +234 704 895 2008
//               </li>
//               <li className="flex items-center gap-2 text-muted-foreground">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                 </svg>
//                 levdevoj17@gmail.com
//               </li>
//               <li className="flex items-center gap-2 text-muted-foreground">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 Abuja, Nigeria
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-muted-foreground text-sm">© {currentYear} Ojukwu Levi Chinedu. All rights reserved.</p>
//           <p className="text-muted-foreground text-sm mt-2 md:mt-0">Designed & Developed with ❤️</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

