import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import AdminLayout from '@/components/layout/admin-layout'
import CustomItineraryIndex from '@/components/custom-itinerary'
import HistoryCard from '@/components/custom-itinerary/history-card'
import AuthContext from '@/context/AuthContext'
// import PageBtn from '@/components/custom-itinerary/page-btn'

export default function ItineraryIndex () {
  //取得登入之會員資料
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  const [filterCondition,setFilterCondition]=useState('') //控制分頁

  //讀取資料庫
  useEffect(() => {

    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`http://localhost:3002/custom-itinerary?${usp.toString()}&member_id=${auth.member_id}&filtercondition=${filterCondition}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        console.log('data==>',data)
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
        console.error('刪除時發生錯誤:', error)
      })
  }

  //公開行程filter
  const handlePublicTripsClick = () => {
    setFilterCondition('public')
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1 }, // 設定 page 為 1
    });
  }


  //不公開行程filter
  const handlePrivateTripsClick = () => {
    setFilterCondition('private')
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1 }, // 設定 page 為 1
    });
  }

  const handleAllTripsClick = () => {
    setFilterCondition('')
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1 }, // 設定 page 為 1
    });
  }

  const handleJoinClick = () => {
    setFilterCondition('join')
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1 }, // 設定 page 為 1
    });
  }



  return (
    <>
      <CustomItineraryIndex
        privateClick={handlePrivateTripsClick}
        publicClick={handlePublicTripsClick}
        allClick={handleAllTripsClick}
        joinCick={handleJoinClick}
      />

      {data.rows.map((v, i) => {
        return (
          <div key={i}>
            <HistoryCard
              coverPhoto={v.coverPhoto}
              name={v.name}
              public={v.public}
              description={v.description}
              date={v.date}
              itin_id={v.itin_id}
              member_id={v.itin_member_id}
              filterCondition={filterCondition}
              onDelete={() => handleDelete(v.itin_id)}
              onChange={() => changeLocalStorage(v.itin_id)}
            />
          </div>
        )
      })}
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
                  <span aria-hidden="true">&laquo;</span>
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
