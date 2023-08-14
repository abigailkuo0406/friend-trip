import { useEffect, useState, useContext } from "react"
import io from "socket.io-client"
import AdminLayout from '@/components/layout/admin-layout'
import InputText from '@/components/common/input/input-text'
import AuthContext from '@/context/AuthContext'
import styles from './chatroom.module.css'
import BtnNormal from "@/components/common/button/btn-normal"
import Image from "next/image"


export default function Chatroom() {
    const { auth } = useContext(AuthContext)
    console.log('auth_name', auth)
    const [inputValue3, setInputValue3] = useState('')
    const [inputName3, setInputName3] = useState('')

    const [chatTexts, setChatTexts] = useState([])
    const [chatText, setChatText] = useState('')

    const [text, setText] = useState('');
    console.log('text', text, 'pppp')

    const handleChange = event => {
        setText(event.target.value);
    };



    // console.log('chatText', chatText)
    // console.log('歷史對話', chatTexts)

    useEffect(() => {
        if (chatText == '') return

        chatText.userName != '' && setChatTexts([...chatTexts, chatText])

    }, [chatText])

    useEffect(() => {
        const socket = io("http://localhost:3002", {
            transports: ["websocket"]
        })


        // 發送一個sendMessage事件
        socket.emit("sendMessage",
            {
                userName: auth.member_name,
                userImg: auth.images,
                message: inputValue3,

            })

        // // 監聽來自server的allMessager事件
        // socket.on("allMessage", (m) => {
        //     console.log("allMessage", m)
        //     // setChatTexts(m)

        // })

        // 監聽來自server的NewMessager事件
        socket.on("newMessage", (m) => {
            console.log("newMessage", m)
            setChatText(m)

        })
    }, [])

    const send = () => {
        const socket = io("http://localhost:3002", {
            transports: ["websocket"]
        })


        // 發送一個sendMessage事件
        socket.emit("sendMessage",
            {
                userName: auth.member_name,
                userImg: auth.images,
                message: inputValue3,

            })

        // 監聽來自server的allMessager事件
        // socket.on("allMessage", (m) => {
        //     console.log("allMessage", m)
        //     // setChatTexts(m)

        // })

        // 監聽來自server的NewMessager事件
        socket.on("newMessage", (m) => {
            console.log("newMessage", m)
            setChatText(m)
        })

        setText(' ')
        text == ' ' && setText('\u00A0')


    }



    return (
        <>
            {/* <p>聊天室</p> */}
            <div className="container d-flex justify-content-center">
                <div className={`p-3 ${styles.dialogue} scrollbar-A`}>
                    {/* <p>{chatText}</p> */}
                    {chatTexts.map((c, i) => {
                        return (
                            c.userName == auth.member_name ?

                                <div key={i} className={`ms-3 py-2 mb-2 d-flex justify-content-end align-items-center`}>

                                    {/* <p className="restLabel me-4">{c.userName}</p> */}
                                    <p className={`restLabel me-2 px-4 py-1 rounded ${styles.text}`}>{c.message}</p>

                                </div>

                                :
                                <div key={i} className={`ms-3 py-2 mb-2 d-flex align-items-center`}>
                                    <Image
                                        src={`http://localhost:3002/face/${c.userImg}`}
                                        className={`${styles.avatar} me-3`}
                                        alt="大頭貼"
                                        width={20}
                                        height={20}
                                    />
                                    {/* <p className="restLabel me-4">{c.userName}</p> */}
                                    <p className={`restLabel me-2 px-4 py-1 rounded ${styles.text}`} >{c.message}</p>
                                </div>
                        )
                    })}
                </div>

            </div>
            <div className={`d-flex align-items-center justify-content-center`}>
                <InputText
                    id="message"
                    name="message"
                    label=""
                    value={text} // 預設文字
                    placeholder=""
                    width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                    addClassforLabel="classTest1" // 如果要在 label 添加 class
                    addClassforInput="classTest2 colorred" // 如果要在 input 添加 class
                    getValue={setInputValue3} // 獲取填寫的數值
                    getName={setInputName3} // 獲取 name
                    // required={true}
                    onChange={handleChange}
                />
                <BtnNormal
                    btnText="送出"
                    // type=""
                    onClick={send}
                />


            </div>


        </>
    )
}

Chatroom.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}

