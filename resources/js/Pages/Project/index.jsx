import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const Index = ({auth, projects}) => {
  return (
    <Authenticated user={auth.user} header={ <h2 className="font-semibold text-xl text-gray-800 dark:gray-200 leading-tight"> Dashboard </h2>}>

    <Head title="Projects" />
    <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900 dark:text-gray-100 '>
              
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b- border-gray-500">
                  <tr className='text-nowrap'>
                    <th className='px-3 py-2'>ID</th>
                    <th className='px-3 py-2'>IMAGE</th>
                    <th className='px-3 py-2'>name</th>
                    <th className='px-3 py-2'>status</th>
                    <th className='px-3 py-2'>created at</th>
                    <th className='px-3 py-2'>due date</th>
                    <th className='px-3 py-2'>created by</th>
                    <th className='px-3 py-2'>actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.data.map(project => (
                    <tr key={project.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th className='px-3 py-3 '>
                        {project.id}
                      </th>
                      <td className='px-3 py-3 '>
                        <img src={project.image_path} alt=""  style={{width: 60}}/>
                      </td>
                      <td className='px-3 py-3 '>
                        {project.name}
                      </td>
                      <td className='px-3 py-3 '>
                        {project.status}
                      </td>
                      <td className='px-3 py-3 '>
                        {project.created_at}
                      </td>
                      <td className='px-3 py-3 '>
                        {project.due_date}
                      </td>
                      <td className='px-3 py-3 '>
                      {project.createdBy ? project.createdBy.name : 'Unknown'}
                      </td>
                      <td className='px-3 py-3 '>
                        
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
    </div>
    </Authenticated>
  )
}

export default Index