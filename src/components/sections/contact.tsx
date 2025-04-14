"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Phone, MapPin, Mail, Globe, Send } from "lucide-react"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  content: string
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success message would go here (using a toast or alert)
      alert("Message sent! Thank you for your message. I'll get back to you soon.")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      // Error message would go here
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Me",
      content: "+234 704 895 2008",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      content: "Abuja, Nigeria",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "levdevoj17@gmail.com",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website",
      content: "www.dormain.com",
    },
  ]

  return (
    <section className="py-20 pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Contact <span className="text-gradient">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
            Have a question or want to work together? Feel free to get in touch with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-gradient mb-2 font-heading">Have You Any Questions?</h3>
          <h4 className="text-lg mb-8">I'M AT YOUR SERVICE</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="contact-info-item"
              >
                <div className="contact-icon mb-4">{info.icon}</div>
                <h4 className="text-lg font-semibold mb-1 font-heading">{info.title}</h4>
                <p className="text-muted-foreground">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-gradient mb-2 font-heading">SEND ME AN EMAIL</h3>
          <h4 className="text-lg mb-8">I'M VERY RESPONSIVE TO MESSAGES</h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-6">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="mb-6">
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-control"
                rows={6}
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="bg-gradient text-white hover:opacity-90 px-10 py-6 group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

