import React, { useState, useEffect, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'

export default function SidebarProductPagination() {
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  const [currentPage, setCurrentPage] = useState(data.page)
  const [keyword, setKeyword] = useState('')
  const [lastPage, setLastPage] = useState()
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch(`${process.env.API_SERVER}/product?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
    setCurrentPage(router.query.page)
    setLastPage(data.totalPages.toString())
    console.log('xxx', data.totalPages)
    if (router.query.page > data.totalPages) {
      // alert('?page=' + theLastPage)
      // router.push('?page=' + theLastPage.toString())
    }
  }, [router.query])

  console.log('現在的page1：', currentPage)
  console.log('現在的page2：', lastPage)
  const theLastPage = lastPage

  console.log('現在的page3：', theLastPage)
  if (data.page == undefined) {
  } else if (router.query.page < 1) {
    router.push('?page=1')
  } //else if (router.query.page > lastPage) {
  //   alert('?page=' + theLastPage)
  //   // router.push('?page=' + theLastPage.toString())
  // }

  return (
    <>
      <div className="card card-pagination">
        <div className="card-body">
          <ul className="pagination">
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={
                  router.query.page !== '1'
                    ? '?page=' + (router.query.page - 1).toString()
                    : '?page=' + router.query.page.toString()
                }
                scroll={false}
              >
                <MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft>
              </Link>
            </li>
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={
                  router.query.page !== '1'
                    ? '?page=' + (router.query.page - 1).toString()
                    : '?page=' + router.query.page.toString()
                }
                scroll={false}
              >
                <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
              </Link>
            </li>
            {Array(5)
              .fill(1)
              .map((v, i) => {
                const p = data.page - 2 + i
                const query = { ...router.query }
                if (p < 1 || p > data.totalPages) return
                query.page = p
                return (
                  <li
                    className={`page-item ` + (p === data.page ? 'active' : '')}
                    key={p}
                  >
                    <Link
                      className="page-link"
                      href={'?' + new URLSearchParams(query).toString()}
                      scroll={false}
                    >
                      {p}
                    </Link>
                  </li>
                )
              })}
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={
                  router.query.page != data.totalPages
                    ? '?page=' + (parseInt(router.query.page) + 1).toString()
                    : '?page=' + router.query.page.toString()
                }
                scroll={false}
              >
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </Link>
            </li>
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={
                  router.query.page != data.totalPages
                    ? '?page=' + (parseInt(router.query.page) + 1).toString()
                    : '?page=' + router.query.page.toString()
                }
                scroll={false}
              >
                <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
