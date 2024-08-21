import React from 'react'
import Pagination from '@/Components/Pagination'
import SelectInput from '@/Components/SelectInput'
import TextInput from '@/Components/TextInput'
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from '@/constants.jsx'
import { Link } from '@inertiajs/react'
import TableHeading from '@/Components/TableHeading'

const TasksTable = ({tasks, queryParams = null}) => {
    queryParams = queryParams || {};

  return (
    <div>
    <div className='overflow-auto'>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b- border-gray-500">
                  <tr className='text-nowrap'>
                    <th onClick={e => sortChanged('id')} >
                       <TableHeading name={'ID'} id={'id'} queryParams={queryParams} />
                    </th>

                    <th  className='px-3 py-2'>Image</th>

                    <th onClick={e => sortChanged('name')} >
                      <TableHeading name={'Name'} id={'name'} queryParams={queryParams} />
                    </th>

                    <th onClick={e => sortChanged('status')} >
                      <TableHeading name={'Status'} id={'status'} queryParams={queryParams} />
                    </th>

                    <th onClick={e => sortChanged('created_at')} >
                      <TableHeading name={'Created'} id={'created_at'} queryParams={queryParams} />
                    </th>

                    <th onClick={e => sortChanged('due_date')} >
                      <TableHeading name={'Due to'} id={'due_date'} queryParams={queryParams} />
                    </th>

                    <th className='px-3 py-2'>Created By</th>
                    <th className='px-3 py-2'>Actions</th>
                  </tr>
                </thead>
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b- border-gray-500">
                  <tr className='text-nowrap'>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'>
                      <TextInput defaultValue={queryParams.name} class='w-full' placeholder='Task Name' onBlur={e => searchFieldChanged('name', e.target.value)} onKeyPress={e => onKeyPress('name', e)}/>
                    </th>
                    <th className='px-3 py-2'>
                      <SelectInput defaultValue={queryParams.status} class='w-full' onChange={e => searchFieldChanged('status', e.target.value)}>
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="in_progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </SelectInput>
                    </th>
                    <th className='px-3 py-2'> </th>
                    <th className='px-3 py-2'> </th>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'></th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.data.map(task => (
                    <tr key={task.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th className='px-3 py-3 '>
                        {task.id}
                      </th>
                      <td className='px-3 py-3 '>
                        <img src={task.image_path} alt=""  style={{width: 60}}/>
                      </td>
                      <td className='px-3 py-3 '>
                        {task.name}
                      </td>
                      <td className='px-3 py-3 '>
                        <span className={'px-3 py-1 rounded text-white ' + TASK_STATUS_CLASS_MAP[task.status]}>

                        {TASK_STATUS_TEXT_MAP[task.status ]}
                        </span>
                      </td>
                      <td className='px-3 py-3 '>
                        {task.created_at}
                      </td>
                      <td className='px-3 py-3 '>
                        {task.due_date}
                      </td>
                      <td className='px-3 py-3 '>
                      {task.createdBy ? task.createdBy.name : 'Unknown'}
                      </td>
                      <td className='px-3 py-3 '>
                        <Link href={route('task.edit', task.id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                          Edit
                        </Link>
                        <Link href={route('task.destroy', task.id)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
                          Delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <Pagination links={tasks.meta.links}/>
    </div>
  )
}

export default TasksTable