"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { PlusIcon, FileTextIcon, InfoIcon, EyeIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LeavesScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock leave data
  const leaveTypes = [
    { type: "Annual Leave", balance: 18, total: 24, used: 6 },
    { type: "Sick Leave", balance: 8, total: 10, used: 2 },
    { type: "Personal Leave", balance: 3, total: 3, used: 0 },
    { type: "Bereavement", balance: 3, total: 3, used: 0 },
  ]

  const leaveHistory = [
    { id: "L-2025-042", type: "Annual Leave", from: "2025-03-15", to: "2025-03-19", days: 5, status: "Approved" },
    { id: "L-2025-036", type: "Sick Leave", from: "2025-02-07", to: "2025-02-08", days: 2, status: "Approved" },
    { id: "L-2025-028", type: "Annual Leave", from: "2025-01-22", to: "2025-01-22", days: 1, status: "Approved" },
    { id: "L-2024-112", type: "Annual Leave", from: "2024-12-27", to: "2024-12-29", days: 3, status: "Approved" },
  ]

  const pendingRequests = [
    {
      id: "L-2025-045",
      type: "Annual Leave",
      from: "2025-06-10",
      to: "2025-06-14",
      days: 5,
      status: "Pending",
      submittedOn: "2025-05-01",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Leaves</h2>
        <p className="text-muted-foreground">Manage your leave requests and view your leave balance.</p>
      </div>

      <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="apply">Apply for Leave</TabsTrigger>
          <TabsTrigger value="history">Leave History</TabsTrigger>
          <TabsTrigger value="policy">Leave Policy</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {leaveTypes.map((leave, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{leave.type}</h3>
                    <Badge variant="outline" className="bg-green-50">
                      {leave.balance} days left
                    </Badge>
                  </div>
                  <Progress value={(leave.balance / leave.total) * 100} className="h-2 mb-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Used: {leave.used} days</span>
                    <span>Total: {leave.total} days</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Leave Calendar</CardTitle>
                <CardDescription>View your leaves on the calendar</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    booked: [
                      new Date(2025, 2, 15),
                      new Date(2025, 2, 16),
                      new Date(2025, 2, 17),
                      new Date(2025, 2, 18),
                      new Date(2025, 2, 19),
                      new Date(2025, 1, 7),
                      new Date(2025, 1, 8),
                      new Date(2025, 0, 22),
                    ],
                    pending: [
                      new Date(2025, 5, 10),
                      new Date(2025, 5, 11),
                      new Date(2025, 5, 12),
                      new Date(2025, 5, 13),
                      new Date(2025, 5, 14),
                    ],
                  }}
                  modifiersStyles={{
                    booked: { backgroundColor: "#dcfce7", color: "#166534" },
                    pending: { backgroundColor: "#fef9c3", color: "#854d0e" },
                  }}
                />
                <div className="mt-4 flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-100"></div>
                    <span className="text-xs">Approved Leave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-100"></div>
                    <span className="text-xs">Pending Leave</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Requests</CardTitle>
                  <CardDescription>Leave requests awaiting approval</CardDescription>
                </CardHeader>
                <CardContent>
                  {pendingRequests.length > 0 ? (
                    <div className="space-y-4">
                      {pendingRequests.map((request) => (
                        <div key={request.id} className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{request.type}</h4>
                              <p className="text-sm text-muted-foreground">
                                {request.from} to {request.to} ({request.days} days)
                              </p>
                            </div>
                            <Badge variant="outline" className="bg-yellow-50">
                              {request.status}
                            </Badge>
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground">Submitted on: {request.submittedOn}</div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              <EyeIcon className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-md border p-4 text-center">
                      <p className="text-muted-foreground">No pending leave requests</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Leave History</CardTitle>
                  <CardDescription>Your recent leave requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaveHistory.slice(0, 2).map((leave) => (
                      <div key={leave.id} className="rounded-lg border p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{leave.type}</h4>
                            <p className="text-sm text-muted-foreground">
                              {leave.from} to {leave.to} ({leave.days} days)
                            </p>
                          </div>
                          <Badge variant="outline" className="bg-green-50">
                            {leave.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-center">
                      <Button variant="link" size="sm" onClick={() => setActiveTab("history")}>
                        View All History
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setActiveTab("apply")}>
              <PlusIcon className="mr-2 h-4 w-4" />
              Apply for Leave
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="apply" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Apply for Leave</CardTitle>
              <CardDescription>Submit a new leave request</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="leaveType">Leave Type</Label>
                    <Select>
                      <SelectTrigger id="leaveType">
                        <SelectValue placeholder="Select leave type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="annual">Annual Leave</SelectItem>
                        <SelectItem value="sick">Sick Leave</SelectItem>
                        <SelectItem value="personal">Personal Leave</SelectItem>
                        <SelectItem value="bereavement">Bereavement Leave</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Select>
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full">Full Day</SelectItem>
                        <SelectItem value="half-morning">Half Day (Morning)</SelectItem>
                        <SelectItem value="half-afternoon">Half Day (Afternoon)</SelectItem>
                        <SelectItem value="multiple">Multiple Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="reason">Reason (Optional)</Label>
                    <Textarea id="reason" placeholder="Enter reason for leave" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="handover">Handover Notes (Optional)</Label>
                    <Textarea id="handover" placeholder="Enter handover notes for your team" />
                  </div>
                </div>

                <div className="flex items-center rounded-md bg-muted p-4">
                  <FileTextIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <p>
                      You have <span className="font-medium">18 days</span> of Annual Leave remaining.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline" type="button" onClick={() => setActiveTab("dashboard")}>
                    Cancel
                  </Button>
                  <Button type="submit">Submit Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Leave History</CardTitle>
                  <CardDescription>Your leave requests and their status</CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Requests</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[...pendingRequests, ...leaveHistory].map((leave) => (
                      <TableRow key={leave.id}>
                        <TableCell className="font-medium">{leave.id}</TableCell>
                        <TableCell>{leave.type}</TableCell>
                        <TableCell>{leave.from}</TableCell>
                        <TableCell>{leave.to}</TableCell>
                        <TableCell>{leave.days}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={
                              leave.status === "Approved"
                                ? "bg-green-50"
                                : leave.status === "Pending"
                                  ? "bg-yellow-50"
                                  : "bg-red-50"
                            }
                          >
                            {leave.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <EyeIcon className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="policy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Leave Policy</CardTitle>
              <CardDescription>Company policy regarding different types of leave</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Annual Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full-time employees are entitled to 24 days of annual leave per calendar year, accrued at the rate
                    of 2 days per month. Annual leave can be carried forward to the next calendar year, up to a maximum
                    of 5 days. Requests for annual leave should be submitted at least 2 weeks in advance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Sick Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Employees are entitled to 10 days of paid sick leave per calendar year. Sick leave does not carry
                    over to the next year. For absences of more than 3 consecutive days, a medical certificate may be
                    required. Employees should notify their manager as soon as possible when taking sick leave.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Personal Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Employees are granted 3 days of personal leave per calendar year to attend to personal matters.
                    Personal leave does not carry over to the next year and is not paid out upon termination of
                    employment. Requests for personal leave should be submitted at least 3 days in advance, except in
                    emergencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Bereavement Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Employees are entitled to up to 3 days of paid bereavement leave in the event of the death of an
                    immediate family member (spouse, child, parent, sibling, grandparent, or grandchild). Additional
                    unpaid leave may be granted at the discretion of the company.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Maternity and Paternity Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Female employees are entitled to 12 weeks of paid maternity leave. Male employees are entitled to 2
                    weeks of paid paternity leave. Additional unpaid leave may be granted in accordance with applicable
                    laws. Employees should notify their manager and HR at least 3 months before the expected date of
                    birth.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Unpaid Leave</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Employees may request unpaid leave for personal reasons. Approval of unpaid leave is at the
                    discretion of the company and will be considered based on business needs and the employee's
                    performance and attendance record. During unpaid leave, benefits may be affected.
                  </p>
                </div>

                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    For more detailed information about the leave policy, please refer to the Employee Handbook or
                    contact HR.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
