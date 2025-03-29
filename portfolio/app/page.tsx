import Image from "next/image"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="container mx-auto pt-12 pb-6 px-4">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 mx-auto">
            <Image
              src="/image.jpeg"
              alt="Shangeeth Umasaran"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">Shangeeth Umasaran</h1>
            <p className="text-xl text-muted-foreground mt-2">Cloud Engineering Professional</p>
            <div className="flex gap-3 mt-4 justify-center">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/Shan5000-sys" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/shangeeth-umasaran-15885967/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:shangeeth023@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a cloud engineering professional specializing in AWS infrastructure, IaC (Infrastructure as Code), and
            cloud-native application development. With expertise in CloudFormation, CDK, Terraform, and various AWS
            services, I build scalable, secure, and efficient cloud solutions.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project cards go here */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground mb-6">
            Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <Button asChild>
            <a href="mailto:shangeeth023@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shangeeth Umasaran. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

