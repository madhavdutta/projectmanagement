import React from 'react'
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-gray-700">
            <Bars3Icon className="h-6 w-6" />
          </button>
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <div className="text-sm font-medium text-gray-700">Olivia Treffers</div>
            <div className="text-xs text-gray-500">Sales Manager</div>
          </div>
          <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size="md" />
        </div>
      </div>
    </header>
  )
}

export default Header
