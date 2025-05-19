"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpenIcon, CalendarIcon, BadgeIcon as CertificateIcon, GraduationCapIcon, PlayIcon } from "lucide-react"

export function LearningScreen() {
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock courses data
  const inProgressCourses = [
    {
      id: 1,
      title: "Advanced UX Design Principles",
      progress: 65,
      dueDate: "June 15, 2025",
      category: "Design",
      duration: "8 hours",
    },
    {
      id: 2,
      title: "Leadership Skills for Designers",
      progress: 30,
      dueDate: "July 10, 2025",
      category: "Leadership",
      duration: "12 hours",
    },
  ]

  const recommendedCourses = [
    {
      id: 3,
      title: "Design Systems Fundamentals",
      category: "Design",
      duration: "6 hours",
      popularity: "High",
    },
    {
      id: 4,
      title: "Inclusive Design Practices",
      category: "Design",
      duration: "4 hours",
      popularity: "Medium",
    },
    {
      id: 5,
      title: "Effective Communication for Teams",
      category: "Soft Skills",
      duration: "5 hours",
      popularity: "High",
    },
  ]

  const completedCourses = [
    {
      id: 6,
      title: "Figma for UX/UI Designers",
      completionDate: "March 15, 2025",
      category: "Design",
      score: "95%",
    },
    {
      id: 7,
      title: "Introduction to Design Thinking",
      completionDate: "January 22, 2025",
      category: "Design",
      score: "92%",
    },
    {
      id: 8,
      title: "Conflict Resolution in the Workplace",
      completionDate: "November 10, 2024",
      category: "Soft Skills",
      score: "88%",
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "Certified UX Designer",
      issuer: "UX Design Institute",
      issueDate: "February 2025",
      expiryDate: "February 2028",
      status: "Active",
    },
    {
      id: 2,
      name: "Agile Project Management",
      issuer: "Scrum Alliance",
      issueDate: "October 2024",
      expiryDate: "October 2026",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Learning & Development</h2>
        <p className="text-muted-foreground">Manage your training, courses, and professional development.</p>
      </div>

      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
          <TabsTrigger value="development">Development Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Courses in Progress</CardTitle>
                <BookOpenIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-2">Due within the next 60 days</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
                <GraduationCapIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-2">In the last 12 months</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Certifications</CardTitle>
                <CertificateIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-2">Valid and up-to-date</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45 / 80</div>
                <Progress value={56.25} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">56.25% of yearly target</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>In Progress</CardTitle>
                <CardDescription>Courses you are currently taking</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {inProgressCourses.map((course) => (
                    <div key={course.id} className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{course.title}</h3>
                        <Badge variant="outline" className="bg-blue-50">
                          {course.category}
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                          <span>Progress: {course.progress}%</span>
                          <span>Due: {course.dueDate}</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">Duration: {course.duration}</span>
                        <Button size="sm">
                          <PlayIcon className="mr-2 h-4 w-4" />
                          Continue
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" onClick={() => setActiveTab("courses")}>
                    View All Courses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Courses based on your role and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedCourses.map((course) => (
                    <div key={course.id} className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{course.title}</h3>
                        <Badge variant="outline" className="bg-blue-50">
                          {course.category}
                        </Badge>
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                        <span>Duration: {course.duration}</span>
                        <span>Popularity: {course.popularity}</span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button size="sm">Enroll</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Courses</CardTitle>
                  <CardDescription>Browse available courses and your learning history</CardDescription>
                </div>
                <Button>Find New Courses</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="in-progress">
                <TabsList className="mb-4">
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="available">Available</TabsTrigger>
                </TabsList>

                <TabsContent value="in-progress">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Progress</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {inProgressCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Progress value={course.progress} className="h-2 w-20" />
                                <span className="text-xs">{course.progress}%</span>
                              </div>
                            </TableCell>
                            <TableCell>{course.dueDate}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm">Continue</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="completed">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Completion Date</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {completedCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>{course.completionDate}</TableCell>
                            <TableCell>{course.score}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">
                                View Certificate
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                <TabsContent value="available">
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Course Name</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Popularity</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recommendedCourses.map((course) => (
                          <TableRow key={course.id}>
                            <TableCell className="font-medium">{course.title}</TableCell>
                            <TableCell>{course.category}</TableCell>
                            <TableCell>{course.duration}</TableCell>
                            <TableCell>{course.popularity}</TableCell>
                            <TableCell className="text-right">
                              <Button size="sm">Enroll</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Certifications</CardTitle>
                  <CardDescription>Your professional certifications and credentials</CardDescription>
                </div>
                <Button>Add Certification</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Certification Name</TableHead>
                      <TableHead>Issuing Organization</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Expiry Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((cert) => (
                      <TableRow key={cert.id}>
                        <TableCell className="font-medium">{cert.name}</TableCell>
                        <TableCell>{cert.issuer}</TableCell>
                        <TableCell>{cert.issueDate}</TableCell>
                        <TableCell>{cert.expiryDate}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50">
                            {cert.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Certifications</CardTitle>
              <CardDescription>Certifications that may benefit your career growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/certification-document.png" alt="Certification" />
                      <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Professional Product Designer</h3>
                      <p className="text-sm text-muted-foreground">Product Design Association</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      This certification validates your expertise in product design methodologies and best practices.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/certification-document.png" alt="Certification" />
                      <AvatarFallback>UX</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Advanced UX Research</h3>
                      <p className="text-sm text-muted-foreground">UX Research Institute</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Enhance your user research skills with this advanced certification focused on research
                      methodologies.
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Development Plan</CardTitle>
              <CardDescription>Your personalized career development plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Career Goals</h3>
                  <div className="mt-2 rounded-lg border p-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium">Short-term Goal (1 year)</h4>
                        <p className="text-sm text-muted-foreground">
                          Become proficient in design systems and contribute to the company's design system development.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Mid-term Goal (2-3 years)</h4>
                        <p className="text-sm text-muted-foreground">
                          Advance to Senior Product Designer role with team leadership responsibilities.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Long-term Goal (5+ years)</h4>
                        <p className="text-sm text-muted-foreground">
                          Move into a Design Director position overseeing multiple product design teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Skills Development</h3>
                  <div className="mt-2 space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Design Systems</h4>
                        <Badge variant="outline" className="bg-blue-50">
                          In Progress
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Develop expertise in creating and maintaining scalable design systems.
                      </p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div className="mt-4 text-sm">
                        <p className="font-medium">Action Items:</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                          <li>Complete "Design Systems Fundamentals" course</li>
                          <li>Contribute to the company design system project</li>
                          <li>Attend design systems workshop in August</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Leadership Skills</h4>
                        <Badge variant="outline" className="bg-blue-50">
                          In Progress
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Develop team leadership and management capabilities.
                      </p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>30%</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div className="mt-4 text-sm">
                        <p className="font-medium">Action Items:</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                          <li>Complete "Leadership Skills for Designers" course</li>
                          <li>Lead the upcoming user research project</li>
                          <li>Participate in the mentorship program</li>
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Advanced UX Research</h4>
                        <Badge variant="outline" className="bg-yellow-50">
                          Planned
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Strengthen user research methodologies and analysis skills.
                      </p>
                      <div className="mt-2">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>0%</span>
                        </div>
                        <Progress value={0} className="h-2" />
                      </div>
                      <div className="mt-4 text-sm">
                        <p className="font-medium">Action Items:</p>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground mt-1 space-y-1">
                          <li>Enroll in "Advanced UX Research" certification</li>
                          <li>Conduct 3 user research studies this year</li>
                          <li>Present research findings to the product team</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Feedback and Performance</h3>
                  <div className="mt-2 rounded-lg border p-4">
                    <p className="text-sm text-muted-foreground">
                      Your last performance review highlighted strengths in visual design and user interface
                      development. Areas for improvement include user research methodologies and team collaboration.
                      Focus on developing these skills to progress toward your career goals.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        View Full Performance Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
