import { Children, createContext, useEffect, useState } from 'react'

// 建立空的 Context 物件 ScheduleContext 用於共享的函式
export const default_value = {
  ID: '123',
  handleChangeValue: () => {console.log('123 測試');},
}
const ScheduleContext = createContext({})
export default ScheduleContext




// 定義了函式組件 ScheduleContextProvider，接收參數 children
export const ScheduleContextProvider = ({children})=>{
  const [Itin_id,setItin_id]=useState('')
  // 使用 useEffect 在元件載入時讀取 localStorage 的值
  useEffect(() => {

    const storedData = localStorage.getItem('auth'); // 使用 'myData' 作為鍵名

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const member_id=parsedData.member_id
      console.log('storedData:',member_id);
      
      const schedule_info = localStorage.getItem('schedule_info');
      console.log('schedule_info:',schedule_info);

      if (! schedule_info) {
        
        console.log('<<<<<<     無特定行程編號     >>>>>>')
        // 後台取itin_member 行程編號
        fetch(`http://localhost:3002/get-itin_id?itin_member=${member_id}`)
        .then((r) => r.json())
        .then((data) => {
          //判斷目前的itin_id位置
          console.log('initial ==> itin_member:', data[0])
          setItin_id(data[0].itin_id)
          localStorage.setItem('schedule_info', JSON.stringify({'itin_member':data[0].itin_id,'itin_name':data[0].name}))
          
          console.log('<<<<<<     DB最新行程編號為:',data[0].itin_id,'     >>>>>>')
        })
        .catch((error) => {
          console.error('資料接收失敗', error)
        });
        console.log('Itin_idItin_idItin_idItin_id=>',Itin_id)

      }else{
        const schedule_info = localStorage.getItem('schedule_info')
        const parsed_schedule_info = JSON.parse(schedule_info);
        console.log('<<<<<<     有特定行程編號     >>>>>>')
        console.log('(     localStorage 最新行程編號為:',parsed_schedule_info.itin_member,'     )')

      }
      
    }else{
      console.log('請登入會員，謝謝')
    }
    }, []);




   const default_value = {
    ID: '456',
  }
  const [ID, setID] = useState({ ...default_value });

  const change_value = {
    ID: 'billy',
  }



  console.log('after provider ID value =>',ID )

  const handleChangeValue = () => {
    setID('billy');
    console.log('handleChangeValue provider ID value =>',ID)
  };





  return (

    <ScheduleContext.Provider value={{ID , setID,  handleChangeValue }}>
    {children}
    </ScheduleContext.Provider>
  )
}