import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import styles from './restaurant.module.css'

export default function RestaurantPhoto({ file, rid }) {
  const [restPhotos, setRestPhotos] = useState([])

  useEffect(() => {
    // API串接
    fetch('http://localhost:3002/restphoto', {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((photos) => {
        const restphotos = photos.rows.filter((photo) => {
          return photo.RestID == rid
        })
        setRestPhotos(restphotos)
      })
  }, [rid])

  return (
    <>
{/* 
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
          {restPhotos != []
            ? restPhotos.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`carousel-item ${styles.imgClass2} ${
                      i == 0 ? 'active' : ''
                    }`}
                  >
                    <Image
                      src={`http://localhost:3002/restImg/${v.RestImg}`}
                      className={`${styles.img1}`}
                      alt={v.RestImg}
                      width={500}
                      height={500}
                    />
                  </div>
                )
              })
            : ''}
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
      </div> */}

      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {restPhotos != []
            ? restPhotos.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={`carousel-item ${styles.imgClass2} ${
                      i == 0 ? 'active' : ''
                    } data-bs-interval=${300}`}
                  >
                    <Image
                      src={`http://localhost:3002/restImg/${v.RestImg}`}
                      className={`${styles.img1}`}
                      alt={v.RestImg}
                      width={500}
                      height={500}
                    />
                  </div>
                )
              })
            : ''}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
