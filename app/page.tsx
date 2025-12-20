'use client';

import { useState } from 'react';
import { Check, Github, Globe, Rocket, Terminal, Settings, ExternalLink, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleStep = (step: number) => {
    if (completedSteps.includes(step)) {
      setCompletedSteps(completedSteps.filter(s => s !== step));
    } else {
      setCompletedSteps([...completedSteps, step]);
    }
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const steps = [
    {
      id: 1,
      title: 'Create Your Next.js Project',
      icon: Terminal,
      description: 'Set up a new Next.js application',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            First, create a new Next.js application using create-next-app. This will set up everything you need with recommended configurations.
          </p>
          <div className="relative">
            <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
              <code>npx create-next-app@latest my-app</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard('npx create-next-app@latest my-app', 'create-app')}
            >
              {copiedCode === 'create-app' ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="space-y-2 bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <p className="text-sm font-medium">During setup, you'll be asked:</p>
            <ul className="text-sm space-y-1 ml-4 list-disc text-muted-foreground">
              <li>TypeScript? → Yes (recommended)</li>
              <li>ESLint? → Yes</li>
              <li>Tailwind CSS? → Yes</li>
              <li>App Router? → Yes</li>
            </ul>
          </div>
          <div className="relative mt-4">
            <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
              <code>cd my-app{'\n'}npm run dev</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard('cd my-app\nnpm run dev', 'cd-app')}
            >
              {copiedCode === 'cd-app' ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Initialize Git Repository',
      icon: Github,
      description: 'Set up version control for your project',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Vercel integrates seamlessly with Git providers. Initialize a Git repository and push your code to GitHub, GitLab, or Bitbucket.
          </p>
          <div className="relative">
            <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
              <code>git init{'\n'}git add .{'\n'}git commit -m "Initial commit"</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard('git init\ngit add .\ngit commit -m "Initial commit"', 'git-init')}
            >
              {copiedCode === 'git-init' ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Create a new repository on GitHub and push your code:
          </p>
          <div className="relative">
            <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
              <code>git remote add origin https://github.com/username/my-app.git{'\n'}git branch -M main{'\n'}git push -u origin main</code>
            </pre>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard('git remote add origin https://github.com/username/my-app.git\ngit branch -M main\ngit push -u origin main', 'git-push')}
            >
              {copiedCode === 'git-push' ? (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Deploy to Vercel',
      icon: Rocket,
      description: 'Connect your repository and deploy',
      content: (
        <div className="space-y-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="dashboard">Vercel Dashboard</TabsTrigger>
              <TabsTrigger value="cli">Vercel CLI</TabsTrigger>
            </TabsList>
            <TabsContent value="dashboard" className="space-y-4">
              <ol className="space-y-4 list-decimal list-inside">
                <li className="text-sm">
                  <span className="font-medium">Visit Vercel</span>
                  <p className="ml-6 mt-2 text-muted-foreground">
                    Go to{' '}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      vercel.com
                      <ExternalLink className="h-3 w-3" />
                    </a>{' '}
                    and sign up or log in with your Git provider
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Import Project</span>
                  <p className="ml-6 mt-2 text-muted-foreground">
                    Click "Add New Project" and import your Git repository
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Configure Settings</span>
                  <p className="ml-6 mt-2 text-muted-foreground">
                    Vercel auto-detects Next.js. Review the settings and click "Deploy"
                  </p>
                </li>
                <li className="text-sm">
                  <span className="font-medium">Wait for Build</span>
                  <p className="ml-6 mt-2 text-muted-foreground">
                    Vercel will build and deploy your application (usually takes 1-2 minutes)
                  </p>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="cli" className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Install the Vercel CLI and deploy directly from your terminal:
              </p>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>npm i -g vercel</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard('npm i -g vercel', 'install-cli')}
                >
                  {copiedCode === 'install-cli' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
                  <code>vercel</code>
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2"
                  onClick={() => copyToClipboard('vercel', 'deploy-cli')}
                >
                  {copiedCode === 'deploy-cli' ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Follow the prompts to link your project and deploy!
              </p>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Configure Environment Variables',
      icon: Settings,
      description: 'Set up environment variables (optional)',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            If your app uses environment variables, add them in the Vercel dashboard or via CLI.
          </p>
          <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg space-y-2">
            <p className="text-sm font-medium">Via Dashboard:</p>
            <ol className="text-sm space-y-1 ml-4 list-decimal text-muted-foreground">
              <li>Go to Project Settings → Environment Variables</li>
              <li>Add your variables (e.g., API keys, database URLs)</li>
              <li>Choose which environments they apply to</li>
            </ol>
          </div>
          <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg space-y-2">
            <p className="text-sm font-medium">Via CLI:</p>
            <div className="relative mt-2">
              <pre className="bg-slate-950 text-slate-50 rounded-lg p-4 overflow-x-auto text-sm">
                <code>vercel env add VARIABLE_NAME</code>
              </pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={() => copyToClipboard('vercel env add VARIABLE_NAME', 'env-cli')}
              >
                {copiedCode === 'env-cli' ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: 'Access Your Deployed Site',
      icon: Globe,
      description: 'View your live application',
      content: (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Once deployed, Vercel provides you with a live URL. You'll get:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Production URL</CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-xs bg-slate-100 dark:bg-slate-800 p-2 rounded block">
                  https://my-app.vercel.app
                </code>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Preview URLs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Unique URL for each branch/PR
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-900 dark:text-green-100">
              Automatic Deployments
            </p>
            <p className="text-sm text-green-700 dark:text-green-300 mt-1">
              Every push to your main branch automatically triggers a new deployment. Preview deployments are created for pull requests.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <Badge className="mb-4" variant="outline">
            Complete Guide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Deploy Next.js to Vercel
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A step-by-step interactive guide to deploying your Next.js application to Vercel's platform
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Badge variant="secondary" className="px-4 py-2">
              <Terminal className="h-4 w-4 mr-2" />
              Next.js 15
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Rocket className="h-4 w-4 mr-2" />
              Vercel Platform
            </Badge>
          </div>
        </div>

        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Your Progress
            </CardTitle>
            <CardDescription>
              {completedSteps.length} of {steps.length} steps completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`h-2 flex-1 rounded-full transition-all ${
                    completedSteps.includes(step.id)
                      ? 'bg-green-600'
                      : 'bg-slate-200 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(step.id);

            return (
              <Card
                key={step.id}
                className={`transition-all ${
                  isCompleted ? 'border-green-600 bg-green-50 dark:bg-green-950' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 items-start flex-1">
                      <div
                        className={`p-3 rounded-lg ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-800'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-muted-foreground">
                            Step {index + 1}
                          </span>
                          {isCompleted && (
                            <Badge variant="default" className="bg-green-600">
                              <Check className="h-3 w-3 mr-1" />
                              Done
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                    <Button
                      variant={isCompleted ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => toggleStep(step.id)}
                      className="ml-4"
                    >
                      {isCompleted ? 'Completed' : 'Mark Complete'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>{step.content}</CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 border-2">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>Learn more about Next.js and Vercel</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Custom Domains</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      Add your custom domain in Project Settings → Domains. Vercel automatically
                      provisions SSL certificates.
                    </p>
                    <a
                      href="https://vercel.com/docs/concepts/projects/custom-domains"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      Learn more about custom domains
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Performance Monitoring</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      Vercel provides built-in analytics to monitor your app's performance,
                      including Core Web Vitals and real user metrics.
                    </p>
                    <a
                      href="https://vercel.com/docs/concepts/analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      Learn about Analytics
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Serverless Functions</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                      Next.js API Routes are automatically deployed as serverless functions on
                      Vercel, scaling automatically with your traffic.
                    </p>
                    <a
                      href="https://vercel.com/docs/concepts/functions/serverless-functions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-1"
                    >
                      Learn about Serverless Functions
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Deploy?</h2>
          <p className="text-muted-foreground">
            Start your deployment journey and get your Next.js app live in minutes
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
                <Rocket className="mr-2 h-5 w-5" />
                Deploy Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                Next.js Docs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
