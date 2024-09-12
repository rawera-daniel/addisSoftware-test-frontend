import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function AppLayout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
