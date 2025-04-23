import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Tasks from './pages/Tasks'
import Payments from './pages/Payments'
import Messages from './pages/Messages'
import Notes from './pages/Notes'
import Notifications from './pages/Notifications'
import Calendars from './pages/Calendars'
import Analytics from './pages/Analytics'
import Contacts from './pages/Contacts'
import Companies from './pages/Companies'
import Settings from './pages/Settings'
import Integrations from './pages/Integrations'
import Support from './pages/Support'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="payments" element={<Payments />} />
        <Route path="messages" element={<Messages />} />
        <Route path="notes" element={<Notes />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="calendars" element={<Calendars />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="companies" element={<Companies />} />
        <Route path="settings" element={<Settings />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="support" element={<Support />} />
      </Route>
    </Routes>
  )
}

export default App
