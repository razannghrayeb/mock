"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DownloadIcon, EyeIcon, InfoIcon } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function CompensationScreen() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Compensation</h2>
        <p className="text-muted-foreground">View your salary details, payslips, and benefits information.</p>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="payslips">Payslips</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="tax">Tax Information</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Salary</CardTitle>
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$85,000.00</div>
                <p className="text-xs text-muted-foreground mt-2">Annual gross salary</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Net</CardTitle>
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
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,250.00</div>
                <p className="text-xs text-muted-foreground mt-2">After taxes and deductions</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">401(k) Contribution</CardTitle>
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
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$425.00</div>
                <p className="text-xs text-muted-foreground mt-2">Monthly contribution (10%)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YTD Earnings</CardTitle>
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
                  <path d="M18 21V8a2 2 0 0 0-2-2h-2M4 16l6-6 4 4 6-6" />
                  <rect width="4" height="6" x="2" y="12" rx="1" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$17,000.00</div>
                <p className="text-xs text-muted-foreground mt-2">Year to date gross earnings</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Salary History</CardTitle>
              <CardDescription>Your salary progression over time</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Effective Date</TableHead>
                    <TableHead>Annual Salary</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Jan 1, 2025</TableCell>
                    <TableCell>$85,000.00</TableCell>
                    <TableCell className="text-green-600">+6.25%</TableCell>
                    <TableCell>Annual Merit Increase</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jul 15, 2024</TableCell>
                    <TableCell>$80,000.00</TableCell>
                    <TableCell className="text-green-600">+14.29%</TableCell>
                    <TableCell>Promotion</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jan 1, 2024</TableCell>
                    <TableCell>$70,000.00</TableCell>
                    <TableCell className="text-green-600">+7.69%</TableCell>
                    <TableCell>Annual Merit Increase</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jan 1, 2023</TableCell>
                    <TableCell>$65,000.00</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Initial Salary</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payslips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payslips</CardTitle>
              <CardDescription>View and download your payslips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pay Period</TableHead>
                      <TableHead>Issue Date</TableHead>
                      <TableHead>Gross Pay</TableHead>
                      <TableHead>Net Pay</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Apr 1 - Apr 30, 2025</TableCell>
                      <TableCell>Apr 30, 2025</TableCell>
                      <TableCell>$7,083.33</TableCell>
                      <TableCell>$4,250.00</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Mar 1 - Mar 31, 2025</TableCell>
                      <TableCell>Mar 31, 2025</TableCell>
                      <TableCell>$7,083.33</TableCell>
                      <TableCell>$4,250.00</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Feb 1 - Feb 28, 2025</TableCell>
                      <TableCell>Feb 28, 2025</TableCell>
                      <TableCell>$7,083.33</TableCell>
                      <TableCell>$4,250.00</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jan 1 - Jan 31, 2025</TableCell>
                      <TableCell>Jan 31, 2025</TableCell>
                      <TableCell>$7,083.33</TableCell>
                      <TableCell>$4,250.00</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            <EyeIcon className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Health Insurance</CardTitle>
                <CardDescription>Medical, dental, and vision coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Plan Type</span>
                      <span className="text-sm">PPO Family Plan</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Provider</span>
                      <span className="text-sm">Blue Cross Blue Shield</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Monthly Premium</span>
                      <span className="text-sm">$350.00 (Company pays 80%)</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Plan Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retirement</CardTitle>
                <CardDescription>401(k) retirement plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Your Contribution</span>
                      <span className="text-sm">10% of salary</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Company Match</span>
                      <span className="text-sm">4% (100% of first 4%)</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Current Balance</span>
                      <span className="text-sm">$42,580.75</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Investments
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Life Insurance</CardTitle>
                <CardDescription>Company-provided life insurance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Coverage Amount</span>
                      <span className="text-sm">2x Annual Salary ($170,000)</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Provider</span>
                      <span className="text-sm">MetLife</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Cost</span>
                      <span className="text-sm">100% Company Paid</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Beneficiaries
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flexible Spending Account</CardTitle>
                <CardDescription>Pre-tax healthcare expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Annual Election</span>
                      <span className="text-sm">$2,000.00</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Used</span>
                      <span className="text-sm">$750.00</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium">Remaining</span>
                      <span className="text-sm">$1,250.00</span>
                    </div>
                    <Progress value={37.5} className="mt-2" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Submit Claim
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Paid Time Off</CardTitle>
                <CardDescription>Vacation and sick leave benefits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Vacation Days</span>
                      <span className="text-sm">18 days remaining</span>
                    </div>
                    <Progress value={75} className="mt-2" />
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium">Sick Days</span>
                      <span className="text-sm">8 days remaining</span>
                    </div>
                    <Progress value={80} className="mt-2" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Time Off
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Benefits</CardTitle>
                <CardDescription>Additional company perks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-md border p-3">
                    <h4 className="font-medium">Gym Membership</h4>
                    <p className="text-sm text-muted-foreground">$50 monthly reimbursement</p>
                  </div>
                  <div className="rounded-md border p-3">
                    <h4 className="font-medium">Professional Development</h4>
                    <p className="text-sm text-muted-foreground">$2,000 annual allowance</p>
                  </div>
                  <div className="rounded-md border p-3">
                    <h4 className="font-medium">Remote Work Stipend</h4>
                    <p className="text-sm text-muted-foreground">$100 monthly for home office</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tax" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tax Information</CardTitle>
              <CardDescription>Your tax withholding and filing status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Federal Tax Withholding</h3>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Filing Status</span>
                        <span className="text-sm font-medium">Married Filing Jointly</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">Allowances/Exemptions</span>
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">Additional Withholding</span>
                        <span className="text-sm font-medium">$0.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">State Tax Withholding</h3>
                    <div className="rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">State</span>
                        <span className="text-sm font-medium">California</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">Filing Status</span>
                        <span className="text-sm font-medium">Married</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm">Allowances</span>
                        <span className="text-sm font-medium">2</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Tax Documents</h3>
                  <Button variant="outline" size="sm">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download All
                  </Button>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Document</TableHead>
                        <TableHead>Tax Year</TableHead>
                        <TableHead>Issue Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>W-2</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Jan 31, 2025</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>W-2</TableCell>
                        <TableCell>2023</TableCell>
                        <TableCell>Jan 31, 2024</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>1095-C (Health Insurance)</TableCell>
                        <TableCell>2024</TableCell>
                        <TableCell>Jan 31, 2025</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">
                            <DownloadIcon className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center">
                  <InfoIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    To update your tax withholding information, please contact HR or submit a new W-4 form.
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
