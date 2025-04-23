import React from 'react'
import { 
  CreditCardIcon, 
  BanknotesIcon, 
  ArrowDownTrayIcon, 
  ArrowUpTrayIcon,
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

function Payments() {
  const transactions = [
    {
      id: 1,
      name: 'Website Redesign Project',
      date: 'Jan 15, 2024',
      amount: '$1,200.00',
      status: 'completed',
      type: 'income'
    },
    {
      id: 2,
      name: 'Software Subscription',
      date: 'Jan 12, 2024',
      amount: '$49.99',
      status: 'completed',
      type: 'expense'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      date: 'Jan 10, 2024',
      amount: '$350.00',
      status: 'pending',
      type: 'expense'
    },
    {
      id: 4,
      name: 'Client Retainer',
      date: 'Jan 05, 2024',
      amount: '$2,500.00',
      status: 'completed',
      type: 'income'
    },
    {
      id: 5,
      name: 'Office Supplies',
      date: 'Jan 03, 2024',
      amount: '$125.75',
      status: 'completed',
      type: 'expense'
    }
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
        
        <button className="flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          <PlusIcon className="h-4 w-4" />
          <span>New transaction</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
              <BanknotesIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Total Balance</div>
              <div className="text-xl font-semibold">$12,560.00</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
              <ArrowDownTrayIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Income</div>
              <div className="text-xl font-semibold">$8,450.00</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-3">
              <ArrowUpTrayIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Expenses</div>
              <div className="text-xl font-semibold">$4,890.00</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-3">
              <CreditCardIcon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Pending</div>
              <div className="text-xl font-semibold">$350.00</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
              />
            </div>
            
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All transactions</option>
              <option>Income</option>
              <option>Expenses</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full mr-3 ${
                        transaction.type === 'income' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-red-100 text-red-600'
                      }`}>
                        {transaction.type === 'income' 
                          ? <ArrowDownTrayIcon className="h-5 w-5" /> 
                          : <ArrowUpTrayIcon className="h-5 w-5" />
                        }
                      </div>
                      <div className="text-sm font-medium text-gray-900">
                        {transaction.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}{transaction.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-gray-600 hover:text-gray-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Showing 5 of 25 transactions
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

export default Payments
