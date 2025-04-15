// "use client"

// import { Button } from "./ui/button"
// import { useEffect, useState } from "react"
// import { ArrowRight } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function Hero() {
//   const [typedText, setTypedText] = useState("")
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
//   const [isDeleting, setIsDeleting] = useState(false)
//   const [typingSpeed, setTypingSpeed] = useState(150)

//   const phrases = ["Blockchain Developer", "Frontend Developer", "Technical Writer"]

//   // Typing animation effect
//   useEffect(() => {
//     const currentPhrase = phrases[currentPhraseIndex]

//     const type = () => {
//       if (isDeleting) {
//         // Deleting text
//         setTypedText(currentPhrase.substring(0, typedText.length - 1))
//         setTypingSpeed(50) // Faster when deleting
//       } else {
//         // Typing text
//         setTypedText(currentPhrase.substring(0, typedText.length + 1))
//         setTypingSpeed(150) // Normal typing speed
//       }

//       // If completed typing the current phrase
//       if (!isDeleting && typedText === currentPhrase) {
//         // Pause at the end of typing
//         setTimeout(() => setIsDeleting(true), 1500)
//       }
//       // If deleted the current phrase
//       else if (isDeleting && typedText === "") {
//         setIsDeleting(false)
//         // Move to the next phrase
//         setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
//       }
//     }

//     const timer = setTimeout(type, typingSpeed)
//     return () => clearTimeout(timer)
//   }, [typedText, isDeleting, currentPhraseIndex, phrases, typingSpeed])

//   return (
//     <section className="py-12 md:py-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//             Hello, I'm <span className="text-primary font-cursive">Ojukwu Levi Chinedu</span>
//           </h1>
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-12">
//             A <span className="text-primary">{typedText}</span>
//             <span className="animate-blink">|</span>
//           </h2>
//           <p className="text-muted-foreground text-lg mb-8 max-w-lg">
//             I am a passionate Web3 Full-Stack Developer and technical writer with expertise in building scalable
//             decentralized applications that bridge innovation and usability. I specialize in crafting solutions that
//             help create innovative tools for both the Web2 and Web3 ecosystem.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link to="/contact">
//               <Button size="lg" className="group">
//                 Hire Me
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//             </Link>
//             <Link to="/portfolio">
//               <Button variant="outline" size="lg">
//                 View My Work
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="relative hidden md:block">
//           <div className="relative z-10">
//             <img
//               src="/portfolio-img_-_Copy--2-removebg-preview.png"
//               alt="Ojukwu Levi Chinedu"
//               className="max-w-full rounded-lg shadow-2xl"
//             />
//           </div>
//           <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg transform rotate-3 scale-105 -z-10"></div>
//         </div>
//       </div>
//     </section>
//   )
// }

