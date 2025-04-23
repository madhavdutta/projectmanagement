import React from 'react'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  PlusIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline'

function Calendars() {
  // Sample data for calendar
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Start from previous month
    return {
      date: day,
      isCurrentMonth: day > 0 && day <= 31,
      hasEvents: [4, 12, 15, 20, 25].includes(day),
      events: day === 15 ? [
        { id: 1, title: 'Team Meeting', time: '10:00 AM', type: 'work' },
        { id: 2, title: 'Client Call', time: '2:30 PM', type: 'client' }
      ] : day === 20 ? [
        { id: 3, title: 'Project Deadline', time: 'All day', type: 'deadline' }
      ] : []
    };
  });

  const upcomingEvents = [
    { id: 1, title: 'Team Meeting', date: 'Today', time: '10:00 AM', type: 'work' },
    { id: 2, title: 'Client Call', date: 'Today', time: '2:30 PM', type: 'client' },
    { id: 3, title: 'Project Deadline', date: 'Jan 20', time: 'All day', type: 'deadline' },
    { id: 4, title: 'Marketing Review', date: 'Jan 25', time: '11:00 AM', type: 'work' },
    { id: 5, title: 'Product Launch', date: 'Feb 1', time: 'All day', type: 'important' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
        
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            Today
          </button>
          
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button className="px-2 py-1.5 bg-white text-gray-500 hover:bg-gray-50">
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button className="px-2 py-1.5 bg-white text-gray-500 hover:bg-gray-50">
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="text-lg font-medium text-gray-900">January 2024</div>
          
          <div className="flex items-center ml-4">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
              <PlusIcon className="h-4 w-4" />
              <span>Add event</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-6">
        <div className="col-span-5">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-7 border-b border-gray-200">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                <div key={i} className="px-2 py-3 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 grid-rows-5 divide-x divide-y divide-gray-200">
              {days.map((day, i) => (
                <div 
                  key={i} 
                  className={`min-h-[100px] p-2 ${
                    !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
                  } ${day.date === 15 ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${day.date === 15 ? 'font-medium text-blue-600' : ''}`}>
                      {day.date > 0 ? day.date : 31 + day.date}
                    </span>
                    {day.hasEvents && (
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    )}
                  </div>
                  
                  {day.events.map(event => (
                    <div 
                      key={event.id} 
                      className={`p-1 mb-1 rounded text-xs ${
                        event.type === 'work' 
                          ? 'bg-blue-100 text-blue-800' 
                          : event.type === 'client' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-red-100 text-red-800'
                      }`}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div>{event.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <EllipsisHorizontalIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map(event => (
                <div key={event.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-sm font-medium text-gray-900">{event.title}</div>
                    <div 
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        event.type === 'work' 
                          ? 'bg-blue-100 text-blue-800' 
                          : event.type === 'client' 
                            ? 'bg-purple-100 text-purple-800' 
                            : event.type === 'deadline'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {event.type}
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                    <span className="mx-1">•</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View all events
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">My Calendars</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <PlusIcon className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-2">
              {[
                { id: 1, name: 'Work', color: 'bg-blue-500' },
                { id: 2, name: 'Personal', color: 'bg-purple-500' },
                { id: 3, name: 'Meetings', color: 'bg-green-500' },
                { id: 4, name: 'Deadlines', color: 'bg-red-500' }
              ].map(calendar => (
                <div key={calendar.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`calendar-${calendar.id}`}
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <div className={`h-3 w-3 rounded-full ${calendar.color} ml-2`}></div>
                  <label htmlFor={`calendar-${calendar.id}`} className="ml-2 text-sm text-gray-700">
                    {calendar.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendars
