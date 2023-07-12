import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

// import A from '@/assets/rest-img/rest-img-1-c.jpg'

export default function RestaurantList(props) {
  // console.log(props.img)
  const router = useRouter()


  return (
    <>
      <div className="card mb-3 radius20px" >
        <div className="row g-0 my-3">
          <div className="col-md-3">
            <Image
              src={props.img}
              className="img-fluid rounded-start"
              width={200}
              height={200}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h2 className="card-title">{props.title}</h2>
              {/* <i class="fa-regular fa-star"></i> */}
              <p className="card-text text-truncate my-4
              " >{props.details}</p>
              <p className="card-text">

                {/* 導入動態路由網址 */}
                <button
                  type="button"
                  onClick={() => router.push('restaurant/' + props.rid)}
                >
                  訂位
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
