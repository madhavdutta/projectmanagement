import React from 'react'
import { 
  PaperAirplaneIcon, 
  PaperClipIcon, 
  FaceSmileIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'
import Avatar from '../components/Avatar'

function Messages() {
  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      lastMessage: 'Hi there! Just checking in on the project status...',
      time: '10:32 AM',
      unread: true,
      online: true
    },
    {
      id: 2,
      name: 'David Lee',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      lastMessage: 'Can we schedule a meeting to discuss the new features?',
      time: 'Yesterday',
      unread: false,
      online: false
    },
    {
      id: 3,
      name: 'Emily Wilson',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      lastMessage: "I've sent you the updated design files.",
      time: 'Yesterday',
      unread: false,
      online: true
    },
    {
      id: 4,
      name: 'Michael Brown',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      lastMessage: 'Thanks for your help with the presentation!',
      time: 'Jan 15',
      unread: false,
      online: false
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      lastMessage: "Let me know when you're available to discuss the budget.",
      time: 'Jan 14',
      unread: false,
      online: false
    }
  ]

  const messages = [
    {
      id: 1,
      sender: 'them',
      content: "Hi there! How's the project coming along?",
      time: '10:24 AM'
    },
    {
      id: 2,
      sender: 'me',
      content: "Hey Sarah! It's going well. We're making good progress on the design phase.",
      time: '10:26 AM'
    },
    {
      id: 3,
      sender: 'them',
      content: "That's great to hear! Do you have any updates on the timeline?",
      time: '10:28 AM'
    },
    {
      id: 4,
      sender: 'me',
      content: "We're still on track to finish by the end of the month. I'll send you the latest mockups this afternoon.",
      time: '10:30 AM'
    },
    {
      id: 5,
      sender: 'them',
      content: "Perfect! Looking forward to seeing them. Also, can we discuss the feedback from the client meeting?",
      time: '10:32 AM'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-8rem)]">
      <div className="flex h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map(conversation => (
              <div 
                key={conversation.id} 
                className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${conversation.id === 1 ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <Avatar src={conversation.avatar} size="md" />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-medium text-gray-900">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className={`text-sm truncate ${conversation.unread ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                  
                  {conversation.unread && (
                    <div className="ml-2 h-2 w-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative mr-3">
                <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size="md" />
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              
              <div>
                <h2 className="text-sm font-medium text-gray-900">Sarah Johnson</h2>
                <div className="text-xs text-green-600">Online</div>
              </div>
            </div>
            
            <button className="text-gray-500 hover:text-gray-700">
              <EllipsisHorizontalIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'them' && (
                    <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" size="sm" className="mr-2 mt-1" />
                  )}
                  
                  <div 
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'me' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <div 
                      className={`text-xs mt-1 ${
                        message.sender === 'me' ? 'text-blue-200' : 'text-gray-500'
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-700 mr-2">
                <PaperClipIcon className="h-5 w-5" />
              </button>
              
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              <button className="text-gray-500 hover:text-gray-700 mx-2">
                <FaceSmileIcon className="h-5 w-5" />
              </button>
              
              <button className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
