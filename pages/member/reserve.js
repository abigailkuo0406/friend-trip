import React, { useEffect, useState } from 'react'
import AdminLayout from '@/components/layout/admin-layout'
import ReserveItem from '@/components/reserve/reserve-item'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Reserve() {

    const router = useRouter()

    const [reserve, setReserve] = useState({
        redirect: '',
        totalRows: 0,
        perPage: 4,
        totalPages: 0,
        page: 1,
        rows: [],
    })

    useEffect(() => {
        const usp = new URLSearchParams(router.query)
        //取得訂位資料
        fetch(`http://localhost:3002/reserve?${usp.toString()}`, {
            method: 'GET'
        })
            .then((r) => r.json())
            .then((reserveDetails) => {
                setReserve(reserveDetails)

            })
    }, [router.query])



    return (
        <>
            {reserve.totalRows > 0 ?
                reserve.rows.map((v, i) => {
                    return (
                        <div key={v.reserve_id}>
                            <ReserveItem
                                reserveId={v.reserveId}
                                restId={v.rest_id}
                                restName={v.RestName}
                                restImg={v.RestImg}
                                reserveDate={v.reserve_date}
                                reserveTime={v.reserve_time}
                                reservePeopleNum={v.reserve_people}
                            />

                        </div>
                    )
                }) :
                <p>無符合條件之餐廳</p>
            }

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <Link
                            className="page-link"
                            href={"?" + new URLSearchParams('page=1').toString()}
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">&laquo;</span>

                        </Link>

                    </li>
                    <li class="page-item">
                        <Link
                            className="page-link"
                            href={"?" +
                                new URLSearchParams(parseInt(reserve.page) > 1
                                    ?
                                    `page=${parseInt(reserve.page) - 1}`
                                    :
                                    'page=1').toString()}
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">前一頁</span>

                        </Link>

                    </li>

                    {Array(5)
                        .fill(1)
                        .map((v, i) => {
                            const p = reserve.page - 2 + i;
                            const query = { ...router.query };
                            if (p < 1 || p > reserve.totalPages) return;
                            query.page = p;
                            return (
                                <li
                                    className={
                                        `page-item ` + (p === reserve.page ? "active" : "")
                                    }
                                    key={p}
                                >
                                    <Link
                                        className="page-link"
                                        href={"?" + new URLSearchParams(query).toString()}
                                    >
                                        {p}
                                    </Link>
                                </li>
                            );
                        })}
                    <li class="page-item">
                        <Link
                            className="page-link"
                            href={"?" +
                                new URLSearchParams(parseInt(reserve.page) < reserve.totalPages
                                    ?
                                    `page=${parseInt(reserve.page) + 1}`
                                    :
                                    `page=${reserve.totalPages}`).toString()}
                            aria-label="Previous"
                        >
                            <span aria-hidden="true">下一頁</span>

                        </Link>

                    </li>
                    <li class="page-item">
                        <Link
                            className="page-link"
                            href={"?" + new URLSearchParams(`page=${reserve.totalPages}`).toString()}
                            aria-label="Next"
                        >
                            <span aria-hidden="true">&raquo;</span>

                        </Link>

                    </li>
                </ul>
            </nav>
        </>
    )
}
Reserve.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}
