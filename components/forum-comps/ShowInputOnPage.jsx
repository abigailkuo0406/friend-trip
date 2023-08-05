import { useState, useRef, useContext } from 'react'
import styles from './ShowInputOnPage.module.css'
import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import axios from 'axios'
import AuthContext from '@/context/AuthContext'

// TODO 把信息顯示和新增信息分開！！！
function ShowInputOnPage({ sendMsg, comments, post_id }) {
  const { auth, setAuth } = useContext(AuthContext)
  const avatarOfPostAuthor = '/face/face23.png'
  //avatarOfPostAuthor from database
  const [data, setData] = useState([])
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
        {comments
          .filter((i) => i.post_id == post_id)
          .map((item) => {
            return (
              <>
                <li className="d-flex">
                  <AvatarAndNameOfPostAuthor
                    avatarOfPostAuthor={
                      'http://localhost:3002/face/' + item.images
                    }
                    authorOfThePost
                  />
                  {item.content}
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
    </>
  )
}

export default ShowInputOnPage
