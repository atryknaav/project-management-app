import Pagination from '@/Components/Pagination'
import SelectInput from '@/Components/SelectInput'
import TextInput from '@/Components/TextInput'
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from '@/constants.jsx'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'
import TableHeading from '@/Components/TableHeading'

const Index = ({auth, users ,queryParams = null}) => {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value){
      queryParams[name] = value;
    }
    else{
      delete queryParams[name];
    }

    router.get(route('user.index'), queryParams);
  }

  const onKeyPress = (name, e) => {
    if(e.key !== 'Enter') return;
    searchFieldChanged(name, e.target.value);
  }

  const sortChanged = (name) => {
    if (name === queryParams.sort_field){
      if (queryParams.sort_direction === 'asc'){
        queryParams.sort_direction = 'desc';
      }
      else{
        queryParams.sort_direction = 'asc';
      }
    }
    else{
      queryParams.sort_field = name;
      queryParams.sort_direction = 'asc';
    }
    router.get(route('user.index'), queryParams);
  }

  const deleteUser = (user) => {
    if (!window.confirm("Are you sure you want to delete the user?")) {
      return;
    }
    router.delete(route("user.destroy", user.id));
  };

  return (
    <Authenticated user={auth.user} header={ <div className="flex justify-between items-center">
      <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
        Users
      </h2>
      <Link
        href={route("user.create")}
        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
      >
        Add new
      </Link>
    </div>}>

    <Head title="Users" />
    <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='p-6 text-gray-900 dark:text-gray-100 '>
              <div className='overflow-auto'>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b- border-gray-500">
                  <tr className='text-nowrap'>
                    <th onClick={e => sortChanged('id')} >
                       <TableHeading name={'ID'} id={'id'} queryParams={queryParams} />
                    </th>
                    <th onClick={e => sortChanged('name')} >
                      <TableHeading name={'Name'} id={'name'} queryParams={queryParams} />
                    </th>

                    <th onClick={e => sortChanged('email')} >
                      <TableHeading name={'Email'} id={'email'} queryParams={queryParams} />
                    </th>

                    <th onClick={e => sortChanged('created_at')} >
                      <TableHeading name={'With us since'} id={'created_at'} queryParams={queryParams} />
                    </th>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'>Actions</th>
                  </tr>
                </thead>
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400 border-b- border-gray-500">
                  <tr className='text-nowrap'>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'>
                      <TextInput defaultValue={queryParams.name} class='w-full' placeholder='User Name' onBlur={e => searchFieldChanged('name', e.target.value)} onKeyPress={e => onKeyPress('name', e)}/>
                    </th>
                    <th className='px-3 py-2'></th>
                    <th className='px-3 py-2'>
                    </th>
                    <th className='px-3 py-2'> </th>
                    <th className='px-3 py-2'> </th>
                    <th className='px-3 py-2'></th>
                   
                  </tr>
                </thead>
                <tbody>
                  {users.data.map(user => (
                    <tr key={user.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                      <th className='px-3 py-3 '>
                        {user.id}
                      </th>
                      <td className='px-3 py-3 '>
                        <Link className='hover:text-gray-300 underline text-nowrap' href={route('user.show', user.id)}>
                          {user.name}
                        </Link>
                      </td>
                      <td className='px-3 py-3 '>
                        {user.email}
                      </td>
                      <td className='px-3 py-3 '>
                        {user.created_at}
                      </td>
                      <td className='px-3 py-3 '>
                        {user.due_date}
                      </td>
                      <td className='px-3 py-3 '></td>
                      <td className='px-3 py-3 '>
                        <Link href={route('user.edit', user.id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1'>
                          Edit
                        </Link>
                        <button onClick={(e) => deleteUser(user)} className='font-medium text-red-600 dark:text-red-500 hover:underline mx-1'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <Pagination links={users.meta.links}/>

            </div>
          </div>
        </div>
    </div>
    </Authenticated>
  )
}

export default Index