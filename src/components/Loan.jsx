import React, { useState } from 'react'
import axios from 'axios'

const Loan = () => {
  const [id, setId] = useState()
  const [idNo, setIdNo] = useState()
  const [amount, setAmount] = useState()
  const [period, setPeriod] = useState()
  const [intrest, setIntrest] = useState()
  const [phone, setPhone] = useState()
  const [comment, setComment] = useState()


  const bName = localStorage.getItem("busname")
  const gst = localStorage.getItem("gst")
  const bphone = localStorage.getItem("bphn")
  const bCity = localStorage.getItem("bct")
  const bCategory = localStorage.getItem("cate")
  const firstName = localStorage.getItem("fname")
  const lastName = localStorage.getItem("lname")
  const birth = localStorage.getItem("bth")
  const email = localStorage.getItem("eml")
  const adress = localStorage.getItem("adr")
  const city = localStorage.getItem("ct")
  const state = localStorage.getItem("st")
  const pinCode = localStorage.getItem('pn')


  const submit = async () => {
    if (id !== undefined && idNo !== undefined && amount !== undefined && period !== undefined && intrest !== undefined && phone !== undefined && comment !== undefined) {
      if (bphone !== phone) {
        alert('Phone no no match')
      }
      try {

        //http://localhost:5000/api/loan/loan
        await axios.post('https://loan-backend-application.herokuapp.com/api/loan/loan', {
          firstName,
          lastName,
          phone,
          email,
          birth,
          adress,
          city,
          pinCode,
          state,
          bName,
          gst,
          bCity,
          bCategory,
          id,
          idNo,
          amount,
          period,
          intrest,
          comment


        }).then(function (response) {
          console.log(response);
          localStorage.clear()
          window.location = '/'
        })
          .catch(function (error) {
            alert('server error')
          });


      } catch (error) {
        alert('server error')
      }
    } else {
      alert("all feild required")
    }


  }
  return (
    <>
      <div className="w-full flex flex-col md:w-1/2 px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
          Identity or Type Of Id
        </label>
        Aadhar: <input onChange={(e) => setId(e.target.value)} className=" " id="grid-last-name" type="radio" name='identity' value="aadhar" />
        Driving Licence: <input onChange={(e) => setId(e.target.value)} className=" " id="grid-last-name" type="radio" name='identity' value="Driving licence" />
        Voter Id: <input onChange={(e) => setId(e.target.value)} className=" " id="grid-last-name" type="radio" name='identity' value="voterId" />
      </div>

      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
          ID No
        </label>
        <input onChange={(e) => setIdNo(e.target.value)} value={idNo} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="" />
      </div>

      <div className='flex w-1/2 flex-col md:flex-row'>
        <div className="w-80 md:w-1/2 px-3 m-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Loan Amount
          </label>
          <input onChange={(e) => setAmount(e.target.value)} value={amount} className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="" />
        </div>
        <div className="w-80 md:w-1/2 px-3 m-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Loan Period In Year
          </label>
          <input onChange={(e) => setPeriod(e.target.value)} value={period} className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="number" placeholder="" />
        </div>
      </div>


      <div className='flex w-1/2 flex-col md:flex-row'>
        <div className="w-80 md:w-1/2 px-3 m-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Loan Intrest*
          </label>
          <input onChange={(e) => setIntrest(e.target.value)} value={intrest} className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="" />
        </div>
        <div className="w-80 md:w-1/2 px-3 m-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Phone No
          </label>
          <input onChange={(e) => setPhone(e.target.value)} value={phone} className="appearance-none block w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " id="grid-last-name" type="text" placeholder="" />
        </div>
      </div>

      <div className='flex w-1/2  m-3 flex-col '>
        <label htmlFor="">Comment or Any Question?</label>
        <textarea onChange={(e) => setComment(e.target.value)} value={comment} className='w-full appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ' name="" id="" cols="30" rows="6"></textarea>
      </div>
      <input type="submit" onClick={submit} className='w-40 p-3 px-5 bg-indigo-700 rounded-lg text-white text-semibold cursor-pointer' value="Submit" />

    </>
  )
}



export default Loan