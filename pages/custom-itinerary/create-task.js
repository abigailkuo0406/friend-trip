import React,{ useEffect } from 'react'
import CreateTaskIndex from '@/components/custom-itinerary/create-task'
import AdminLayout from '@/components/layout/admin-layout'



export default function CreateTask() {

useEffect(()=>{
  localStorage.removeItem('schedule_info')
},[])




  return (
    <>
    <CreateTaskIndex/>
     
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
CreateTask.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
