import AuthContext from '@/context/AuthContext'
import React, { useContext, useRef, useState } from 'react'
import AvatarOfLoggedInUser from './AvatarOfLoggedInUser'
import axios from 'axios'

function AddComment({ post_id, comments }) {
  const { auth, setAuth } = useContext(AuthContext)
  // console.log(auth)
  const [data, setData] = useState([])
  const msgRef = useRef(null)
  const keyUpHandler = (event) => {
    if (event.which === 13) handleSendMsg()
    //setData([...data, event.target.value])
  }
  const handleSendMsg = () => {
    sendMsg(msgRef.current.value)
    setData([...data, msgRef.current.value])
  }

  function sendMsg(data) {
    axios
      .post('http://localhost:3002/add-a-new-comment/add-a-comment', {
        leaveMsg: data,
        member_id: auth.member_id,
        post_id: post_id,
      })
      .then((d) => {
        // console.log(d)
        msgRef.current.value = ''
        // 👇這個指令是重刷頁面，如果需要重刷頁面號碼才有反應，可以用這個方式
        // window.location.reload()
        // ☝️這個指令是重刷頁面，如果需要重刷頁面號碼才有反應，可以用這個方式
      })

      .catch((err) => console.log(err))
  }

  return (
    <div className="d-flex">
      <AvatarOfLoggedInUser />
      <input
        type="text"
        ref={msgRef}
        onKeyUp={keyUpHandler}
        placeholder="發表意見..."
        className="input-text input-width-70pa"
      />
      <button className="btn btn-dark mx-1" onClick={handleSendMsg}>
        發表
      </button>
    </div>
  )
}

export default AddComment
