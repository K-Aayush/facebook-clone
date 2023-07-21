import { IconProps } from '@/type'
import React from 'react'

const HeaderIcon = ({ Icon, active }: IconProps): JSX.Element => {
  return (
    <div className='flex items-center cursor-pointer md:px-10 sm:h-14 hover:text-blue-500 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500'>
        <Icon className={`h-5 text-center sm:h-7 mx-auto  ${ active ? 'text-blue-500' : 'text-gray-500'}`} />
    </div>
  )
}

export default HeaderIcon