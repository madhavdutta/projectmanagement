import React from 'react'
import { 
  MagnifyingGlassIcon, 
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

function Support() {
  const faqs = [
    {
      id: 1,
      question: 'How do I create a new task?',
      answer: 'To create a new task, navigate to the Tasks page and click the "Add task" button in the top right corner. Fill in the task details in the form that appears and click "Save".'
    },
    {
      id: 2,
      question: 'Can I assign tasks to multiple people?',
      answer: 'Yes, you can assign tasks to multiple team members. When creating or editing a task, select multiple users from the "Assignees" dropdown menu.'
    },
    {
      id: 3,
      question: 'How do I integrate with other tools?',
      answer: 'Go to the Integrations page from the sidebar menu. You\'ll see a list of available integrations. Click "Connect" on the service you want to integrate with and follow the authentication steps.'
    },
    {
      id: 4,
      question: 'How do I change my notification settings?',
      answer: 'Navigate to Settings > Notifications. Here you can customize which notifications you receive and how you receive them (email, in-app, etc.).'
    },
    {
      id: 5,
      question: 'Can I export my data?',
      answer: 'Yes, you can export your data in various formats. Go to the relevant page (Tasks, Contacts, etc.) and look for the "Export" button in the top right corner.'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Support</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">How can we help you?</h2>
          <p className="text-sm text-gray-500 mb-4">Search our knowledge base or browse common questions</p>
          
          <div className="relative max-w-lg mx-auto">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm text-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Contact Support</h3>
            <p className="text-xs text-gray-500 mb-3">Get help from our support team</p>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs text-gray-700 hover:bg-gray-50">
              Start a conversation
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm text-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
              <DocumentTextIcon className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Documentation</h3>
            <p className="text-xs text-gray-500 mb-3">Browse our detailed guides</p>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs text-gray-700 hover:bg-gray-50">
              View documentation
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm text-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mx-auto mb-3 w-12 h-12 flex items-center justify-center">
              <AcademicCapIcon className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-1">Tutorials</h3>
            <p className="text-xs text-gray-500 mb-3">Learn how to use our platform</p>
            <button className="w-full px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs text-gray-700 hover:bg-gray-50">
              Watch tutorials
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-3">
            <QuestionMarkCircleIcon className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-medium text-gray-900">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.id} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View all FAQs
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-full bg-red-100 text-red-600 mr-3">
            <VideoCameraIcon className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-medium text-gray-900">Video Tutorials</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: 1, title: 'Getting Started Guide', duration: '5:32', thumbnail: 'https://via.placeholder.com/300x180/f3f4f6/64748b?text=Getting+Started' },
            { id: 2, title: 'Task Management Basics', duration: '4:15', thumbnail: 'https://via.placeholder.com/300x180/f3f4f6/64748b?text=Task+Management' },
            { id: 3, title: 'Team Collaboration', duration: '6:48', thumbnail: 'https://via.placeholder.com/300x180/f3f4f6/64748b?text=Team+Collaboration' },
            { id: 4, title: 'Advanced Features', duration: '8:21', thumbnail: 'https://via.placeholder.com/300x180/f3f4f6/64748b?text=Advanced+Features' }
          ].map(video => (
            <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-white bg-opacity-75 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black bg-opacity-75 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800">
            View all tutorials
          </button>
        </div>
      </div>
    </div>
  )
}

export default Support
