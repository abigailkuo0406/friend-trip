import { useEffect, useState, useContext } from "react"
import io from "socket.io-client"
import AdminLayout from '@/components/layout/admin-layout'
import InputText from '@/components/common/input/input-text'
import AuthContext from '@/context/AuthContext'



export default function Chatroom() {
    const { auth } = useContext(AuthContext)
    console.log('11', auth)
    const [inputValue3, setInputValue3] = useState('')
    const [inputName3, setInputName3] = useState('')

    const [chatTexts, setChatTexts] = useState([])
    const [chatText, setChatText] = useState('')


    console.log('chatText', chatText)
    console.log('歷史對話', chatTexts)

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
    }



    return (
        <>
            <p>聊天室</p>
            <InputText
                id="ID3"
                name="chat"
                label="問題3yyyyy"
                value="hhhh" // 預設文字
                placeholder="測試3"
                width="input-width-100pa" // 調整 <input> 寬度，到 style.sass 挑選適合的 input-width 前綴 class 或自行新增
                addClassforLabel="classTest1" // 如果要在 label 添加 class
                addClassforInput="classTest2 colorred" // 如果要在 input 添加 class
                getValue={setInputValue3} // 獲取填寫的數值
                getName={setInputName3} // 獲取 name
                required={true}
            />
            <button onClick={send}>傳送</button>
            <div>
                {/* <p>{chatText}</p> */}
                {chatTexts.map((c, i) => {
                    return (
                        <div key={i}>
                            <p>{c.userName}</p>
                            <p>{c.message}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

Chatroom.getLayout = function (page) {
    return <AdminLayout>{page}</AdminLayout>
}

