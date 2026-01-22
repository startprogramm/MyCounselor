export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">MyCounselor</h1>
        <p className="text-xl text-slate-600 mb-8">
          Making school admissions simpler, clearer, and less stressful
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/auth/login"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  )
}
