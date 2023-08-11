// import { useEffect, useState } from "react";
// import CustomItineraryIndex from '@/components/custom-itinerary'
// import HistotyCard from '@/components/custom-itinerary/histoty-card'
// import AdminLayout from '@/components/layout/admin-layout'
// import data from '@/data/custom-itinerary/itinerary.json'
// import Link from 'next/link'
// import { useRouter } from "next/router";
// import PageBtn from "@/components/custom-itinerary/page-btn";

// export default function Index() {
//   const router = useRouter();
//   console.log(router)
//   const [dataPage, setDataPage] = useState({
//     redirect: "",
//     totalRows: 0,
//     perPage: 4,
//     totalPages: 0,
//     page: 1,
//     rows: [],
//   });

//   useEffect(()=>{
//     const usp = new URLSearchParams(router.query)
//   })


//   return (
//     <>
//     <CustomItineraryIndex/>

//     {data.map((v,i)=>{
//         return (
//           <div key={i}>
//           <HistotyCard 
//           name={v.name}
//           public={v.public} 
//           description={v.description}
//           create_at={v.create_at}
//           />
//           </div>
       
//         )
//   })}
//     <PageBtn/>

//     </>
//   )
// }
// // 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// // 要寫在元件的函式之外
// Index.getLayout = function (page) {
//   return <AdminLayout>{page}</AdminLayout>
// }

