import { Outlet } from 'react-router-dom'
import ProgressSidebar from '../ui/ProgressSidebar'
import ProgressBar from '../ui/ProgressBar'

const Layout = () => {
  return (
    <div className="flex h-screen">
      <aside className="hidden w-1/3 lg:block bg-gray-100 p-6">
        <ProgressSidebar />
      </aside>
      <main className="w-2/3 overflow-y-auto flex flex-col">
       <div className="flex flex-col flex-1 items-center">
         <Outlet />
         <ProgressBar/>
       </div>
      </main>
    </div>
  )
}

export default Layout