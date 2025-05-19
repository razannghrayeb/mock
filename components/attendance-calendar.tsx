"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AttendanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

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
    <Tabs defaultValue="calendar">
      <TabsList className="mb-4">
        <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        <TabsTrigger value="list">List View</TabsTrigger>
      </TabsList>

      <TabsContent value="calendar">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-1/2">
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
          </div>

          <Card className="md:w-1/2">
            <CardContent className="p-4">
              <h3 className="mb-4 font-semibold">Daily Summary</h3>
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
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Select a date to view details</p>
              )}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      <TabsContent value="list">
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
      </TabsContent>
    </Tabs>
  )
}
