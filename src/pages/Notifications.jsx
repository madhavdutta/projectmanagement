import React from 'react'
import { BellIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, ClockIcon } from '@heroicons/react/24/outline'

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New message from Sarah Johnson',
      content: 'Hi there! Just checking in on the project status...',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'task',
      title: 'Task deadline approaching',
      content: 'The "Website Redesign" task is due in 2 days',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'mention',
      title: 'You were mentioned in a comment',
      content: 'Alex mentioned you in a comment on "Marketing Campaign"',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'message',
      title: 'New message from David Lee',
      content: 'Can we schedule a meeting to discuss the new features?',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'task',
      title: 'Task assigned to you',
      content: 'You have been assigned to "Create monthly report"',
      time: 'Yesterday',
      read: true
    }
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
        
        <div className="flex items-center gap-2">
          <button className="text-sm text-blue-600 hover:text-blue-800">Mark all as read</button>
          <button className="text-sm text-gray-500 hover:text-gray-700">Clear all</button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200">
          <button className="flex-1 py-3 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            All
          </button>
          <button className="flex-1 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-700">
            Unread
          </button>
          <button className="flex-1 py-3 text-center text-sm font-medium text-gray-500 hover:text-gray-700">
            Important
          </button>
        </div>
        
        <div>
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
            >
              <div className="flex items-start">
                <div className={`p-2 rounded-full mr-3 ${
                  notification.type === 'message' 
                    ? 'bg-blue-100 text-blue-600' 
                    : notification.type === 'task' 
                      ? 'bg-yellow-100 text-yellow-600' 
                      : 'bg-green-100 text-green-600'
                }`}>
                  {notification.type === 'message' && <EnvelopeIcon className="h-5 w-5" />}
                  {notification.type === 'task' && <ClockIcon className="h-5 w-5" />}
                  {notification.type === 'mention' && <ChatBubbleLeftRightIcon className="h-5 w-5" />}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`text-sm font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{notification.content}</p>
                </div>
                
                {!notification.read && (
                  <div className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">
            Load more notifications
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notifications
