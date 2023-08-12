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

    console.log('restMeal', restMeal)



    const showModal = () => setModal(true)

    const modalOpen = () => {
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
        modalChange(modal, rid, rName, rAddress, rPhone, rTime, rMeal, rClass, rIntro, rImg)

    }, [modal])



    return (
        <>
            <div className="card mb-3">
                <div className="d-flex">
                    <div className="my-3 mx-3">
                        <div className={`${styles.imgClass}`}>
                            <Image
                                src={`http://localhost:3002/restImg/${restImg}`}
                                className={`${styles.img1}`}
                                alt={restImg}
                                width={250}
                                height={250}
                                priority={true}
                            />
                        </div>
                    </div>

                    <div className="my-3">
                        <div className="card-body">
                            <div className={` d-flex align-items-center ${styles.cardHead}`}>
                                <h2 className={`card-title ${styles.cardHead}`}>{restName}</h2>
                                <p className={`ms-4 ${styles.area}`}>{restArea}</p>
                                {restMeal != null && <p className={`ms-2 ${styles.area}`}>{restMeal}</p>}

                            </div>
                            <p className={`card-text my-4 ${styles.cardText}`}>{restIntro}</p>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <Button
                            btnText='訂位'
                            onClick={modalOpen}
                            bsModle1={`#exampleModalToggle`}
                            bsModle2='modal'
                            addClassforButton={`${styles.reserveBtn}`}

                        />
                    </div>
                </div>


            </div>

        </>
    )
}
