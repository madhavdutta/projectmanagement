import React from 'react'
import { PlusIcon, FolderIcon, StarIcon, TrashIcon } from '@heroicons/react/24/outline'

function Notes() {
  const notes = [
    {
      id: 1,
      title: 'Project Kickoff Meeting Notes',
      content: 'Discussed project timeline, resource allocation, and key deliverables...',
      date: 'May 15, 2023',
      tags: ['Meeting', 'Project']
    },
    {
      id: 2,
      title: 'Client Requirements',
      content: 'The client has requested the following features for the new platform...',
      date: 'May 12, 2023',
      tags: ['Client', 'Requirements']
    },
    {
      id: 3,
      title: 'Design Inspiration',
      content: 'Collection of design references and inspiration for the upcoming redesign...',
      date: 'May 10, 2023',
      tags: ['Design', 'Inspiration']
    },
    {
      id: 4,
      title: 'Weekly Team Updates',
      content: 'Progress updates from each team member for the week ending May 7...',
      date: 'May 7, 2023',
      tags: ['Team', 'Weekly']
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Notes</h1>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          <PlusIcon className="h-4 w-4" />
          <span>New note</span>
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="space-y-1 mb-6">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-blue-600 bg-blue-50 rounded-md font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>All Notes</span>
                <span className="ml-auto bg-blue-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded-full">12</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <StarIcon className="h-5 w-5 text-gray-400" />
                <span>Favorites</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">4</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <TrashIcon className="h-5 w-5 text-gray-400" />
                <span>Trash</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">2</span>
              </button>
            </div>
            
            <div className="mb-2">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3">Folders</h3>
            </div>
            
            <div className="space-y-1">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <FolderIcon className="h-5 w-5 text-gray-400" />
                <span>Personal</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">5</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <FolderIcon className="h-5 w-5 text-gray-400" />
                <span>Work</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">7</span>
              </button>
              
              <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                <FolderIcon className="h-5 w-5 text-gray-400" />
                <span>Projects</span>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">3</span>
              </button>
            </div>
            
            <div className="mt-6">
              <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                <PlusIcon className="h-4 w-4" />
                <span>New folder</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search notes..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 p-4">
              {notes.map(note => (
                <div key={note.id} className="border border-gray-200 rounded-md p-4 hover:border-blue-300 hover:shadow-sm cursor-pointer">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">{note.title}</h3>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">{note.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">{note.date}</div>
                    <div className="flex gap-1">
                      {note.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">{tag}</span>
                      ))}
                    </div>
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

export default Notes
