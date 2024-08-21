import React from 'react';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/16/solid';

const TableHeading = ({name, id, queryParams}) => {
    
  return (
    <div className=' flex items-center justify-between hover:cursor-pointer hover:text-gray-300 px-3 py-2 gap-1'>
        {name}
        <div>
            <ChevronUpIcon className={'w-4' + (queryParams.sort_field === id && queryParams.sort_direction === 'asc' ? ' text-white' : '')}/>
            <ChevronDownIcon className={'w-4 -mt-2' + (queryParams.sort_field === id && queryParams.sort_direction === 'desc' ? ' text-white' : '')}/> 
        </div>
                      
    </div>
  )
}

export default TableHeading