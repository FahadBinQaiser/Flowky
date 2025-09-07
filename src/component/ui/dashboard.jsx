import React from "react"
import { TrendingUp } from "lucide-react"

export default function Dashboard() {
  const data = [40, 65, 50, 90, 55, 90]

  return (
    <div className="relative dashboard rounded-2xl lg:ml-6 p-8 shadow-2xl w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-lg font-semibold text-pakistan-green">
          Analytics Dashboard
        </h3>
        <div className="flex items-center gap-2 text-pakistan-green text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          +24% this month
        </div>
      </div>

      <div className="h-48 flex items-end justify-between gap-4 mb-10">
        {data.map((h, i) => (
          <div
            key={i}
            className="bgPakistanGreen rounded-t-lg transition-all duration-500"
            style={{
              height: `${h}%`,
              width: "100px",
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold text-pakistan-green">2.4k</p>
          <p className="text-sm text-dark-moss-green">Active Users</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-pakistan-green">$12.5k</p>
          <p className="text-sm text-dark-moss-green">Revenue</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-pakistan-green">98.2%</p>
          <p className="text-sm text-dark-moss-green">Uptime</p>
        </div>
      </div>

      <div className="absolute dashboardBoxes -top-4 -right-4 bg-tigers-eye text-cornsilk px-4 py-2 rounded-full text-sm font-medium shadow-lg">
        Real-time data
      </div>
      <div className="absolute dashboardBoxes -bottom-4 -left-4 bg-tigers-eye text-cornsilk px-4 py-2 rounded-full text-sm font-medium shadow-lg">
        AI-powered
      </div>
    </div>
  )
}
