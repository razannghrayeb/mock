import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { DownloadIcon, EyeIcon } from "lucide-react"

export function PayslipCard() {
  // Mock payslip data
  const payslips = [
    {
      id: "PS-2025-04",
      period: "April 2025",
      date: "April 30, 2025",
      amount: "$4,250.00",
      status: "Processed",
    },
    {
      id: "PS-2025-03",
      period: "March 2025",
      date: "March 31, 2025",
      amount: "$4,250.00",
      status: "Processed",
    },
    {
      id: "PS-2025-02",
      period: "February 2025",
      date: "February 28, 2025",
      amount: "$4,250.00",
      status: "Processed",
    },
    {
      id: "PS-2025-01",
      period: "January 2025",
      date: "January 31, 2025",
      amount: "$4,100.00",
      status: "Processed",
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Period</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payslips.map((payslip) => (
            <TableRow key={payslip.id}>
              <TableCell className="font-medium">{payslip.id}</TableCell>
              <TableCell>{payslip.period}</TableCell>
              <TableCell>{payslip.date}</TableCell>
              <TableCell>{payslip.amount}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" title="View">
                    <EyeIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" title="Download">
                    <DownloadIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
