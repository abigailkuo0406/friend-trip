import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { method } from 'lodash'

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
  console.log(data)

  console.log('router.query:', router.query)
  const [keyword, setKeyword] = useState('')
  //
  useEffect(() => {
    setKeyword(router.query.keyword || '')
    const usp = new URLSearchParams(router.query)

    // API串接
    fetch('http://localhost:3002/twoBooks', {
      method: 'GET',
      
    })
      .then((r) => r.json())
      .then((d) => {
        console.log('111',d.rows)
        setData(d)
      })
  }, [])

  return (
    <>
      <Head>
        <title>abcd</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
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
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <form
              className="d-flex"
              role="search"
              onSubmit={(e) => {
                e.preventDefault()
                router.push(`?keyword=` + e.currentTarget.keyword.value)
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="keyword"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.currentTarget.value)
                }}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>書名</th>
                  <th>作者</th>
                  <th>價格</th>
                  <th>書號</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((i) => (
                  <tr key={i.sid}>
                    <td>{i.sid}</td>
                    <td>
                      <Link href={'/products/' + i.sid}> {i.bookname} </Link>
                    </td>
                    <td>{i.author}</td>
                    <td>{i.price}</td>
                    <td>{i.book_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
