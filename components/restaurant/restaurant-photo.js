import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './restaurant.module.css'

export default function RestaurantPhoto({ file, rid }) {
  const [restPhotos, setRestPhotos] = useState({
    redirect: '',
    totalRows: 0,
    perPage: 4,
    totalPages: 0,
    page: 1,
    rows: [],
  })
  useEffect(() => {
    // API串接
    fetch('http://localhost:3002/restphoto', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((restPhotos) => {
        setRestPhotos(restPhotos)
      })
  }, [])
  return (
    <>
      <h1>餐廳照片路徑{file}</h1>

      {/* 照片區 */}

      <div id={`carouselExampleIndicators${rid}`} className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target={`#carouselExampleIndicators${rid}`}
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleIndicators${rid}`}
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleIndicators${rid}`}
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleIndicators${rid}`}
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target={`#carouselExampleIndicators${rid}`}
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className={`carousel-item active ${styles.imgClass2}`}>
            <Image
              src={`http://localhost:3002/restImg/${file}`}
              className={`rounded-start ${styles.img1}`}
              alt="..."
              width={500}
              height={500}
              priority={true}
            />
          </div>
          {restPhotos.rows.map((v, i) => {
            {
              /* console.log(v) */
            }
            return (
              <div
                key={v.RestID}
                className={`carousel-item ${styles.imgClass2}`}
              >
                <Image
                  src={`http://localhost:3002/restImg/${v.RestImg}`}
                  className={`rounded-start ${styles.img1}`}
                  width={500}
                  height={500}
                />
                <p>{v.RestImg}</p>
              </div>
            )
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#carouselExampleIndicators${rid}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#carouselExampleIndicators${rid}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
