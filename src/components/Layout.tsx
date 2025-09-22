import { Outlet } from 'react-router-dom'
import { ScrollProvider } from '@/hooks/useScroll'

export default function Layout() {
  return (
    <ScrollProvider>
      <div id="root-layout" className="bg-background">
        <main>
          <Outlet />
        </main>
      </div>
    </ScrollProvider>
  )
}
