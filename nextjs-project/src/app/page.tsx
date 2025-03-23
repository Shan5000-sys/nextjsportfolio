import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl mx-auto px-4 py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-16 space-y-6">
          <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-background shadow-lg">
            {/* Use a simple img tag as fallback if Next/Image is causing issues */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <Image src="/image.jpeg" alt="Shangeeth Umasaran" fill className="object-cover" priority />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Shangeeth Umasaran</h1>
            <p className="text-xl text-muted-foreground">Cloud Engineer</p>
          </div>

          <p className="text-center max-w-2xl text-muted-foreground">
            Experienced cloud engineer specializing in AWS Cloud infrastructure with adaptability in working with GCP
            and Azure.
          </p>

          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:contact@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Projects Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard
              title="Serverless CI/CD Pipeline"
              description="Built a scalable data processing pipeline using AWS Lambda, S3, and DynamoDB that processes over 1M events daily."
              tags={["AWS", "Serverless", "Terraform", "Python", "Lambda"]}
              githubUrl="https://github.com/Shan5000-sys/lambda-cicd"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="Migration to CDK"
              description="Used AWS CDK in order to migrate using TypeScript."
              tags={["AWS", "TypeScript", "CDK", "CloudFormation", "S3", "EC2", "RDS"]}
              githubUrl="https://github.com/Shan5000-sys/migrationtocdk"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="Infrastructure as Code Framework"
              description="Created a reusable IaC framework that in order to connect to a Walkthrough video regarding Terraform project"
              tags={["Terraform", "AWS", "IaC", "Infrastructure"]}
              githubUrl="https://github.com/Shan5000-sys/terraform-portfolio-project"
              liveUrl="https://example.com"
            />

            <ProjectCard
              title="NextJS Portfolio Project"
              description="Automated the provisioning and configuration of making a Portfolio website with the assistance of AWS Amplify."
              tags={["AWS", "NextJS", "Amplify", "Github"]}
              githubUrl="https://github.com/Shan5000-sys/nextjsportfolio"
              liveUrl="https://example.com"
            />
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shangeeth Umasaran. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
}

function ProjectCard({ title, description, tags, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link href={liveUrl} target="_blank">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

