import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// 建立空的 Context 物件 AuthContext 用於共享的函式
const AuthContext = createContext({})
export default AuthContext

// 設定未登錄的預設值
export const noLoginState = {
  member_id: 0,
  email: '',
  member_name: '',
  token: '',
}

// 定義了函式組件 AuthContextProvider，接收參數 children
export const AuthContextProvider = function ({ children }) {
  const [auth, setAuth] = useState({ ...noLoginState })
  const router = useRouter()

  // 登出的話移除 localhost 的會員資料並放入未登錄的預設進入 useState
  const logout = () => {
    localStorage.removeItem('auth') // 使用於不存在的 key 不會報錯
    setAuth(noLoginState)
    router.push('../login')
  }
  useEffect(() => {
    // 一開始渲染時將會員的資料存入 localStorage 裡面
    const str = localStorage.getItem('auth')

    // 如果有成功將會員資訊存入 localStorage，會將此轉成 JSON 並放入 useState 取代原值
    if (str) {
      try {
        const obj = JSON.parse(str)
        setAuth(obj)
      } catch (ex) {}
    }
  }, [])

  return (
    // value 裡放多少參數，要引入此 context 的可以設多少參數 (不一定要取全部，但名稱要一樣)
    // 使用 auth.id 等獲取會員資料
    // 使用 logout() 登出
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
