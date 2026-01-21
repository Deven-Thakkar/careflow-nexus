import React, { Suspense } from 'react'
import Navbar from './Navbar'
import AnimatedOutlet from './AnimatedOutlet'

const Sidebar = React.lazy(() => import('@/components/layout/Sidebar'))

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-neutral-50 text-neutral-900">
      <Suspense fallback={<div className="w-64 p-6">Loading menu…</div>}>
        <Sidebar />
      </Suspense>

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <AnimatedOutlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout
