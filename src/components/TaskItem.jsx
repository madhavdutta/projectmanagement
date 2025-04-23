import React from 'react'
import { format } from 'date-fns'
import { CheckIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar'

function TaskItem({ task, onToggleComplete }) {
  return (
    <div className="flex items-center py-3 border-b border-gray-100 hover:bg-gray-50 px-2">
      <div className="flex-shrink-0 mr-3">
        <button 
          onClick={() => onToggleComplete(task.id)}
          className={`h-5 w-5 rounded border ${task.completed ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} flex items-center justify-center`}
        >
          {task.completed && <CheckIcon className="h-3 w-3 text-white" />}
        </button>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
          {task.title}
        </div>
      </div>
      
      <div className="flex items-center gap-3 ml-4">
        {task.dueDate && (
          <div className="flex items-center text-xs text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Due Date {format(new Date(task.dueDate), 'dd MMM yyyy')}</span>
          </div>
        )}
        
        <div className="flex gap-1">
          {task.tags && task.tags.map((tag, index) => (
            <span key={index} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
        
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
      </div>
    </div>
  )
}

export default TaskItem
