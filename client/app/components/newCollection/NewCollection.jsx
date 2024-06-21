import React from 'react'
import new_collections from '../Assets/new_collections'
import Card from '../card_item/Card'
const NewCollection = () => {
  return (
    <div className="flex justify-center">
    <div className='flex flex-col md:gap-10 gap-5 md:mt-10 mt-4 items-center md:w-[80%]'>
       <div className="md:text-5xl text-2xl flex flex-col items-center md:gap-3 gap-1">New Collections <span className="md:w-[13rem] w-[7rem] h-1 rounded-full bg-gray-600 text-"></span></div>
       
       <div className="flex justify-center flex-wrap md:gap-3 gap-1">
          {
            new_collections.map((item,indx)=>{
                return(
                    <Card key={indx} item={item}/>
                )
            })
          }
       </div>
    </div>
    </div>
  )
}

export default NewCollection