import { DashboardShell } from "@/components/dashboard-shell"
import { ProfileOverview } from "@/components/profile-overview"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <ProfileOverview />
    </DashboardShell>
  )
}
