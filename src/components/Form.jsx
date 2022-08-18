import React,{useState} from 'react'
import Personal from './Personal'
import Loan from './Loan'
import Business from './Bussiness'




const Form = () => {
    const [func,setFunc]=React.useState(<Personal />)

  const bus = localStorage.getItem("setbussiness")
  const lon = localStorage.getItem("setlon")
const navigate =()=>{
  if(bus){
    setFunc(<Business/>)
  }
}
const navigate2 =()=>{
  setFunc(<Loan/>)
}

  return (
      <>
      <div className='flex justify-center text-3xl'>
<div>
  <ul className="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3" role="tablist">
    <li className="nav-item" role="presentation">
      <p  className="cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" onClick={()=>setFunc(<Personal/>)}  aria-selected="true">Personal</p>
    </li>
    <li className="nav-item" role="presentation">
      <p  className="cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" onClick={()=>setFunc(<Business/>)}  aria-selected="false">Business</p>
    </li>
    <li className="nav-item" role="presentation">
    <p className=" cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab" aria-controls="tabs-messages3" onClick={()=>setFunc(<Loan/>)}  aria-selected="false">Loan</p> </li>
  </ul>
  <div className="tab-content" id="tabs-tabContent3">
    <div className="tab-pane fade show active"  id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
    </div>
    <div className="tab-pane fade"   id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
    </div>
    <div className="tab-pane fade"  id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
    </div>
  </div>
</div>

</div>






    <div className='mx-6 '>
      {
          func
      }

    </div>
      <button className='bg-indigo-700 p-2 px-4 m-2 rounded text-white font-bold' onClick={lon ?navigate2:navigate} >Next</button>
    </>
  )



}

export default Form


