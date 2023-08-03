import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AdminLayout from '@/components/layout/admin-layout'
import CustomItineraryIndex from '@/components/custom-itinerary'
import HistoryCard from '@/components/custom-itinerary/history-card'
// import PageBtn from '@/components/custom-itinerary/page-btn'

export default function ItineraryIndex() {
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  const [isPublicClicked, setIsPublicClicked] = useState(false)
  const [privateClicked, setPrivateClicked] = useState(false)
  const [filteredTripsData, setFilteredTripsData] = useState([])
  //讀取資料庫
  useEffect(() => {
    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`http://localhost:3002/custom-itinerary?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        setFilteredTripsData(data.rows)
      })
  }, [router.query])

  // 刪除行程
  const handleDelete = (itin_id) => {
    fetch(`http://localhost:3002/custom-itinerary/${itin_id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('刪除成功:', data)
      })
      .catch((error) => {
        console.error('刪除時發生錯誤:', error);
      })   
  }



  //公開行程filter
  const handlePublicTripsClick = () => {
    setIsPublicClicked(true)
    setPrivateClicked(false)
    const publicTrips = data.rows.filter((trip) => trip.public === '公開')
    setFilteredTripsData(publicTrips)
    console.log('publicTrips', publicTrips)
    const totalPages=Math.ceil(publicTrips.length/data.perPage)
    setData((prevData)=>({
      ...prevData,
      totalRows:publicTrips.length,
      totalPages:totalPages,
      page:1
    }))
    console.log('setData',setData)
  }

  //不公開行程filter
  const handlePrivateTripsClick = () => {
    setIsPublicClicked(false)
    setPrivateClicked(true)
    const privateTrips = data.rows.filter((trip) => trip.public === '不公開')
    setFilteredTripsData(privateTrips)
    console.log('privateTrips', privateTrips)
  }

  const handleAllTripsClick = () => {
    setFilteredTripsData(data.rows)
    setIsPublicClicked(false)
    setPrivateClicked(false)
    console.log('data',data)
  }

  return (
    <>
      <CustomItineraryIndex
        publicClick={handlePublicTripsClick}
        privateClick={handlePrivateTripsClick}
        allClick={handleAllTripsClick}
      />
      {/* {data.rows.map((v, i) => {
        return (
          <div key={i}>
            <HistoryCard
              coverPhoto={v.coverPhoto}
              name={v.name}
              public={v.public}
              description={v.description}
              date={v.date}
              itin_id={v.itin_id}
              onDelete={() => handleDelete(v.itin_id)}
              onChange={()=>changeLocalStorage(v.itin_id)}
            />
          </div>
        )
      })} */}
      {filteredTripsData.map((v, i) => {
        if (
          (!isPublicClicked || v.public === '公開') &&
          (!privateClicked || v.public === '不公開')
        ) {
          return (
            <div key={i}>
              <HistoryCard
                coverPhoto={v.coverPhoto}
                name={v.name}
                public={v.public}
                description={v.description}
                date={v.date}
                itin_id={v.itin_id}
                onDelete={() => handleDelete(v.itin_id)}
                onChange={() => changeLocalStorage(v.itin_id)}
              />
            </div>
          )
        } else {
          return null // 否則不顯示該行程
        }
      })}

      {/* 分頁 */}
      {/* 上一頁 */}
      <div>
        <div className="itin-card-pagination">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    new URLSearchParams(
                      parseInt(data.page) > 1
                        ? `page=${parseInt(data.page) - 1}`
                        : 'page=1'
                    ).toString()
                  }
                  aria-label="Previous"
                >
                  <span  aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              {/* 顯示頁碼 */}
              {Array(4)
                .fill(1)
                .map((v, i) => {
                  const p = data.page - 2 + i
                  const query = { ...router.query }
                  if (p < 1 || p > data.totalPages) return
                  query.page = p
                  return (
                    <li
                      className={
                        `page-item ` + (p === data.page ? 'active' : '')
                      }
                      key={p}
                    >
                      <Link
                        className="page-link"
                        href={'?' + new URLSearchParams(query).toString()}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })}
              {/* 下一頁 */}
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    new URLSearchParams(
                      parseInt(data.page) < data.totalPages
                        ? `page=${parseInt(data.page) + 1}`
                        : `page=${data.totalPages}`
                    ).toString()
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}
// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
ItineraryIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
