import React from 'react'
import Image from 'next/image'


export default function Invite(props) {
    return (

        <>
                <li>
                    {/* <Image
                        src={}
                    /> */}
                    <p>{props.name}</p>
                    <button>邀請</button>
                </li>


        </>

    )

}