import { TimeManagementScreen } from "@/components/screens/time-management-screen"
import { DashboardShell } from "@/components/dashboard-shell"

export default function TimeManagementPage() {
  return (
    <DashboardShell>
      <TimeManagementScreen />
    </DashboardShell>
  )
}
