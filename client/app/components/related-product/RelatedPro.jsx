import React from 'react'
import data_product from "../Assets/data"
import Card from '../card_item/Card'
const RelatedPro = () => {
  return (
    <div className='flex flex-col md:gap-10 gap-5 md:mt-20 mt-4 items-center'>
       <div className="md:text-5xl text-2xl flex flex-col items-center md:gap-3 gap-1">Related product <span className="md:w-[13rem] w-[7rem] h-1 rounded-full bg-gray-600 text-"></span></div>
       
       <div className="flex flex-wrap justify-center md:gap-3 gap-1">
          {
            data_product.map((item,indx)=>{
                return(
                    <Card key={indx} item={item}/>
                )
            })
          }
       </div>
    </div>
  )
}

export default RelatedPro
