import { CalendarIcon } from "lucide-react"

export function UpcomingHolidaysCard() {
  // Mock holidays data
  const holidays = [
    {
      id: 1,
      name: "Memorial Day",
      date: "May 27, 2025",
      day: "Monday",
      daysAway: 19,
    },
    {
      id: 2,
      name: "Independence Day",
      date: "July 4, 2025",
      day: "Friday",
      daysAway: 57,
    },
    {
      id: 3,
      name: "Labor Day",
      date: "September 1, 2025",
      day: "Monday",
      daysAway: 116,
    },
    {
      id: 4,
      name: "Thanksgiving Day",
      date: "November 27, 2025",
      day: "Thursday",
      daysAway: 203,
    },
  ]

  return (
    <div className="space-y-4">
      {holidays.map((holiday) => (
        <div key={holiday.id} className="flex items-start gap-4 rounded-lg border p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <CalendarIcon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">{holiday.name}</p>
              <span className="text-xs text-muted-foreground">{holiday.daysAway} days away</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {holiday.date} ({holiday.day})
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
