import {Bicheck} from 'react-icons/bi'

const error = ({message}) => {
  return (
   <div className='error container mx-auto'>
       <div className='flex justify-center mx-auto  border border-red-200 bg-red-400 w-3/6 text-gray-900 text-md my-4 py-2 text-center bg-opacity-5'>
        {message}<span className='px-1'><Bicheck size={25} color={"red"}/></span>
       </div>
   </div>
  )
}

export default error