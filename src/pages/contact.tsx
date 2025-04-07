import type React from "react"
import ContactSection from "../components/sections/contact"
import ParticlesBackground from "../components/ui/particles-background"

const ContactPage: React.FC = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <ContactSection />
    </div>
  )
}

export default ContactPage




// import type React from "react"
// import { Button } from "../components/ui/button"
// import { Card } from "../components/ui/card"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"
// import { Mail, MapPin, Phone, Globe } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
//       <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
//         Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
//       </p>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//         {/* Contact Form */}
//         <div className="lg:col-span-2">
//           <Card className="p-8">
//             <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium">
//                     Your Name
//                   </label>
//                   <Input id="name" placeholder="John Doe" required />
//                 </div>
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium">
//                     Your Email
//                   </label>
//                   <Input id="email" type="email" placeholder="john@example.com" required />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm font-medium">
//                   Subject
//                 </label>
//                 <Input id="subject" placeholder="Project Inquiry" required />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium">
//                   Message
//                 </label>
//                 <Textarea id="message" placeholder="Tell me about your project or inquiry..." rows={6} required />
//               </div>

//               <Button type="submit" size="lg" className="w-full md:w-auto">
//                 Send Message
//               </Button>
//             </form>
//           </Card>
//         </div>

//         {/* Contact Information */}
//         <div>
//           <Card className="p-8">
//             <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//             <div className="space-y-6">
//               <ContactInfo
//                 icon={<Phone size={20} />}
//                 title="Phone"
//                 info="+234 704 895 2008"
//                 link="tel:+2347048952008"
//               />

//               <ContactInfo
//                 icon={<Mail size={20} />}
//                 title="Email"
//                 info="levdevoj17@gmail.com"
//                 link="mailto:levdevoj17@gmail.com"
//               />

//               <ContactInfo icon={<MapPin size={20} />} title="Location" info="Abuja, Nigeria" link="#" />

//               <ContactInfo
//                 icon={<Globe size={20} />}
//                 title="Website"
//                 info="www.dormain.com"
//                 link="https://www.dormain.com"
//               />
//             </div>

//             {/* Social Media Links */}
//             <div className="mt-8 pt-8 border-t border-border">
//               <h3 className="text-xl font-semibold mb-4">Social Media</h3>
//               <div className="flex gap-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                     <rect x="2" y="9" width="4" height="12"></rect>
//                     <circle cx="4" cy="4" r="2"></circle>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                   </svg>
//                 </a>
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                     <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Contact Info Component
// function ContactInfo({
//   icon,
//   title,
//   info,
//   link,
// }: {
//   icon: React.ReactNode
//   title: string
//   info: string
//   link: string
// }) {
//   return (
//     <a href={link} className="flex items-start gap-4 group">
//       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
//         {icon}
//       </div>
//       <div>
//         <h3 className="font-medium">{title}</h3>
//         <p className="text-muted-foreground group-hover:text-primary transition-colors">{info}</p>
//       </div>
//     </a>
//   )
// }

