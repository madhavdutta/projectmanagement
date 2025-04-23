import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  ChartBarIcon, 
  ChatBubbleLeftIcon, 
  ClipboardDocumentListIcon, 
  Cog6ToothIcon, 
  CreditCardIcon, 
  CalendarIcon, 
  BuildingOfficeIcon, 
  DocumentTextIcon, 
  BellIcon, 
  UserGroupIcon, 
  SquaresPlusIcon, 
  QuestionMarkCircleIcon, 
  Squares2X2Icon 
} from '@heroicons/react/24/outline'

function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-sidebar">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#0ea5e9"/>
            <path d="M2 17L12 22L22 17" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-semibold text-gray-800">Sabroso</span>
        </div>
      </div>
      
      <div className="py-4">
        <div className="px-4 mb-2 text-xs font-medium text-gray-400 uppercase">Boards</div>
        <nav className="space-y-1 px-2">
          <NavLink to="/" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <Squares2X2Icon className="w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/tasks" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <ClipboardDocumentListIcon className="w-5 h-5" />
            <span>Tasks</span>
          </NavLink>
          <NavLink to="/payments" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <CreditCardIcon className="w-5 h-5" />
            <span>Payments</span>
          </NavLink>
          <NavLink to="/messages" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <ChatBubbleLeftIcon className="w-5 h-5" />
            <span>Messages</span>
            <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">3</span>
          </NavLink>
          <NavLink to="/notes" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <DocumentTextIcon className="w-5 h-5" />
            <span>Notes</span>
          </NavLink>
          <NavLink to="/notifications" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <BellIcon className="w-5 h-5" />
            <span>Notifications</span>
            <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">5</span>
          </NavLink>
          <NavLink to="/calendars" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <CalendarIcon className="w-5 h-5" />
            <span>Calendars</span>
          </NavLink>
        </nav>
        
        <div className="mt-8 px-4 mb-2 text-xs font-medium text-gray-400 uppercase">Contacts</div>
        <nav className="space-y-1 px-2">
          <NavLink to="/analytics" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <ChartBarIcon className="w-5 h-5" />
            <span>Analytics</span>
            <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">2</span>
          </NavLink>
          <NavLink to="/contacts" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <UserGroupIcon className="w-5 h-5" />
            <span>Contacts</span>
          </NavLink>
          <NavLink to="/companies" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <BuildingOfficeIcon className="w-5 h-5" />
            <span>Companies</span>
          </NavLink>
        </nav>
        
        <div className="mt-8 px-4 mb-2 text-xs font-medium text-gray-400 uppercase">Other</div>
        <nav className="space-y-1 px-2">
          <NavLink to="/settings" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/integrations" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <SquaresPlusIcon className="w-5 h-5" />
            <span>Integrations</span>
          </NavLink>
          <NavLink to="/support" className={({isActive}) => `sidebar-item ${isActive ? 'active' : ''}`}>
            <QuestionMarkCircleIcon className="w-5 h-5" />
            <span>Support</span>
          </NavLink>
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xs font-medium text-gray-500">Sales Team</div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
