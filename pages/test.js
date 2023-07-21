import { useEffect, useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Products() {
  const [data,setData]=useState({
    redirect: "",
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: []
  })

  useEffect(() => {
  

    fetch(`${process.env.API_SERVER}/products`)
      .then(r=> r.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  
  return (
    <>
      <div>124</div>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}