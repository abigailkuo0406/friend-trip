import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import A from '@/assets/rest-img/rest-img-1-c.jpg'

export default function RestaurantList(props) {
  // console.log(props.img)
  const router = useRouter()


  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <div className='mx-2'>
            <Image
              src={A}
              className="img-fluid rounded-start"
              alt="..."
              // width={200 + 'px'}
            />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.details}</p>
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
