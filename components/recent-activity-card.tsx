import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivityCard() {
  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "leave",
      title: "Leave Request Approved",
      description: "Your leave request for May 15-17 has been approved by HR.",
      time: "2 hours ago",
      icon: "/document-stack.png",
    },
    {
      id: 2,
      type: "payroll",
      title: "Payslip Generated",
      description: "Your April 2025 payslip has been generated and is ready for download.",
      time: "Yesterday",
      icon: "/scattered-currency.png",
    },
    {
      id: 3,
      type: "training",
      title: "New Training Assigned",
      description: "You've been assigned to 'Advanced Leadership Skills' training course.",
      time: "2 days ago",
      icon: "/diverse-students-learning.png",
    },
    {
      id: 4,
      type: "performance",
      title: "Performance Review Scheduled",
      description: "Your quarterly performance review has been scheduled for May 20.",
      time: "3 days ago",
      icon: "/data-analysis-chart.png",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-4 rounded-lg border p-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={activity.icon || "/placeholder.svg"} alt={activity.type} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.title}</p>
            <p className="text-sm text-muted-foreground">{activity.description}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
