import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { BiSearchAlt } from 'react-icons/bi'

export default function InputSearchBar({
  localstorage='',
  setGetSearch=()=>{},
  setGetRandom=()=>{},
  placeholder='探索新發現！',
}) {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value) // 為了更新 input 的 value 值
  }
  useEffect(()=>{
    if(
      JSON.parse(localStorage.getItem("inputClear")) == true
    ){
      // localStorage.setItem(`${localstorage}`, JSON.stringify(''));
      setInputValue('')
      router.push({
        pathname: router.pathname,
      });
    
    }
  },[router])
  useEffect(()=>{
    localStorage.setItem(`${localstorage}`, JSON.stringify(inputValue));
    localStorage.setItem("inputClear", JSON.stringify(false));
  },[inputValue])
  const handleClick = (event) => {
    setGetSearch(JSON.parse(localStorage.getItem(`${localstorage}`))) // 為了更新 input 的 value 值
    setGetRandom(Math.random())
  }
  return (
    <div id="Search-Bar" className="input-group w-50">
      <form className="d-flex w-100">
        <input
          type="text"
          className="form-control input-text"
          placeholder={placeholder}
          aria-label={placeholder}
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          <BiSearchAlt />
        </button>
      </form>
    </div>
  )
}
