import React,{useState} from 'react'

 const Personal=()=>{
    const [pin,setpin]= useState()
    const [ firstName,setfirstName] = useState()
    const [lastName,setlastName] = useState()
    const [birth,setbirth] = useState()
    const [email,setemail] = useState()
    const [phone,setphone] = useState()
    const [adress,setadress] = useState()
    const [city,setcity] = useState()
    const [state,setstate] = useState()

    const  subPersonal =(e)=>{
      e.preventDefault()
     if( firstName !== undefined&& lastName !==  undefined&& birth !==  undefined&& email !==  undefined&&  phone !==  undefined&  adress !==  undefined&&  city !==  undefined&&  state !==  undefined&&  pin !==  undefined){
      localStorage.setItem("fname",firstName)
      localStorage.setItem("lname",lastName)
      localStorage.setItem("bth",birth)      
     localStorage.setItem("eml",email) 
     localStorage.setItem("phn",phone) 
     localStorage.setItem("adr",adress) 
     localStorage.setItem("ct",city) 
     localStorage.setItem("st",state) 
     localStorage.setItem('pn',pin) 
     localStorage.setItem('setbussiness',1) 


    setpin('')
      setfirstName('')
    setlastName('')
     setbirth('')
     setemail('')
     setphone('')
     setadress('')
     setcity('')
     setstate('')
    }else{
      alert('all field required')
    }



    }
    return(
        <>
       <form className="w-full max-w-lg">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input onChange={(e)=> setfirstName(e.target.value)} value={ firstName} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
     </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input onChange={(e)=> setlastName(e.target.value)} value={ lastName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="Doe" />
    </div>
  </div>
  <div className="w-full  md:w-1/2 mt-3 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Birth Date
      </label>
      <input onChange={(e)=> setbirth(e.target.value)}  value={ birth} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date" placeholder="Doe" />
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
       Email
      </label>
      <input onChange={(e)=> setemail(e.target.value)} value={ email} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" placeholder="" />
     </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
       Phone
      </label>
      <input onChange={(e)=> setphone(e.target.value)} value={ phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="" />
    </div>

  </div>

  

    <div className="w-full md:w-3/4 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
       Home Adress
      </label>
      <input onChange={(e)=> setadress(e.target.value)} value={ adress} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
    </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
        City
      </label>
      <input onChange={(e)=> setcity(e.target.value)} value={ city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
        State
      </label>
      <div className="relative">
        <select onChange={(e)=> setstate(e.target.value)}  value={ state} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
        Zip
      </label>
      <input onChange={(e)=> setpin(e.target.value)} value={ pin} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={90210} />
    </div>
  </div>
  <input type="submit" onClick={subPersonal} className='w-40 p-3 px-5 bg-indigo-700 rounded-lg text-white text-semibold cursor-pointer' value="Submit" />
</form>

        </>
    )
}






export default Personal




