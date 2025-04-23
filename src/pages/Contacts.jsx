import React from 'react'
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline'

function Contacts() {
  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Designer',
      company: 'Designify',
      email: 'sarah.johnson@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['Design', 'Client']
    },
    {
      id: 2,
      name: 'David Lee',
      role: 'Software Engineer',
      company: 'TechCorp',
      email: 'david.lee@example.com',
      phone: '+1 (555) 234-5678',
      location: 'Seattle, WA',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['Development', 'Team']
    },
    {
      id: 3,
      name: 'Emily Wilson',
      role: 'Marketing Manager',
      company: 'GrowthLabs',
      email: 'emily.wilson@example.com',
      phone: '+1 (555) 345-6789',
      location: 'New York, NY',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      tags: ['Marketing', 'Client']
    },
    {
      id: 4,
      name: 'Michael Brown',
      role: 'Product Manager',
      company: 'ProductHQ',
      email: 'michael.brown@example.com',
      phone: '+1 (555) 456-7890',
      location: 'Austin, TX',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      tags: ['Product', 'Team']
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      role: 'Financial Analyst',
      company: 'FinanceIQ',
      email: 'jessica.taylor@example.com',
      phone: '+1 (555) 567-8901',
      location: 'Chicago, IL',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      tags: ['Finance', 'Client']
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          <PlusIcon className="h-4 w-4" />
          <span>Add contact</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="relative w-64">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search contacts..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All contacts</option>
              <option>Team</option>
              <option>Clients</option>
              <option>Vendors</option>
            </select>
            
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Sort by: Name</option>
              <option>Sort by: Company</option>
              <option>Sort by: Recently added</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map(contact => (
                <tr key={contact.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        src={contact.avatar} 
                        alt={contact.name} 
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                        <div className="text-sm text-gray-500">{contact.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center text-sm text-gray-500">
                        <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{contact.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{contact.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex gap-1">
                      {contact.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 5 of 25 contacts
          </div>
          
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-50 border border-blue-300 rounded-md text-sm text-blue-600">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
