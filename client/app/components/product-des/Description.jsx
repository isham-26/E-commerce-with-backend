import React from 'react'

const Description = () => {
  return (
    <div className='flex flex-col gap-2 md:text-xl md:mt-10 mt-5 px-3'>
        <div className="flex gap-3 mb-3">
            <button className='bg-gray-300 md:p-3 rounded-sm p-2 hover:bg-gray-500 ease-in-out duration-300'>Description</button>
            <button className='bg-gray-300 md:p-3 rounded-sm p-2 hover:bg-gray-500 ease-in-out duration-300'>Review {"("}122{")"}</button>
        </div>
        <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio repudiandae consequuntur quia dolores eum eligendi, velit libero facere natus dolorem! Obcaecati rem atque quibusdam laboriosam voluptatibus accusantium repellendus culpa, ducimus ipsa ratione nisi minima, commodi reiciendis molestias perspiciatis corporis. Provident ipsam obcaecati architecto accusamus saepe aperiam nisi fuga. Veniam.
        </p>
        <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur optio repudiandae consequuntur quia dolores eum eligendi, velit libero facere natus dolorem! Obcaecati rem atque quibusdam laboriosam voluptatibus accusantium repellendus culpa, ducimus ipsa ratione nisi minima, commodi reiciendis molestias perspiciatis corporis. Provident ipsam obcaecati architecto accusamus saepe aperiam nisi fuga. Veniam.
        </p>
    </div>
  )
}

export default Description