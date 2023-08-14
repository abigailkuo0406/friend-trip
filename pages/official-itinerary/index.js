import AdminLayout from '@/components/layout/admin-layout'
import Comptest from '../../components/official-itinerarty-comps/comp-test'
import { useEffect, useState } from 'react'

export default function OfficialItinerary() {
  const [rows, setRows] = useState([])
  useEffect(() => {
    fetch('http://localhost:3002/show-official-itinerary', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d.rows)
        setRows(d.rows)
      })
  }, [])

  return <Comptest rows={rows} />

  // return rows.map((v, i) => {
  //   return <Comptest key={v.id} price={v.price} name={v['itinerary name']} />

  //   // return (
  //   //   <li key={v.id}>
  //   //     {v['itinerary name']}/{v.route}/{v.Attractions}/{v.Touristdestination}/
  //   //     {v.price}/{v.date}/{v.tripphotos}
  //   //   </li>
  //   // )
  // })
}

OfficialItinerary.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
