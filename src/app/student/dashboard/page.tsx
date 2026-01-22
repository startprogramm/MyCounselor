'use client'

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyCounselor</h1>
          <div className="flex gap-4">
            <a href="/student/dashboard" className="text-slate-600 hover:text-slate-900">
              Dashboard
            </a>
            <a href="/student/requests" className="text-slate-600 hover:text-slate-900">
              Requests
            </a>
            <a href="/student/messages" className="text-slate-600 hover:text-slate-900">
              Messages
            </a>
            <a href="/student/meetings" className="text-slate-600 hover:text-slate-900">
              Meetings
            </a>
            <a href="/student/guidance" className="text-slate-600 hover:text-slate-900">
              Guidance
            </a>
            <a href="/logout" className="text-red-600 hover:text-red-700">
              Logout
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Quick Stats */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Pending Requests</div>
            <div className="text-3xl font-bold text-indigo-600">3</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Upcoming Meetings</div>
            <div className="text-3xl font-bold text-green-600">1</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Unread Messages</div>
            <div className="text-3xl font-bold text-blue-600">2</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Completed</div>
            <div className="text-3xl font-bold text-emerald-600">5</div>
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Your Tasks</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-slate-50 rounded border-l-4 border-orange-500">
              <div>
                <div className="font-semibold">Mid-Year Report - DUE TODAY</div>
                <div className="text-sm text-slate-600">Counselor: Mr. John Smith</div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
