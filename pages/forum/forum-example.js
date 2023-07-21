import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { method } from 'lodash'
import NavBar from '@/components/forum-comps/NavBar'
import Posts from '@/components/forum-comps/Posts'

export default function Products() {
  const router = useRouter()
  console.log(router)
  const [data, setData] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })

  console.log('router.query:', router.query)
  const [keyword, setKeyword] = useState('')
  //
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch('http://localhost:3002/forum', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  console.log(data)

  return (
    <>
      <Head>
        <title>論壇連接測試頁</title>
      </Head>
      <div className="container">
        <NavBar />
        <Posts />
      </div>
    </>
  )
}
