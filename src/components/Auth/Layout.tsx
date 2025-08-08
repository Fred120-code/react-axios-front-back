import { Outlet } from 'react-router-dom'
import ProgressSidebar from '../ui/ProgressSidebar'

const Layout = () => {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-[30%] lg:block bg-gray-100 p-6">
        <ProgressSidebar />
      </aside>
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout