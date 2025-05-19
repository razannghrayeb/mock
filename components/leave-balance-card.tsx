"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"

export function LeaveBalanceCard() {
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

  return (
    <Tabs defaultValue="balance">
      <div className="flex items-center justify-between mb-4">
        <TabsList>
          <TabsTrigger value="balance">Leave Balance</TabsTrigger>
          <TabsTrigger value="history">Leave History</TabsTrigger>
        </TabsList>
        <Button size="sm">
          <PlusIcon className="h-4 w-4 mr-2" />
          Apply for Leave
        </Button>
      </div>

      <TabsContent value="balance">
        <div className="grid gap-4 md:grid-cols-2">
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
      </TabsContent>

      <TabsContent value="history">
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveHistory.map((leave, index) => (
                <TableRow key={index}>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TabsContent>
    </Tabs>
  )
}
