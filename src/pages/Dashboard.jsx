import React, { useState } from 'react'
import { 
  ChartBarIcon, 
  ClockIcon, 
  CheckCircleIcon, 
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <ClockIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Pending Tasks</div>
              <div className="text-2xl font-semibold">12</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <CheckCircleIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Completed Tasks</div>
              <div className="text-2xl font-semibold">42</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <ArrowTrendingUpIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Progress</div>
              <div className="text-2xl font-semibold">78%</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <ChartBarIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Projects</div>
              <div className="text-2xl font-semibold">7</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Tasks</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center p-3 border border-gray-100 rounded-md hover:bg-gray-50">
                  <div className="h-4 w-4 rounded-full border border-gray-300 mr-3"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">Website redesign for client</div>
                    <div className="text-xs text-gray-500">Due in 3 days</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="tag tag-design">Design</span>
                    <span className="tag tag-urgent">Urgent</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Project Progress</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View details</button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Website Redesign', progress: 75, color: 'bg-blue-500' },
                { name: 'Mobile App Development', progress: 45, color: 'bg-purple-500' },
                { name: 'Marketing Campaign', progress: 90, color: 'bg-green-500' },
                { name: 'Product Launch', progress: 30, color: 'bg-yellow-500' }
              ].map((project, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                    <div className="text-sm text-gray-500">{project.progress}%</div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${project.color} h-2 rounded-full`} style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View calendar</button>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'Team Meeting', time: '10:00 AM', date: 'Today' },
                { title: 'Client Presentation', time: '2:30 PM', date: 'Tomorrow' },
                { title: 'Project Deadline', time: 'All day', date: 'Jun 15' }
              ].map((event, i) => (
                <div key={i} className="flex items-start">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600 mr-3">
                    <CalendarDaysIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.time} · {event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Messages</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-start">
                  <div className="p-2 rounded-full bg-green-100 text-green-600 mr-3">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                    <div className="text-xs text-gray-500">Updated the project requirements document</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Recent Documents</h2>
              <button className="text-sm text-blue-600 hover:text-blue-800">View all</button>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'Project Proposal.pdf', size: '2.4 MB' },
                { name: 'Meeting Notes.docx', size: '1.8 MB' },
                { name: 'Budget Overview.xlsx', size: '3.5 MB' }
              ].map((doc, i) => (
                <div key={i} className="flex items-start">
                  <div className="p-2 rounded-full bg-purple-100 text-purple-600 mr-3">
                    <DocumentTextIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{doc.name}</div>
                    <div className="text-xs text-gray-500">{doc.size}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
