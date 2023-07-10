import React from 'react'
// import Image from 'next/image'

// import Img from '@/data/restaurant/rest-img.json'
// import restaurant from '@/data/restaurant/rest-detail.json'

export default function Restaurant(props) {
    console.log(props)
    return (
        <>
            <h2>
                這間餐廳是{props.name}
            </h2>
        </>
    )
}
