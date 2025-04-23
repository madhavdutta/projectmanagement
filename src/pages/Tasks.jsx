import React, { useState } from 'react'
import { 
  FunnelIcon, 
  Bars3BottomLeftIcon, 
  TableCellsIcon, 
  ListBulletIcon, 
  PlusIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import TaskList from '../components/TaskList'
import Avatar from '../components/Avatar'
import { format } from 'date-fns'

// Sample data
const initialTasks = [
  {
    id: 1,
    title: 'Monthly Product Discussion',
    completed: false,
    dueDate: '2024-01-24',
    tags: ['Finance', 'Marketing', 'Urgent'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/65.jpg' }
    ]
  },
  {
    id: 2,
    title: 'Update New Social Media Posts',
    completed: false,
    dueDate: '2024-01-26',
    tags: ['Marketing', 'Event', 'Urgent'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/65.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Input Data for Monthly Sales Revenue',
    completed: false,
    dueDate: '2024-01-29',
    tags: ['Finance', 'Document', 'Marketing'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/men/46.jpg' }
    ]
  },
  {
    id: 4,
    title: 'Create Monthly Revenue Recap for All Product Lines',
    completed: false,
    dueDate: '2024-01-31',
    tags: ['Report', 'Event', 'Urgent'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
    ],
    section: 'upcoming'
  },
  {
    id: 5,
    title: 'Uploading New Items to Marketplace',
    completed: false,
    dueDate: '2024-01-30',
    tags: ['Report', 'Document', 'Marketing'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/men/46.jpg' }
    ],
    section: 'upcoming'
  },
  {
    id: 6,
    title: 'Monthly Product Discussion',
    completed: false,
    dueDate: '2024-01-25',
    tags: ['Finance', 'Marketing', 'Urgent'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/men/46.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/65.jpg' }
    ],
    section: 'upcoming'
  },
  {
    id: 7,
    title: 'Input Data for Monthly Sales Revenue',
    completed: false,
    dueDate: '2024-01-31',
    tags: ['Finance', 'Document', 'Marketing'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
    ],
    section: 'upcoming'
  },
  {
    id: 8,
    title: 'Uploading New Items to Marketplace',
    completed: true,
    dueDate: '2024-01-31',
    tags: ['Report', 'Document', 'Marketing'],
    assignees: [
      { avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      { avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
    ],
    section: 'completed'
  }
];

function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [viewMode, setViewMode] = useState('list');
  
  const plannedTasks = tasks.filter(task => !task.completed && (!task.section || task.section === 'planned'));
  const upcomingTasks = tasks.filter(task => !task.completed && task.section === 'upcoming');
  const completedTasks = tasks.filter(task => task.completed);
  
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task
    ));
  };
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Tasks</h1>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
            <button 
              className={`px-3 py-1.5 ${viewMode === 'list' ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => setViewMode('list')}
            >
              <ListBulletIcon className="h-5 w-5 text-gray-500" />
            </button>
            <button 
              className={`px-3 py-1.5 ${viewMode === 'kanban' ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => setViewMode('kanban')}
            >
              <Bars3BottomLeftIcon className="h-5 w-5 text-gray-500" />
            </button>
            <button 
              className={`px-3 py-1.5 ${viewMode === 'table' ? 'bg-gray-100' : 'bg-white'}`}
              onClick={() => setViewMode('table')}
            >
              <TableCellsIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50">
            <FunnelIcon className="h-4 w-4" />
            <span>Filter</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-50">
            <span>Sort by</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            <PlusIcon className="h-4 w-4" />
            <span>Add task</span>
          </button>
        </div>
      </div>
      
      {viewMode === 'list' && (
        <div>
          <TaskList 
            title="Planned" 
            tasks={plannedTasks} 
            count={plannedTasks.length} 
            onToggleComplete={handleToggleComplete}
          />
          
          <TaskList 
            title="Upcoming" 
            tasks={upcomingTasks} 
            count={upcomingTasks.length} 
            onToggleComplete={handleToggleComplete}
          />
          
          <TaskList 
            title="Completed" 
            tasks={completedTasks} 
            count={completedTasks.length} 
            onToggleComplete={handleToggleComplete}
          />
        </div>
      )}
      
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
              <h3 className="font-medium text-gray-900">Planned</h3>
              <span className="ml-2 text-xs text-gray-500">{plannedTasks.length} tasks</span>
            </div>
            <div className="space-y-2">
              {plannedTasks.map(task => (
                <div key={task.id} className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-sm font-medium mb-2">{task.title}</div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {task.tags && task.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex -space-x-2">
                      {task.assignees && task.assignees.slice(0, 3).map((assignee, index) => (
                        <Avatar 
                          key={index} 
                          src={assignee.avatar} 
                          size="sm" 
                          className="border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
              <h3 className="font-medium text-gray-900">Upcoming</h3>
              <span className="ml-2 text-xs text-gray-500">{upcomingTasks.length} tasks</span>
            </div>
            <div className="space-y-2">
              {upcomingTasks.map(task => (
                <div key={task.id} className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-sm font-medium mb-2">{task.title}</div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {task.tags && task.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex -space-x-2">
                      {task.assignees && task.assignees.slice(0, 3).map((assignee, index) => (
                        <Avatar 
                          key={index} 
                          src={assignee.avatar} 
                          size="sm" 
                          className="border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              <h3 className="font-medium text-gray-900">Completed</h3>
              <span className="ml-2 text-xs text-gray-500">{completedTasks.length} tasks</span>
            </div>
            <div className="space-y-2">
              {completedTasks.map(task => (
                <div key={task.id} className="p-3 bg-gray-50 rounded border border-gray-200">
                  <div className="text-sm font-medium text-gray-500 line-through mb-2">{task.title}</div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {task.tags && task.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                      ))}
                    </div>
                    <div className="flex -space-x-2">
                      {task.assignees && task.assignees.slice(0, 3).map((assignee, index) => (
                        <Avatar 
                          key={index} 
                          src={assignee.avatar} 
                          size="sm" 
                          className="border-2 border-white"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {viewMode === 'table' && (
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Task
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Due Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Assignees
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tasks.map(task => (
                <tr key={task.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button 
                        onClick={() => handleToggleComplete(task.id)}
                        className={`h-5 w-5 rounded border mr-3 ${task.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} flex items-center justify-center`}
                      >
                        {task.completed && <CheckIcon className="h-3 w-3 text-white" />}
                      </button>
                      <div className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                        {task.title}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {task.dueDate && format(new Date(task.dueDate), 'dd MMM yyyy')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-1">
                      {task.tags && task.tags.map((tag, index) => (
                        <span key={index} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex -space-x-2">
                      {task.assignees && task.assignees.map((assignee, index) => (
                        <Avatar 
                          key={index} 
                          src={assignee.avatar} 
                          size="sm" 
                          className="border-2 border-white"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      task.completed 
                        ? 'bg-green-100 text-green-800' 
                        : task.section === 'upcoming' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {task.completed ? 'Completed' : task.section === 'upcoming' ? 'Upcoming' : 'Planned'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Tasks
