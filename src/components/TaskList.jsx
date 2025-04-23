import React, { useState } from 'react'
import TaskItem from './TaskItem'
import { PlusIcon } from '@heroicons/react/24/outline'

function TaskList({ title, tasks, count, onToggleComplete }) {
  const [isExpanded, setIsExpanded] = useState(true)
  
  return (
    <div className="mb-6 bg-white rounded-md shadow-sm border border-gray-200">
      <div className="flex items-center px-4 py-3 border-b border-gray-200">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mr-2 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <div className="flex items-center">
          <span className={`h-2 w-2 rounded-full mr-2 ${title === 'Planned' ? 'bg-yellow-500' : title === 'Upcoming' ? 'bg-blue-500' : 'bg-green-500'}`}></span>
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className="ml-2 text-xs text-gray-500">{count} {count === 1 ? 'task' : 'tasks'}</span>
        </div>
      </div>
      
      {isExpanded && (
        <div>
          {tasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              onToggleComplete={onToggleComplete}
            />
          ))}
          
          <div className="px-4 py-2 border-t border-gray-100">
            <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
              <PlusIcon className="h-4 w-4 mr-1" />
              <span>Create Task</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskList
