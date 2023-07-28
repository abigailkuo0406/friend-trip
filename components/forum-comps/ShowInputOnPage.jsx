import { useState, useRef } from 'react'
import styles from './ShowInputOnPage.module.css'
import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import axios from 'axios'

// TODO 把信息顯示和新增信息分開！！！
function ShowInputOnPage({ sendMsg }) {
  //avatarOfPostAuthor from database
  const avatarOfPostAuthor =
    'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake-persona.fa9c7bea.png&w=2048&q=75'
  //avatarOfPostAuthor from database
  const [data, setData] = useState(['asdfasdf', 'asdfafsd'])
  const msgRef = useRef(null)
  const changeHandler = (evnt) => {
    // setName(evnt.target.value)
  }
  const keyUpHandler = (evnt) => {
    if (evnt.which === 13) setData([...data, evnt.target.value])
  }
  function handleSendMsg() {
    sendMsg(msgRef.current.value)

    setData([...data, msgRef.current.value])
  }
  return (
    <>
      <ul className={styles.listStyle}>
        {data.map((item) => {
          return (
            <>
              <li className="d-flex">
                <AvatarAndNameOfPostAuthor
                  avatarOfPostAuthor={avatarOfPostAuthor}
                  authorOfThePost
                />
                {item}
              </li>
            </>
          )
        })}
      </ul>
      <div className="d-flex">
        <p>🗣️</p>
        <input
          type="text"
          ref={msgRef}
          onKeyUp={keyUpHandler}
          onChange={changeHandler}
          placeholder="說說你的看法..."
        />
        <button onClick={handleSendMsg}>發表看法</button>
      </div>
      {/* <span>{name}</span> */}
    </>
  )
}

export default ShowInputOnPage
