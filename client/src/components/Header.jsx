import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const {setInput,input} = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = ()=>{
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <h1 className="text-3xl text-center sm:text-6xl font-semibold sm:leading-16 text-gray-700">Real <span className="text-primary"> Exam </span>Stories.<br />Real <span className="text-primary"> Insights. </span></h1> 
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
            Discover honest exam experiences from students just like you. Learn what to expect, how to prepare, and avoid common pitfalls — all in one place.
        </p>
        <form onSubmit={onSubmitHandler} className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
            <input ref={inputRef} type="text" placeholder="Search for exams" required
            className="w-full pl-4 outline-none"/>
            <button type="submit"
            className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer">Search</button>
        </form>
      </div>
      <div className='text-center'>
        {input && <button onClick={onClear} className='border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer'>Clear Search</button>}
      </div>
      <img src={assets.gradientBackground} alt=""
      className="-z-1 absolute -top-50  opacity-50"/>
    </div>
  )
}

export default Header
