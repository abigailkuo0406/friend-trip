import Image from 'next/image'
import persona from '@/public/img/fake-data/fake-persona.png'
import { BsPeople } from 'react-icons/bs'
import { BsChatText } from 'react-icons/bs'
import { BsCalendarCheck } from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react'

import AuthContext from '@/context/AuthContext'
import memberAvatar from '@/components/common/sidebar/sidebar-member.module.css'

export default function SidebarMemberInfo() {
  const { auth, setAuth } = useContext(AuthContext)
  var newid = '' // 將 email 轉換成顯示的 id
  if (auth.email) {
    var index = auth.email.indexOf('@')
    newid = '@' + auth.email.substring(0, index)
  }
  useEffect(()=>{
    if(auth.member_id != 0){
      console.log("登入的會員資料為：", auth)
    }
  }, [auth])

  return (
    <>
      <div className="card">
        <div className="card-body d-flex">
          <div id="User-Img" className="d-flex align-items-center">
            <Image
              src={auth.images ? `http://localhost:3002/face/${auth.images}` : persona}
              // src={persona}
              width={80}
              height={80}
              className={memberAvatar.avatar}
              // style={{
              //   width: `100%`,
              //   height: `auto`,
              // }}
              alt="persona"
            ></Image>
          </div>
          <div id="User-Info">
            <div id="User-Name">
              <h3>{auth.member_name ? auth.member_name : '未登入'}</h3>
            </div>
            <div id="User-Account" className="small-font">
              <p>{newid ? newid : '@not_logined_in'}</p>
            </div>
            <div id="User-Status">
              <p id="User-Friends-Status">
                <BsPeople />
                <a>31</a>

              </p>
              <p id="User-Message-Status">
                <BsChatText />
                <a>5</a>
              </p>
              <p id="User-Trip-Status">
                <BsCalendarCheck />
                <a>10</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
