import Image from 'next/image'
import persona from '@/assets/fake-data/fake-persona.png'
import { BsPeople } from 'react-icons/bs'
import { BsChatText } from 'react-icons/bs'
import { BsCalendarCheck } from 'react-icons/bs'
export default function SidebarMemberInfo() {
  return (
    <>
      <div className="card">
        <div className="card-body d-flex">
          <div id="User-Img" className="d-flex align-items-center pe-3">
            <Image
              src={persona}
              style={{
                width: `100%`,
                height: `auto`,
              }}
            ></Image>
          </div>
          <div id="User-Info">
            <div id="User-Name">
              <h3>Amber</h3>
            </div>
            <div id="User-Account" className="small-font">
              <p>＠bigboss7788123</p>
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
