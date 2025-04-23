import React from 'react'
import { 
  PlusIcon, 
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  UserGroupIcon,
  EllipsisVerticalIcon
} from '@heroicons/react/24/outline'

function Companies() {
  const companies = [
    {
      id: 1,
      name: 'Designify',
      industry: 'Design Agency',
      website: 'designify.com',
      employees: 45,
      location: 'San Francisco, CA',
      logo: 'https://ui-avatars.com/api/?name=Designify&background=6366f1&color=fff',
      status: 'active',
      contacts: 8
    },
    {
      id: 2,
      name: 'TechCorp',
      industry: 'Software Development',
      website: 'techcorp.io',
      employees: 120,
      location: 'Seattle, WA',
      logo: 'https://ui-avatars.com/api/?name=TechCorp&background=22c55e&color=fff',
      status: 'active',
      contacts: 12
    },
    {
      id: 3,
      name: 'GrowthLabs',
      industry: 'Marketing',
      website: 'growthlabs.co',
      employees: 35,
      location: 'New York, NY',
      logo: 'https://ui-avatars.com/api/?name=GrowthLabs&background=ef4444&color=fff',
      status: 'active',
      contacts: 5
    },
    {
      id: 4,
      name: 'ProductHQ',
      industry: 'Product Management',
      website: 'producthq.com',
      employees: 28,
      location: 'Austin, TX',
      logo: 'https://ui-avatars.com/api/?name=ProductHQ&background=f59e0b&color=fff',
      status: 'inactive',
      contacts: 3
    },
    {
      id: 5,
      name: 'FinanceIQ',
      industry: 'Financial Services',
      website: 'financeiq.com',
      employees: 65,
      location: 'Chicago, IL',
      logo: 'https://ui-avatars.com/api/?name=FinanceIQ&background=0ea5e9&color=fff',
      status: 'active',
      contacts: 7
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Companies</h1>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          <PlusIcon className="h-4 w-4" />
          <span>Add company</span>
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="relative w-64">
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search companies..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All companies</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Sort by: Name</option>
              <option>Sort by: Employees</option>
              <option>Sort by: Location</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Industry
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Website
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Employees
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contacts
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {companies.map(company => (
                <tr key={company.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-md flex-shrink-0 mr-3 overflow-hidden">
                        <img 
                          src={company.logo} 
                          alt={company.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{company.name}</div>
                        <div className="text-sm text-gray-500">{company.location}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{company.industry}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-blue-600">
                      <GlobeAltIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {company.website}
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{company.employees}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      company.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {company.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{company.contacts} contacts</div>
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
            Showing 5 of 15 companies
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

export default Companies
