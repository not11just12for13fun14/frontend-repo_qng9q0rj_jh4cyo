function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 p-8">
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl px-10 py-14 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Hello, World!
        </h1>
        <p className="mt-4 text-blue-100">Your app is up and running.</p>
        <div className="mt-8">
          <a
            href="/test"
            className="inline-flex items-center gap-2 rounded-lg bg-white/20 hover:bg-white/30 text-white px-4 py-2 transition-colors"
          >
            Check backend connection
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
