import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import fakeIimg1 from '@/public/img/fake-data/fake-img-1.jpg'

export default function TableCart({ id = '' }) {
  return (
    <>
      <tr>
        <td>
          <Image
            src={fakeIimg1}
            className="card-img-top productCardImg"
          ></Image>
        </td>
        <td>test2</td>
        <td>test3</td>
      </tr>
    </>
  )
}
