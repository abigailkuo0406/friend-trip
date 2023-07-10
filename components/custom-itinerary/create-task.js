import styles from './create-task.module.css'
import { FaArrowLeftLong } from 'react-icons/fa6'
import Image from 'next/image'
import Jiufen from '@/assets/fake-data/fake-jiufen.png'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'



export default function CreateTask() {
    function handleSubmit(e){
      e.preventDefault()
    const form=e.target
    const formData=new FormData(form)
  fetch('./custom-itinerary/create-task',{method:form.method,body:formData})
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
    }

  const router=useRouter()
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center">
          <Link href="/custom-itinerary">
            <h4><FaArrowLeftLong/></h4>
          </Link>
          <h3 className="mx-auto">新增行程</h3>
        </div>
        {/* 行程封面照片 */}
        <div className="d-flex flex-column mb-3">
          <label className={styles.label}>旅程封面圖片</label>
          <Image
            src={Jiufen}
            className={styles.label}
            alt="..."
            style={{ width: '45%', height: 'auto' }}
          ></Image>
        </div>
        {/* 表格 */}
        <div className={styles.formbody}>
          <div className="container ">
            <div className="mb-3">
              <label>行程名稱</label>
              <input
                type="text"
                className="form-control"
                name="initName"
                placeholder="請輸入"
              ></input>
            </div>
            <div className="mb-3">
              <label> 出發日期</label>
              <input
                type="date"
                className="form-control"
                name="date"
                placeholder="請輸入"
              />
            </div>
            <div className="mb-3">
              <label>說明</label>
              <textarea
                className="form-control"
                rows={4}
                cols={40}
                placeholder="請輸入"
                name="initDescription"
              />
            </div>
            <div className="mb-3">
              <label className="form-label ">是否需要公開</label>
              <input
                type="radio"
                className="form-check-input"
                name="public"
                value="公開"
              />
              <label className="form-check-label">公開</label>
              <input
                className="form-check-input"
                type="radio"
                name="public"
                id="public"
                value="不公開"
              />
              <label className="form-check-label">不公開</label>
            </div>
            <div className="mb-3">
              <label className="form-label">人數</label>
              <input
                type="number"
                className="form-control"
                name="initPpl"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">備註</label>
              <textarea
                className="form-control"
                rows={4}
                cols={40}
                name="initNote"
                placeholder="請輸入"
              />
            </div>
            <div className="d-flex justify-content-center  ">
              <button type="submit" className="btn btn-light mx-4">
                取消
              </button>
              <button className="btn btn-primary">
              建立</button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
