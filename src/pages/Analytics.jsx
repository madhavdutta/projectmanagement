import React from 'react'
import { 
  ArrowUpIcon, 
  ArrowDownIcon,
  CalendarDaysIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

function Analytics() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
            <CalendarDaysIcon className="h-4 w-4" />
            <span>Last 30 days</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            Export
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {[
          { 
            title: 'Total Tasks', 
            value: '245', 
            change: '+12.5%', 
            isPositive: true,
            description: 'vs. previous period'
          },
          { 
            title: 'Completed Tasks', 
            value: '182', 
            change: '+18.2%', 
            isPositive: true,
            description: 'vs. previous period'
          },
          { 
            title: 'Pending Tasks', 
            value: '63', 
            change: '-5.8%', 
            isPositive: true,
            description: 'vs. previous period'
          },
          { 
            title: 'Completion Rate', 
            value: '74.3%', 
            change: '+4.6%', 
            isPositive: true,
            description: 'vs. previous period'
          }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">{stat.title}</div>
            <div className="flex items-end gap-2">
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className={`flex items-center text-xs font-medium ${
                stat.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.isPositive ? (
                  <ArrowUpIcon className="h-3 w-3 mr-0.5" />
                ) : (
                  <ArrowDownIcon className="h-3 w-3 mr-0.5" />
                )}
                {stat.change}
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Task Completion Trend</h2>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                <span className="text-sm text-gray-600">Total</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 flex items-end">
            {/* Simulated chart bars */}
            {Array.from({ length: 12 }, (_, i) => {
              const height1 = 30 + Math.random() * 70;
              const height2 = height1 + 10 + Math.random() * 20;
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="relative w-full">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gray-200 rounded-t"
                      style={{ height: `${height2}%` }}
                    ></div>
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t"
                      style={{ height: `${height1}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Task Categories</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Design', percentage: 35, color: 'bg-blue-500' },
              { name: 'Development', percentage: 25, color: 'bg-purple-500' },
              { name: 'Marketing', percentage: 20, color: 'bg-green-500' },
              { name: 'Research', percentage: 15, color: 'bg-yellow-500' },
              { name: 'Other', percentage: 5, color: 'bg-gray-500' }
            ].map((category, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-medium text-gray-700">{category.name}</div>
                  <div className="text-sm text-gray-500">{category.percentage}%</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${category.color} h-2 rounded-full`} 
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Team Performance</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', role: 'Designer', tasks: 45, completed: 42, avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'David Lee', role: 'Developer', tasks: 38, completed: 35, avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { name: 'Emily Wilson', role: 'Marketing', tasks: 32, completed: 28, avatar: 'https://randomuser.me/api/portraits/women/65.jpg' },
              { name: 'Michael Brown', role: 'Product Manager', tasks: 28, completed: 25, avatar: 'https://randomuser.me/api/portraits/men/46.jpg' }
            ].map((member, i) => (
              <div key={i} className="flex items-center">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="h-10 w-10 rounded-full mr-3"
                />
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-xs text-gray-500">{member.role}</div>
                    </div>
                    <div className="text-sm text-gray-700">{member.completed}/{member.tasks} tasks</div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(member.completed / member.tasks) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                user: 'Sarah Johnson', 
                action: 'completed', 
                task: 'Website Redesign', 
                time: '2 hours ago',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              { 
                user: 'David Lee', 
                action: 'created', 
                task: 'API Integration', 
                time: '4 hours ago',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              { 
                user: 'Emily Wilson', 
                action: 'updated', 
                task: 'Marketing Campaign', 
                time: 'Yesterday',
                avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
              },
              { 
                user: 'Michael Brown', 
                action: 'commented on', 
                task: 'Product Roadmap', 
                time: 'Yesterday',
                avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
              },
              { 
                user: 'Jessica Taylor', 
                action: 'assigned', 
                task: 'Budget Review', 
                time: '2 days ago',
                avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
              }
            ].map((activity, i) => (
              <div key={i} className="flex items-start">
                <img 
                  src={activity.avatar} 
                  alt={activity.user} 
                  className="h-8 w-8 rounded-full mr-3"
                />
                
                <div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-900">{activity.user}</span>
                    <span className="text-gray-600"> {activity.action} </span>
                    <span className="font-medium text-gray-900">{activity.task}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View all activity
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
