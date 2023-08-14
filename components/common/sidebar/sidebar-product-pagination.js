import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md'
import AuthContext from '@/context/AuthContext'

export default function SidebarProductPagination() {
  const {auth, setAuth } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 1,
    page: 1,
    rows: [],
  })
  const [keyword, setKeyword] = useState('')
  useEffect(() => {
    if(router.query.collection == undefined && router.query.buyagain == undefined){
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)
    // API串接
    fetch(`${process.env.API_SERVER}/product?${usp.toString()}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("查找全部商品：",data)
        setData(data)
      })
    } else if(router.query.collection == "true" && router.query.buyagain == undefined){
      setKeyword(router.query.keyword || '')
      const usp = new URLSearchParams(router.query)
      fetch(`${process.env.API_SERVER}/product/findCollection?${usp.toString()}`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id, keyword: router.query.keyword}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("查找收藏商品：",data)
          setData(data)
        })
    } else if(router.query.buyagain == "true" && router.query.collection == undefined){
      setKeyword(router.query.keyword || '')
      const usp = new URLSearchParams(router.query)
      fetch(`${process.env.API_SERVER}/product/findBuyagain?${usp.toString()}`, {
        method: 'POST',
        body: JSON.stringify({memberID: auth.member_id, keyword: router.query.keyword}),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
        .then((r) => r.json())
        .then((data) => {
          console.log("查找再買一次商品：",data)
          setData(data)
        })
    }

    // if(router.pathname == "/product" && router.query.page == undefined && router.query.category == undefined && router.query.order == undefined && router.query.collection == undefined && router.query.buyagain == undefined){
    //   router.push({
    //     query: {
    //       keyword: router.query.keyword,
    //       page: "1",
    //     },
    //   })
    // }

  }, [router.query])



useEffect(()=>{
  if(data.totalRows>0 && data.totalPages>1 && router.query.page !=undefined){
  if (data.page != undefined && data.totalPages != undefined) {
    if (router.query.page < 1) {
      router.push({
        query:{
          ...router.query,
          page:1
        }
      })
    } else if (router.query.page > data.totalPages ) {
      router.push({
        query:{
          ...router.query,
          page: data.totalPages,
        }
      })
    }
  }}
},[data])

// 解決將收藏點掉的跳回前一頁問題
useEffect(()=>{
  if(router.query.collection == 'true' && data.redirect!= '')
  {
    router.push({
      query:{
        ...router.query,
        page: parseInt(router.query.page-1).toString(),
        // page: "1",
      }
  })
  
  }
}, [data.redirect])

  
  return (
    <>
      <div className="card card-pagination">
        <div className="card-body">
          <ul className="pagination">
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={{
                  pathname: router.pathname != '/product' ? ("/product") : ("/product"),
                  query:{
                    ...router.query,
                    page: "1",
                  }
                }}
                scroll={false}
              >
                <MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft>
              </Link>
            </li>
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={{
                  pathname: router.pathname != '/product' ? ("/product") : ("/product"),
                  query:{
                    ...router.query,
                    page: router.query.page != undefined ? (router.query.page !== '1' ? ((parseInt(router.query.page) - 1).toString()) : (router.query.page.toString())) : ("1"),
                  }
                }}
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
                href={{
                  pathname: router.pathname != '/product' ? ("/product") : ("/product"),
                  query:{
                    ...router.query,
                    page: router.query.page != undefined ? (router.query.page != data.totalPages ? ((parseInt(router.query.page) + 1).toString()) : (router.query.page.toString())) : ("2"),
                  }
                }}
                scroll={false}
              >
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </Link>
            </li>
            <li className={`page-item`}>
              <Link
                className="page-link pagination-icon"
                href={{
                  pathname: router.pathname != '/product' ? ("/product") : ("/product"),
                  query:{
                    ...router.query,
                    page: data.totalPages,
                  }
                }}
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
