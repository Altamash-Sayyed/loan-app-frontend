import React, { useState } from 'react'

const Business = () => {
  const [name, setName] = useState()
  const [gst, setGst] = useState()
  const [phone, setPhone] = useState()
  const [adress, setadress] = useState()
  const [city, setCity] = useState()
  const [category, setCategory] = useState()

  const subBuss = (e) => {
    e.preventDefault()
    if (name !== undefined && gst !== undefined && phone !== undefined && adress !== undefined && phone !== undefined & adress !== undefined && city !== undefined && category !== undefined) {
      localStorage.setItem("busname", name)
      localStorage.setItem("gst", gst)
      localStorage.setItem("bphn", phone)
      localStorage.setItem("badr", adress)
      localStorage.setItem("bct", city)
      localStorage.setItem("cate", category)
      localStorage.setItem('setlon', 2)
      setName('')
      setGst('')
      setPhone('')
      setadress('')
      setCity('')
      setCategory('')

    } else {
      alert('all field required')
    }

  }


  return (
    <>



      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          Bussiness Name
        </label>
        <input onChange={(e) => setName(e.target.value)} value={name} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full m-2 md:w-80 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
            GST No
          </label>
          <input onChange={(e) => setGst(e.target.value)} value={gst} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-80 mt-2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              Phone No
            </label>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          Adress
        </label>
        <input onChange={(e) => setadress(e.target.value)} value={adress} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
      </div>
      <div className='flex w-full m-2 flex-col md:flex-row'>
        <div className="w-full md:w-80 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
            City
          </label>
          <input onChange={(e) => setCity(e.target.value)} value={city} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
        </div>

        <div className="w-full md:w-80 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
            Category
          </label>
          <input onChange={(e) => setCategory(e.target.value)} value={category} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
        </div>
      </div>
      <input type="submit" onClick={subBuss} className='w-40 p-3 px-5 bg-indigo-700 rounded-lg text-white text-semibold cursor-pointer' value="Submit" />

    </>
  )
}
export default Business