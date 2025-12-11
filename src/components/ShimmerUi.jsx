import React from 'react'

export default function ShimmerUi() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 p-6">
      {/* Global animation styles (shimmer + pulse) */}
      <style>{`
        .shimmer {
          position: relative;
          overflow: hidden;
          background: linear-gradient(90deg, rgba(163,185,221,0.15) 0%, rgba(163,185,221,0.25) 20%, rgba(255,255,255,0.35) 50%, rgba(163,185,221,0.25) 80%, rgba(163,185,221,0.15) 100%);
          background-size: 200% 100%;
          animation: shimmerMove 1.6s linear infinite;
          border-radius: 0.5rem;
        }

        @keyframes shimmerMove {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .pulse-soft {
          animation: pulseSoft 2.2s ease-in-out infinite;
        }

        @keyframes pulseSoft {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(-3px) scale(1.005); opacity: 0.95; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* subtle rounded borders for cards on small screens */
        .card-border {
          border: 1px solid rgba(163,185,221,0.12);
          box-shadow: 0 6px 18px rgba(99,110,125,0.06);
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* SIDEBAR */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="card-border p-5 rounded-2xl bg-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full shimmer"></div>
              <div className="flex-1">
                <div className="h-3 w-3/4 shimmer rounded-md mb-2"></div>
                <div className="h-3 w-1/2 shimmer rounded-md"></div>
              </div>
            </div>

            <nav className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shimmer"></div>
                  <div className="h-3 w-3/5 shimmer rounded-md"></div>
                </div>
              ))}
            </nav>

            <div className="mt-6">
              <div className="h-12 shimmer rounded-xl"></div>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-48 h-8 shimmer rounded-lg pulse-soft" style={{ backgroundColor: '#a3b9dd' }}></div>
              <div className="h-8 w-32 shimmer rounded-lg"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full shimmer"></div>
              <div className="w-10 h-10 rounded-md shimmer"></div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card-border p-4 rounded-2xl bg-white shimmer pulse-soft">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 rounded-md shimmer"></div>
                    <div className="h-6 w-2/3 rounded-md shimmer"></div>
                  </div>
                  <div className="w-12 h-12 rounded-lg shimmer"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Large chart */}
            <div className="lg:col-span-2 card-border p-5 rounded-2xl bg-white">
              <div className="flex items-center justify-between mb-4">
                <div className="h-5 w-48 shimmer rounded-md" style={{ backgroundColor: '#a3b9dd' }}></div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-28 shimmer rounded-md"></div>
                  <div className="h-8 w-8 shimmer rounded-full"></div>
                </div>
              </div>

              <div className="h-64 rounded-xl shimmer" />

              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="h-14 shimmer rounded-md"></div>
                <div className="h-14 shimmer rounded-md"></div>
                <div className="h-14 shimmer rounded-md"></div>
              </div>
            </div>

            {/* Side charts */}
            <div className="space-y-5">
              <div className="card-border p-4 rounded-2xl bg-white">
                <div className="h-36 shimmer rounded-xl"></div>
              </div>
              <div className="card-border p-4 rounded-2xl bg-white">
                <div className="h-20 shimmer rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Table / Activity */}
          <div className="card-border p-5 rounded-2xl bg-white">
            <div className="flex items-center justify-between mb-4">
              <div className="h-5 w-48 shimmer rounded-md"></div>
              <div className="h-8 w-28 shimmer rounded-md"></div>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg shimmer"></div>
                    <div className="space-y-2">
                      <div className="h-3 w-40 shimmer rounded-md"></div>
                      <div className="h-3 w-24 shimmer rounded-md"></div>
                    </div>
                  </div>
                  <div className="h-3 w-24 shimmer rounded-md"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
