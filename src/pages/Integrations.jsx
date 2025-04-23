import React from 'react'
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

function Integrations() {
  const integrations = [
    {
      id: 1,
      name: 'Google Calendar',
      description: 'Sync your calendar events and meetings',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg',
      connected: true
    },
    {
      id: 2,
      name: 'Slack',
      description: 'Get notifications and updates in your Slack channels',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
      connected: true
    },
    {
      id: 3,
      name: 'Dropbox',
      description: 'Access and share your files from Dropbox',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg',
      connected: false
    },
    {
      id: 4,
      name: 'GitHub',
      description: 'Link your repositories and track issues',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      connected: false
    },
    {
      id: 5,
      name: 'Google Drive',
      description: 'Access and share your files from Google Drive',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg',
      connected: true
    },
    {
      id: 6,
      name: 'Zoom',
      description: 'Schedule and join video meetings',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/1280px-Zoom_Communications_Logo.svg.png',
      connected: false
    },
    {
      id: 7,
      name: 'Trello',
      description: 'Sync your boards and cards',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg',
      connected: false
    },
    {
      id: 8,
      name: 'Asana',
      description: 'Sync your projects and tasks',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg',
      connected: false
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Integrations</h1>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          <PlusIcon className="h-4 w-4" />
          <span>Add integration</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Connected Integrations</h2>
        <p className="text-sm text-gray-500 mb-6">Manage your connected integrations and their permissions.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.filter(integration => integration.connected).map(integration => (
            <div key={integration.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-md flex-shrink-0 mr-4 overflow-hidden bg-gray-100 p-2">
                  <img 
                    src={integration.icon} 
                    alt={integration.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-900">{integration.name}</h3>
                    <span className="flex items-center text-xs font-medium text-green-600">
                      <CheckIcon className="h-3 w-3 mr-1" />
                      Connected
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">{integration.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-xs text-blue-600 hover:text-blue-800">
                      Configure
                    </button>
                    <button className="text-xs text-gray-500 hover:text-gray-700">
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-2">Available Integrations</h2>
        <p className="text-sm text-gray-500 mb-6">Connect with these services to enhance your workflow.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.filter(integration => !integration.connected).map(integration => (
            <div key={integration.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-md flex-shrink-0 mr-4 overflow-hidden bg-gray-100 p-2">
                  <img 
                    src={integration.icon} 
                    alt={integration.name} 
                    className="h-full w-full object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{integration.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{integration.description}</p>
                  
                  <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs text-gray-700 hover:bg-gray-50">
                    Connect
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Integrations
