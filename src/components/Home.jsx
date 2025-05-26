import { useState } from "react";
import Swal from 'sweetalert2'

function Home() {

  const [username, setUsername] = useState("")
  const [date, setDate] = useState("")
  const [city, setCity] = useState("")
  const [salary, setSalary] = useState(0)
  const [description, setDescription] = useState("")
  const [GOSIregestered, setGOSIregestered] = useState("")
  const [checkDisability, setCheckDisability] = useState("")
  const [checkExp, setExp] = useState("")

  const checkData = () => {

    let userYear = new Date(date).getFullYear()
    let currentYear = new Date().getFullYear()
    let age = currentYear - userYear

    if (username.length < 4) {
      Swal.fire({
        title: 'Error!',
        text: 'username must be at least 4 characters',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }

    if(age > 17 && age < 70){
      //
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'age must be between 18 and 69',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return
    }

    Swal.fire({
      text: "you have submitted job post successlly",
      icon: "success"
    });

    setUsername("")
    setDate("")
    setCity("")
    setSalary("")
    setDescription("")

  }

  return (
    <div className="p-3 lg:flex flex-col justify-center items-center bg-blue-50">

    <h1 className="lg:text-xl font-bold py-3">Staff Engineer - Payments Screening - Riyadh</h1>


    <div className="flex flex-col items-start gap-5 bg-gray-200 rounded-xl p-5 lg:w-6/10">
      <div className="flex gap-2">
        <label className="p-1 w-30 font-bold">Full Name</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} className=" rounded p-1 w-60 lg:w-100 bg-white focus:outline-indigo-600" type="text" />
      </div>
      <div className="flex gap-2">
        <label className="p-1 w-30 font-bold">Date of birth</label>
        <input value={date} onChange={(e) => setDate(e.target.value)} className=" rounded p-1 w-60 lg:w-100 bg-white focus:outline-indigo-600" type="date" />
      </div>
      <div className="flex gap-2">
        <label className="p-1 w-30 font-bold">City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)} className=" rounded w-60 lg:w-100 bg-white focus:outline-indigo-600">
            <option selected>Choose a City</option>
            <option value="Qassim">Qassim</option>
            <option value="Riyadh">Riyadh</option>
            <option value="Jiddah">Jiddah</option>
            <option value="Mecca">Mecca</option>
          </select>
      </div>
      <div className="flex gap-2">
        <label className="p-1 w-30 font-bold">Salary</label>
          <select value={salary} onChange={(e) => setSalary(e.target.value)} className=" rounded w-60 lg:w-100 bg-white focus:outline-indigo-600">
            <option selected>Choose a Salary</option>
            <option value="salary 1">between 3000 to 8000</option>
            <option value="salary 2">between 9000 to 13000</option>
            <option value="salary 3">15000 and more</option>
          </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-1 font-bold">Why did you apply for this jop?</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} className=" rounded w-60 lg:w-122 bg-white focus:outline-indigo-600"></textarea>
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-1 font-bold">Are you registered in GOSI?</label>
        <div className="flex items-center">
          <input value={"yes"} onChange={(e) => setGOSIregestered(e.target.value)} type="radio"  name="GOSI-radio" className="h-5 w-5 accent-black" />
          <label className="px-3 ">Yes</label>
        </div>
        <div className="flex items-center">
          <input value={"no"} onChange={(e) => setGOSIregestered(e.target.value)} type="radio"  name="GOSI-radio" className="h-5 w-5 accent-black" />
          <label className="px-3">No</label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-1 font-bold">Do you claim any disability?</label>
        <div className="flex items-center">
          <input value={"yes"} onChange={(e) => setCheckDisability(e.target.value)} type="radio"  name="default-radio" className="h-5 w-5 accent-black" />
          <label className="px-3">Yes</label>
        </div>
        <div className="flex items-center">
          <input value={"no"} onChange={(e) => setCheckDisability(e.target.value)} type="radio"  name="default-radio" className="h-5 w-5 accent-black" />
          <label className="px-3">No</label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="p-1 font-bold">Do you have more than 2 years of experience in AI?</label>
        <div className="flex items-center">
          <input value={"yes"} onChange={(e) => setExp(e.target.value)} type="radio"  name="AI-radio" className="h-5 w-5 accent-black" />
          <label className="px-3">Yes</label>
        </div>
        <div className="flex items-center">
          <input value={"no"} onChange={(e) => setExp(e.target.value)} type="radio"  name="AI-radio" className="h-5 w-5 accent-black" />
          <label className="px-3">No</label>
        </div>
      </div>
      <button onClick={checkData} className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">Apply Now</button>
    </div>

    </div>
  );
}

export default Home;
