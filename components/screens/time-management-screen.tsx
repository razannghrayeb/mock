"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { ClockIcon, InfoIcon, PlusIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TimeManagementScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("attendance")

  // Mock attendance data
  const attendanceData = [
    { date: "2025-05-01", checkIn: "09:02 AM", checkOut: "05:15 PM", status: "Present", hours: "8.22" },
    { date: "2025-05-02", checkIn: "08:55 AM", checkOut: "05:05 PM", status: "Present", hours: "8.17" },
    { date: "2025-05-03", checkIn: "--", checkOut: "--", status: "Weekend", hours: "--" },
    { date: "2025-05-04", checkIn: "--", checkOut: "--", status: "Weekend", hours: "--" },
    { date: "2025-05-05", checkIn: "09:10 AM", checkOut: "05:30 PM", status: "Present", hours: "8.33" },
    { date: "2025-05-06", checkIn: "08:50 AM", checkOut: "04:45 PM", status: "Present", hours: "7.92" },
    { date: "2025-05-07", checkIn: "--", checkOut: "--", status: "Sick Leave", hours: "--" },
    { date: "2025-05-08", checkIn: "09:05 AM", checkOut: "05:10 PM", status: "Present", hours: "8.08" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Time Management</h2>
        <p className="text-muted-foreground">Track your attendance, work hours, and schedule.</p>
      </div>

      <Tabs defaultValue="attendance" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="timesheet">Timesheet</TabsTrigger>
          <TabsTrigger value="schedule">Work Schedule</TabsTrigger>
          <TabsTrigger value="overtime">Overtime</TabsTrigger>
        </TabsList>

        <TabsContent value="attendance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours This Week</CardTitle>
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.5 / 40</div>
                <Progress value={81.25} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">81.25% of weekly target</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours This Month</CardTitle>
                <ClockIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">142 / 160</div>
                <Progress value={88.75} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">88.75% of monthly target</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.2%</div>
                <Progress value={98.2} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">Year to date attendance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Punctuality</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">95.7%</div>
                <Progress value={95.7} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">On-time check-ins</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Calendar</CardTitle>
                <CardDescription>View your monthly attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    present: [
                      new Date(2025, 4, 1),
                      new Date(2025, 4, 2),
                      new Date(2025, 4, 5),
                      new Date(2025, 4, 6),
                      new Date(2025, 4, 8),
                    ],
                    absent: [new Date(2025, 4, 7)],
                    weekend: [new Date(2025, 4, 3), new Date(2025, 4, 4)],
                  }}
                  modifiersStyles={{
                    present: { backgroundColor: "#dcfce7", color: "#166534" },
                    absent: { backgroundColor: "#fee2e2", color: "#991b1b" },
                    weekend: { backgroundColor: "#f3f4f6", color: "#6b7280" },
                  }}
                />
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-100"></div>
                    <span className="text-xs">Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-100"></div>
                    <span className="text-xs">Absent/Leave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-gray-100"></div>
                    <span className="text-xs">Weekend/Holiday</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Daily Summary</CardTitle>
                    <CardDescription>Attendance details for selected date</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Check In
                    </Button>
                    <Button variant="outline" size="sm">
                      Check Out
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {date ? (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Date:</span>
                      <span className="font-medium">{date.toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <Badge variant="outline" className="bg-green-50">
                        Present
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Check In:</span>
                      <span>09:02 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Check Out:</span>
                      <span>05:15 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Hours:</span>
                      <span className="font-medium">8.22</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Break Time:</span>
                      <span>1 hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Location:</span>
                      <span>Office - San Francisco</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">Select a date to view details</p>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Attendance</CardTitle>
              <CardDescription>Your attendance records for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Check In</TableHead>
                      <TableHead>Check Out</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Hours</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceData.map((record, index) => (
                      <TableRow key={index}>
                        <TableCell>{record.date}</TableCell>
                        <TableCell>{record.checkIn}</TableCell>
                        <TableCell>{record.checkOut}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              record.status === "Present"
                                ? "bg-green-50"
                                : record.status.includes("Leave")
                                  ? "bg-red-50"
                                  : "bg-gray-50"
                            }
                          >
                            {record.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{record.hours}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timesheet" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Weekly Timesheet</CardTitle>
                  <CardDescription>Track your working hours</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="current">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select week" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current">Current Week (May 1-7)</SelectItem>
                      <SelectItem value="previous">Previous Week (Apr 24-30)</SelectItem>
                      <SelectItem value="twoWeeksAgo">Two Weeks Ago (Apr 17-23)</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Add Time
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Break</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead className="text-right">Total Hours</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Monday</TableCell>
                      <TableCell>May 1, 2025</TableCell>
                      <TableCell>09:02 AM</TableCell>
                      <TableCell>05:15 PM</TableCell>
                      <TableCell>1 hr</TableCell>
                      <TableCell>Website Redesign</TableCell>
                      <TableCell className="text-right">7.22</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tuesday</TableCell>
                      <TableCell>May 2, 2025</TableCell>
                      <TableCell>08:55 AM</TableCell>
                      <TableCell>05:05 PM</TableCell>
                      <TableCell>1 hr</TableCell>
                      <TableCell>Website Redesign</TableCell>
                      <TableCell className="text-right">7.17</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wednesday</TableCell>
                      <TableCell>May 3, 2025</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>Weekend</TableCell>
                      <TableCell className="text-right">0.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Thursday</TableCell>
                      <TableCell>May 4, 2025</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>Weekend</TableCell>
                      <TableCell className="text-right">0.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Friday</TableCell>
                      <TableCell>May 5, 2025</TableCell>
                      <TableCell>09:10 AM</TableCell>
                      <TableCell>05:30 PM</TableCell>
                      <TableCell>1 hr</TableCell>
                      <TableCell>Mobile App</TableCell>
                      <TableCell className="text-right">7.33</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Saturday</TableCell>
                      <TableCell>May 6, 2025</TableCell>
                      <TableCell>08:50 AM</TableCell>
                      <TableCell>04:45 PM</TableCell>
                      <TableCell>1 hr</TableCell>
                      <TableCell>Mobile App</TableCell>
                      <TableCell className="text-right">6.92</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sunday</TableCell>
                      <TableCell>May 7, 2025</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>--</TableCell>
                      <TableCell>Sick Leave</TableCell>
                      <TableCell className="text-right">0.00</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                      <TableCell colSpan={6} className="text-right">
                        Total Hours:
                      </TableCell>
                      <TableCell className="text-right">28.64</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button>Submit Timesheet</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Allocation</CardTitle>
              <CardDescription>Time spent on different projects this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Website Redesign</span>
                    <span className="text-sm">14.39 hours (50.2%)</span>
                  </div>
                  <Progress value={50.2} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Mobile App</span>
                    <span className="text-sm">14.25 hours (49.8%)</span>
                  </div>
                  <Progress value={49.8} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Internal Meetings</span>
                    <span className="text-sm">0 hours (0%)</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Work Schedule</CardTitle>
                  <CardDescription>Your regular working hours</CardDescription>
                </div>
                <Button variant="outline">Request Schedule Change</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Working Hours</TableHead>
                      <TableHead>Break</TableHead>
                      <TableHead>Total Hours</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Monday</TableCell>
                      <TableCell>9:00 AM - 5:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>7 hours</TableCell>
                      <TableCell>Office</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Tuesday</TableCell>
                      <TableCell>9:00 AM - 5:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>7 hours</TableCell>
                      <TableCell>Office</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Wednesday</TableCell>
                      <TableCell>9:00 AM - 5:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>7 hours</TableCell>
                      <TableCell>Remote</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Thursday</TableCell>
                      <TableCell>9:00 AM - 5:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>7 hours</TableCell>
                      <TableCell>Remote</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Friday</TableCell>
                      <TableCell>9:00 AM - 5:00 PM</TableCell>
                      <TableCell>1 hour</TableCell>
                      <TableCell>7 hours</TableCell>
                      <TableCell>Office</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Saturday</TableCell>
                      <TableCell>Off</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>0 hours</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Sunday</TableCell>
                      <TableCell>Off</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>0 hours</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                      <TableCell colSpan={3} className="text-right">
                        Total Weekly Hours:
                      </TableCell>
                      <TableCell>35 hours</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center">
                <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Your schedule follows the hybrid work policy (3 days office, 2 days remote).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Schedule Changes</CardTitle>
              <CardDescription>Temporary changes to your regular schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-4 text-center">
                <p className="text-muted-foreground">No upcoming schedule changes</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overtime" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Overtime Summary</CardTitle>
                  <CardDescription>Track your overtime hours</CardDescription>
                </div>
                <Button>Request Overtime</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-md border p-4">
                  <h3 className="text-sm font-medium">This Month</h3>
                  <p className="mt-2 text-2xl font-bold">4.5 hours</p>
                  <p className="text-xs text-muted-foreground mt-1">May 2025</p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="text-sm font-medium">Last Month</h3>
                  <p className="mt-2 text-2xl font-bold">6.2 hours</p>
                  <p className="text-xs text-muted-foreground mt-1">April 2025</p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="text-sm font-medium">Year to Date</h3>
                  <p className="mt-2 text-2xl font-bold">22.8 hours</p>
                  <p className="text-xs text-muted-foreground mt-1">2025</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium mb-4">Recent Overtime</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Hours</TableHead>
                        <TableHead>Project</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Approved By</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>May 6, 2025</TableCell>
                        <TableCell>1.5 hours</TableCell>
                        <TableCell>Mobile App</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>May 2, 2025</TableCell>
                        <TableCell>2.0 hours</TableCell>
                        <TableCell>Website Redesign</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>Michael Chen</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apr 28, 2025</TableCell>
                        <TableCell>1.0 hours</TableCell>
                        <TableCell>Client Meeting</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>Sarah Johnson</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Apr 15, 2025</TableCell>
                        <TableCell>3.5 hours</TableCell>
                        <TableCell>System Migration</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-50">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell>Michael Chen</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Overtime must be approved by your manager before working extra hours.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
