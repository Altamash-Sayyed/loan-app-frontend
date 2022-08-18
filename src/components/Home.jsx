import React from 'react'  
import Post from './Post';
import Customers from './Customers';
import Footer from './Footer';

function Home() {


  return (
    <>
    <div id='home' className='w-full flex '>
 <img className='w-full h-96 m-6' src="https://img.freepik.com/premium-vector/business-people-among-various-money-symbols-graphs-flat-vector-illustration-isolated_125133-1260.jpg?size=626&ext=jpg&ga=GA1.2.335223753.1655997602" alt="" />
     </div>

    <div>
    <Post />
      <Customers />
     <Footer />
    </div>
    </>

  )
}
export default Home
