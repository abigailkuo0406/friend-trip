import { useEffect, useState } from 'react'
import CustomItineraryIndex from '@/components/custom-itinerary'
import HistotyCard from '@/components/custom-itinerary/histoty-card'
import AdminLayout from '@/components/layout/admin-layout'
import data from '@/data/custom-itinerary/itinerary.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import PageBtn from '@/components/custom-itinerary/page-btn'

export default function ItineraryIndex() {
  
  const router = useRouter()
  // console.log(router)
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 5,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  //讀取資料庫
  useEffect(() => {
    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`http://localhost:3002/custom-itinerary?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log('data======', data)
        setData(data)
        // console.log(' setData(data)=====', setData(data))
      })
  }, [router.query])


  // 刪除行程
  const handleDelete = (itin_id) => {
    fetch(`http://localhost:3002/custom-itinerary/${itin_id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('刪除成功:', data);
        // router.push(`/member/itinerary/${itin_id}`)
        window.location.reload();
      })
      .catch((error) => {
        console.error('刪除時發生錯誤:', error);
      },[router.query]);
  };



  

  return (
    <>
      <CustomItineraryIndex />
      {data.rows.map((v, i) => {
        return (
          <div key={i}>
            <HistotyCard
              coverPhoto={v.coverPhoto}
              name={v.name}
              public={v.public}
              description={v.description}
              date={v.date}
              itin_id={v.itin_id}
              onDelete={() => handleDelete(v.itin_id)} 
            />
          </div>
        )
      })}

      {/* 分頁 */}
      {/* 上一頁 */}
      <div className="row">
        <div className="col">
          <nav aria-label="Page navigation example">
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
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              {/* 顯示頁碼 */}
              {Array(5)
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
