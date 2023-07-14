import { useState } from 'react'
// import styles from './arrange-schedule.module.css'
import Image from 'next/image'
import Link from 'next/link'
import InitCard from './init-card'
import SearchView from './search-view'
import Host from '@/assets/fake-data/fake-persona.png'
import { FaRegEdit } from 'react-icons/fa'
import { LiaSave } from 'react-icons/lia'
import { FiMoreHorizontal } from 'react-icons/fi'
import { BsStarHalf,BsStarFill,BsPlusLg,BsPersonPlus } from 'react-icons/bs'
import styles from './arrange-schedule.module.scss'



export default function ScheduleSide({ onAddScenery }) {
  const handleAddSceneryClick = () => {
    onAddScenery()
  }
  return (
    <>
      <div className="itineraryContainer ">
        <div className="mapCanvas">
          {/* sidebar */}
          <div className="itinerary-fade-in">
            <div className="trip-list ">
                <div className="trip-list-header-top bg-light  position-absolute "  style={{height:700,width:320}}>
                  <div className="d-flex justify-content-end ">
                    <Link href="#">
                      <h4 className="mx-2">
                        <FaRegEdit />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4 className="mx-2">
                        <BsPersonPlus />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4 className="mx-2">
                        <LiaSave />
                      </h4>
                    </Link>
                    <Link href="#">
                      <h4 className="mx-2">
                        <FiMoreHorizontal />
                      </h4>
                    </Link>
                  </div>
                  <div className="trip-list-header-info mx-2">
                    <h4>九份 & 平溪天燈一日遊</h4>
                    <div className="d-flex mt-3">
                      <Image
                        src={Host}
                        alt="Host"
                        width={32}
                        height={32}
                        priority={true} //圖片預先載入
                      />
                      <p className="usr_name my-auto mx-2">Amber</p>
                    </div>
                  </div>
                  <div className="trip-list-day-container mx-2">
                    <div className="trip-list-day-header">
                      <div className="d-flex mt-2">
                        <h6 className="mt-1">出發時間：</h6>
                        <input type="time"></input>
                      </div>
                    </div>
                    {/* 行程card */}
                    <div className="overflow-y-auto" style={{height:520}}>
                    {Array(5)
                      .fill(1)
                      .map((v, i) => {
                        return <InitCard key={i} />
                      })}
                      <div className="mx-5">
                    <button className="mx-4 btn btn-outline-success" onClick={handleAddSceneryClick}><BsPlusLg/>新增行程</button>
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
