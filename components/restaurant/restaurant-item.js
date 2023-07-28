import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './restaurant.module.css'
import Button from '@/components/common/button/btn-normal'
import Modal from '@/components/restaurant/restaurant-intro'



export default function ListItem({
    restName,
    restPhone,
    restAddress,
    restTime,
    restIntro,
    restClass,
    restMeal,
    restImg,
    restRid,
    restArea,
    modalChange
}) {
    const [modal, setModal] = useState(false)
    const [rid, setRid] = useState()
    const [rName, setRName] = useState()
    const [rAddress, setRAdress] = useState()
    const [rPhone, setRPhone] = useState()
    const [rTime, setRTime] = useState()
    const [rMeal, setRMeal] = useState()
    const [rClass, setRClass] = useState()
    const [rIntro, setRIntro] = useState()
    const [rImg, setRImg] = useState()




    const showModal = () => setModal(true)

    const modalOpen = () => {
        console.log('第二層:', restRid)
        console.log('modal開')
        showModal()
        setRid(restRid)
        setRName(restName)
        setRAdress(restAddress)
        setRPhone(restPhone)
        setRTime(restTime)
        setRMeal(restMeal)
        setRClass(restClass)
        setRIntro(restIntro)
        setRImg(restImg)

    }

    useEffect(() => {
        // console.log('傳上去的rid', rid)
        modalChange(modal, rid, rName, rAddress, rPhone, rTime, rMeal, rClass, rIntro,rImg)

    }, [modal])
   


    return (
        <>
            <div className="card mb-3 radius20px">
                <div className="row g-0 my-3">
                    <div className="col-md-3">
                        <div className={styles.imgClass}>
                            <Image
                                src={`http://localhost:3002/restImg/${restImg}`}
                                className={`rounded ms-2 ${styles.img1}`}
                                width={200}
                                height={200}
                                priority={true}
                            />
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card-body">
                            <div className='d-flex'>
                                <h2 className="card-title">{restName}</h2>
                                <p className='ms-3'>{restArea}</p>
                            </div>


                            <p className="card-text text-truncate my-4">{restIntro}</p>
                            <Button
                                btnText='訂位'
                                onClick={modalOpen}
                                bsModle1={`#exampleModalToggle`}
                                bsModle2='modal'
                            />
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
