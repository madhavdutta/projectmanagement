import React from 'react'
import { 
  UserCircleIcon, 
  BellIcon, 
  LockClosedIcon, 
  CreditCardIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'
import Avatar from '../components/Avatar'

function Settings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <nav className="flex-none w-64 p-4 border-r border-gray-200">
            <div className="space-y-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-md font-medium">
                <UserCircleIcon className="h-5 w-5" />
                <span>Profile</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <BellIcon className="h-5 w-5 text-gray-400" />
                <span>Notifications</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <LockClosedIcon className="h-5 w-5 text-gray-400" />
                <span>Password & Security</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <CreditCardIcon className="h-5 w-5 text-gray-400" />
                <span>Billing</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                <span>Organization</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <UserGroupIcon className="h-5 w-5 text-gray-400" />
                <span>Team</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                <span>Language & Region</span>
              </button>
            </div>
          </nav>
          
          <div className="flex-1 p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Profile Settings</h2>
            
            <div className="flex items-start mb-8">
              <div className="mr-6">
                <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size="lg" />
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-2">Profile photo</div>
                <div className="flex items-center gap-3">
                  <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Change photo
                  </button>
                  <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
                    Remove
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="Olivia"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Treffers"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue="olivia.treffers@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Job title
                </label>
                <input
                  type="text"
                  id="role"
                  defaultValue="Sales Manager"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  defaultValue="Sales professional with over 5 years of experience in B2B software sales. Passionate about helping businesses find the right solutions for their needs."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="pt-4 border-t border-gray-200 flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
