'use client'

export default function CounselorDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyCounselor</h1>
          <div className="flex gap-4">
            <a href="/counselor/dashboard" className="text-slate-600 hover:text-slate-900">
              Dashboard
            </a>
            <a href="/counselor/students" className="text-slate-600 hover:text-slate-900">
              Students
            </a>
            <a href="/counselor/tasks" className="text-slate-600 hover:text-slate-900">
              Tasks
            </a>
            <a href="/counselor/meetings" className="text-slate-600 hover:text-slate-900">
              Meetings
            </a>
            <a href="/counselor/availability" className="text-slate-600 hover:text-slate-900">
              Availability
            </a>
            <a href="/counselor/guidance" className="text-slate-600 hover:text-slate-900">
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
            <div className="text-sm text-slate-600">Active Students</div>
            <div className="text-3xl font-bold text-indigo-600">24</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Pending Requests</div>
            <div className="text-3xl font-bold text-orange-600">8</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">This Week Meetings</div>
            <div className="text-3xl font-bold text-green-600">5</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-slate-600">Overdue Tasks</div>
            <div className="text-3xl font-bold text-red-600">2</div>
          </div>
        </div>

        {/* Priority Tasks */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Priority Tasks</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-red-50 rounded border-l-4 border-red-500">
              <div>
                <div className="font-semibold text-red-700">OVERDUE: Recommendation Letter for Ali Khan</div>
                <div className="text-sm text-slate-600">Due: 2 days ago</div>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Attend
              </button>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded border-l-4 border-orange-500">
              <div>
                <div className="font-semibold text-orange-700">Final Report - Sarah Ahmad</div>
                <div className="text-sm text-slate-600">Due: Tomorrow</div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
