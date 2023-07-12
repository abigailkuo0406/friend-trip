import { useState } from 'react'
import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InitCard from './init-card'
import SearchView from './search-view'
import Host from '@/assets/fake-data/fake-persona.png'
import { FaRegEdit } from 'react-icons/fa'
import { BsPersonPlus } from 'react-icons/bs'
import { LiaSave } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsStarFill } from 'react-icons/bs'
import { BsStarHalf } from 'react-icons/bs'
import { BsPlusLg } from 'react-icons/bs'

export default function ScheduleSide() {
  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas">
          {/* sidebar */}
          <div className="itinerary-fade-in">
            <div className="trip-list ">
              <div className="">
                <div className="trip-list-header-top bg-light  position-absolute">
                  <div className="d-flex">
                    <Link href="#">
                      <h4>
                        <FaRegEdit />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4>
                        <BsPersonPlus />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4>
                        <LiaSave />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4>
                        <FiMoreHorizontal />
                      </h4>
                    </Link>
                  </div>
                  <div className="trip-list-header-info">
                    <h4>九份 & 平溪天燈一日遊</h4>
                    <div className="d-flex mt-3">
                      <Image
                        src={Host}
                        alt="user"
                        width={32}
                        height={32}
                        priority={true} //圖片預先載入
                      />
                      <p className="usr_name my-auto mx-2">Amber</p>
                    </div>
                  </div>
                  <div className="trip-list-day-container ">
                    <div className="trip-list-day-header">
                      <div className="d-flex mt-2">
                        <h6 className="mt-1">出發時間：</h6>
                        <p>8:00</p>
                      </div>
                    </div>
                    {/* 行程card */}
                    <div className="overflow-y-auto" style={{height:520}}>
                    {Array(3)
                      .fill(1)
                      .map((v, i) => {
                        return <InitCard key={i} />
                      })}
                      <div className="bg-info">
                    <button className="mx-4">＋新增行程</button>
                    </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
