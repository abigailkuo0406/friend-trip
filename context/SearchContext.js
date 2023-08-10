import { createContext, useEffect, useState,useContext } from 'react'

// 建立空的 Context 物件 AuthContext 用於共享的函式
const SearchContext = createContext({})
export default SearchContext

export const noSearch = {
  type: "",
  content: "",
}

export const SearchContextProvider = function ({ children }) {
  const [search, setSearch] = useState({ ...noSearch })

 
  useEffect(() => {
    // 一開始渲染時將會員的資料存入 localStorage 裡面
    const str = localStorage.getItem('searchContent')

    // 如果有成功將會員資訊存入 localStorage，會將此轉成 JSON 並放入 useState 取代原值
    if (str) {
      try {
        const obj = JSON.parse(str)
        setAuth(obj)
      } catch (ex) {}
    }
  }, [])

 

 

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}
