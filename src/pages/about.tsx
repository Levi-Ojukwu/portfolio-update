import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Download, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      {/* Bio and Personal Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Ojukwu Levi Chinedu</h2>
            <h3 className="text-xl text-primary mb-4">Web3 Full-Stack Developer & Technical Writer</h3>

            <p className="mb-4">
              I am a passionate Web3 Full-Stack Developer and technical writer with expertise in building scalable
              decentralized applications (dApps) that bridge innovation and usability. With a strong foundation in both
              blockchain and frontend technologies, I specialize in crafting solutions that help create innovative tools
              for both the Web2 and Web3 ecosystem.
            </p>

            <p className="mb-4">
              My approach combines technical excellence with user-centered design, ensuring that complex blockchain
              functionality is accessible through intuitive interfaces. I believe that the future of web development
              lies at the intersection of decentralized technologies and exceptional user experiences.
            </p>

            <p className="mb-8">
              When I'm not coding, I enjoy sharing my knowledge through technical writing, contributing to open-source
              projects, and staying up-to-date with the latest developments in the blockchain space.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="/MyCV.pdf" target="_blank" rel="noreferrer">
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Download CV
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail size={16} />
                  Contact Me
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Personal Information</h3>
            <div className="space-y-3">
              <InfoItem label="Email" value="levdevoj17@gmail.com" />
              <InfoItem label="Phone" value="+234 704 895 2008" />
              <InfoItem label="Location" value="Abuja, Nigeria" />
              <InfoItem label="Degree" value="Computer Science" />
              <InfoItem label="Freelance" value="Available" />
              <InfoItem label="Website" value="www.dormain.com" />
            </div>
          </Card>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-1 after:w-12 after:bg-primary">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Blockchain</h3>
            <div className="space-y-6">
              <SkillBar name="Solidity" percentage={80} />
              <SkillBar name="Cairo" percentage={87} />
              <SkillBar name="Smart Contract Security" percentage={75} />
              <SkillBar name="Web3.js/Ethers.js" percentage={85} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="space-y-6">
              <SkillBar name="React.js" percentage={95} />
              <SkillBar name="TypeScript" percentage={85} />
              <SkillBar name="Tailwind CSS" percentage={98} />
              <SkillBar name="Next.js" percentage={90} />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-1 after:w-12 after:bg-primary">
            Professional Skills
          </h2>

          <div className="space-y-8">
            <ExperienceCard
              title="Blockchain Engineering"
              description="As a Blockchain Engineer, I bring technical expertise in Cairo, Solidity, and Foundry, creating innovative solutions to help achieve your goals in the web3 space. I specialize in developing secure, efficient smart contracts and integrating them with frontend applications."
            />

            <ExperienceCard
              title="Frontend Development"
              description="I specialize in building user-centric, visually stunning, and high-performing applications that help businesses connect to their audience and achieve their goals. My frontend work focuses on creating responsive, accessible interfaces that provide exceptional user experiences."
            />

            <ExperienceCard
              title="Technical Writing"
              description="I bridge the gap between complex technical concepts and accessible, actionable information. My writing is designed to empower your audience whether they are developers, end-users, or decision-makers by providing clarity and value in technical documentation."
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-1 after:w-12 after:bg-primary">
            Work Approach
          </h2>

          <div className="space-y-8">
            <ExperienceCard
              title="Creative Problem Solving"
              description="While my responsibilities are highly technical, I use creative thinking and experience to approach application features from a user-centered perspective. I design innovative solutions that both function well technically and meet the user's needs effectively."
            />

            <ExperienceCard
              title="Design Clarity"
              description="I operate with a clear and thorough understanding of web design and SEO optimization that helps explain the purpose of the website to users. My designs prioritize clarity, accessibility, and intuitive navigation to ensure the best possible user experience."
            />

            <ExperienceCard
              title="Strategic Planning"
              description="I'm experienced in planning and delivering web applications across multiple platforms. I write efficient, readable code using best practices when creating websites, ensuring scalability, maintainability, and performance optimization."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Info Item Component
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-2">
      <span className="font-medium">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </div>
  )
}

// Skill Bar Component
function SkillBar({ name, percentage }: { name: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2.5">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

// Experience Card Component
function ExperienceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="p-6 border-l-4 border-l-primary">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  )
}

