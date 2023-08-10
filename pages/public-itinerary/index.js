import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PublicScheduleIndex from '@/components/public-itinerary/public-card'
import styles from '@/components/public-itinerary/public-init.module.css'
import SortBoard from '@/components/public-itinerary/sort-board'
import AdminLayout from '@/components/layout/admin-layout'
import data from '@/data/custom-itinerary/itinerary.json'
import AuthContext from '@/context/AuthContext'
import { MdNavigateNext, MdNavigateBefore,MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft } from 'react-icons/md'
// import PageBtn from '@/components/custom-itinerary/page-btn'

export default function PublicSchedule () {
  const { auth } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 6,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  //讀取資料庫
  useEffect(() => {
    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`http://localhost:3002/public-itinerary?${usp.toString()}&member_id=${auth.member_id}`)
      .then((r) => r.json())
      .then((data) => {
        setData(data)
        // console.log('public data',data)
      })
  }, [router.query])


  return (
    <>
      <div className="d-flex mb-2 ">
        <h1 className={`mb-3 mx-5 ${styles.spnaName}`}>公開行程</h1>
      </div>
      <div className="d-flex flex-wrap mx-4">
        {data.rows.map((v, i) => {
          return (
            <div key={i}>
              <PublicScheduleIndex
              coverPhoto={v.coverPhoto}
              name={v.name}
              public={v.public}
              description={v.description}
              date={v.date}
              itin_id={v.itin_id}
              itin_member_id={v.itin_member_id}
              member_name={v.member_name}
              member_images={v.images}
              onChange={()=>changeSelectLocalStorage(v.itin_id)}              
              />
            </div>
          )
        })}
      </div>
      {/* <PageBtn/> */}
      <div>
        <div className="itin-card-pagination mx-5 px-5">
          <nav aria-label="Page navigation">
            <ul className="pagination">
            <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    new URLSearchParams(
                      'page=1').toString()
                  }
                  aria-label="Previous"
                >
                  <span aria-hidden="true"><MdKeyboardDoubleArrowLeft/></span>
                </Link>
              </li>
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
                  <span aria-hidden="true"><MdNavigateBefore /></span>
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
                  <span aria-hidden="true"><MdNavigateNext/></span>
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  href={
                    '?' +
                    new URLSearchParams(`page=${data.totalPages}`).toString()
                  }
                  aria-label="Next"
                >
                  <span aria-hidden="true"><MdKeyboardDoubleArrowRight/></span>
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
PublicSchedule.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
