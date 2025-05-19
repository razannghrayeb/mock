"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DownloadIcon, InfoIcon } from "lucide-react"

export function JobDataScreen() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Job Data</h2>
        <p className="text-muted-foreground">View your employment details, job history, and organizational information.</p>
      </div>

      <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Job Profile</TabsTrigger>
          <TabsTrigger value="history">Employment History</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="skills">Skills & Qualifications</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Position</CardTitle>
              <CardDescription>Details about your current job</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Job Title</h3>
                    <p className="text-base">Product Designer</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Department</h3>
                    <p className="text-base">Product Development</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                    <p className="text-base">San Francisco, CA (Hybrid)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Employment Type</h3>
                    <p className="text-base">Full-time</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Start Date</h3>
                    <p className="text-base">January 15, 2023</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Manager</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/diverse-group.png" alt="Michael Chen" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <p className="text-base">Michael Chen</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Employee ID</h3>
                    <p className="text-base">EMP-2023-0042</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                    <Badge variant="outline" className="mt-1 bg-green-50">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Job Description</CardTitle>
              <CardDescription>Your current role and responsibilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium">Role Overview</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    As a Product Designer, you are responsible for creating user-centered digital products that meet both
                    user needs and business goals. You work closely with product managers, engineers, and stakeholders to
                    design intuitive and engaging user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Key Responsibilities</h3>
                  <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>
                      Conduct user research and usability testing to inform design decisions and validate solutions
                    </li>
                    <li>Create wireframes, prototypes, and high-fidelity designs for web and mobile applications</li>
                    <li>
                      Collaborate with cross-functional teams to define and implement innovative solutions for product
                      direction, visuals, and experience
                    </li>
                    <li>
                      Establish and promote design guidelines, best practices, and standards throughout the organization
                    </li>
                    <li>
                      Continuously iterate on designs based on user feedback, analytics, and business requirements
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium">Required Skills</h3>
                  <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Proficiency in design tools such as Figma, Sketch, and Adobe Creative Suite</li>
                    <li>Strong understanding of user-centered design principles and methodologies</li>
                    <li>Excellent visual design skills with a keen eye for detail</li>
                    <li>Ability to work effectively in a collaborative team environment</li>
                    <li>Strong communication and presentation skills</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button variant="outline" size="sm">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Download Full Job Description
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compensation</CardTitle>
              <CardDescription>Your current salary and compensation details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Base Salary</h3>
                    <p className="text-base">$85,000.00 per year</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Pay Frequency</h3>
                    <p className="text-base">Monthly</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Last Salary Review</h3>
                    <p className="text-base">January 1, 2025</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Bonus Eligibility</h3>
                    <p className="text-base">Yes (Up to 10% of base salary)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Stock Options</h3>
                    <p className="text-base">1,000 shares (vesting over 4 years)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Next Salary Review</h3>
                    <p className="text-base">January 1, 2026</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  For detailed compensation information, please contact the HR department.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Employment History</CardTitle>
              <CardDescription>Your career progression within the company</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Position</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Duration</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Product Designer</TableCell>
                      <TableCell>Product Development</TableCell>
                      <TableCell>Jul 15, 2024</TableCell>
                      <TableCell>Present</TableCell>
                      <TableCell>10 \
