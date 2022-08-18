import React from 'react'
import { Link } from 'react-router-dom'

function Post() {

const loans =[
  {
name:"Home Loan",
img:"https://th.bing.com/th/id/OIP.Oxgg5h6-4hTrmGmEId3qewHaDw?w=323&h=177&c=7&r=0&o=5&pid=1.7",
 desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit animi aliquam quas unde dolorum odio repellat iusto autem, suscipit laboriosam dolore, laudantium magnam ipsa enim! Quibusdam fuga dolor earum!"
  },{
name:"Business Loan",
img:"https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg?auto=compress&cs=tinysrgb&w=600",
desc:"    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit animi aliquam quas unde dolorum odio repellat iusto autem, suscipit laboriosam dolore, laudantium magnam ipsa enim! Quibusdam fuga dolor earum!"
  },                                                                                                              
  {
name:"Education Loan",
img:"https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=600",
desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit animi aliquam quas unde dolorum odio repellat iusto autem, suscipit laboriosam dolore, laudantium magnam ipsa enim! Quibusdam fuga dolor earum!"
  }
]


  return (
   <div id='loans' className='grid grid-cols-1 gap-8 md:grid-cols-3'>
   {
     loans.map((item,index)=>{
       return(
<div key={index} className="max-w-sm m-6 bg-white w-80 h-fit rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

<img className="rounded-t-lg w-80 h-60" src={item.img} alt="true" />

<div className="p-5">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>

<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desc}</p>
<Link to='/form' > <p  className="inline-flex cursor-pointer items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Get   <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
</p></Link>
</div>
</div>
       )
     })
   }



   </div>

  )
}

export default Post
