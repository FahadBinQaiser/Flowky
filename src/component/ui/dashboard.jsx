import React from "react"
import { TrendingUp } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="relative bg-earth-yellow rounded-2xl ml-4 p-8 shadow-2xl w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-pakistan-green">
          Analytics Dashboard
        </h3>
        <div className="flex items-center gap-2 text-pakistan-green text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          +24% this month
        </div>
      </div>

      <div className="h-48 bg-cornsilk rounded-lg flex items-end justify-center gap-2 p-4 mb-6">
        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
          <div
            key={i}
            className="bg-pakistan-green rounded-t-md flex-1 hover:bg-dark-moss-green transition-all duration-500"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
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

      <div className="absolute -top-4 -right-4 bg-tigers-eye text-cornsilk px-4 py-2 rounded-full text-sm font-medium shadow-lg">
        Real-time data
      </div>
      <div className="absolute -bottom-4 -left-4 bg-tigers-eye text-cornsilk px-4 py-2 rounded-full text-sm font-medium shadow-lg">
        AI-powered
      </div>
    </div>
  )
}
