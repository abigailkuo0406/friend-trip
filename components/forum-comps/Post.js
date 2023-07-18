import Image from 'next/image'
import styles from './Post.module.css'
import { BsEmojiKiss, BsEmojiSmileFill } from 'react-icons/bs'
export default function Post({ img, userImg, caption, username, id }) {
  return (
    <>
      <div className="bg-light mt-4 p-5 rounded-5">
        <div className="">
          {/* 垃圾桶(刪除)、寫字（編輯） SVG 圖標 開始*/}
          <div className="d-flex column-gap-3">
            {/* 垃圾桶(刪除) SVG  */}
            <svg
              className={styles.trash}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
            {/* 寫字（編輯） SVG  */}
            <svg
              className={styles.pencilSquare}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
          {/* 垃圾桶(刪除)、寫字（編輯） SVG 圖標 結束*/}
        </div>
        {/* 文章作者頭圖 + 作者名字*/}
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            {/* 作者頭圖 */}
            <Image
              width={50}
              height={50}
              src={userImg}
              className="img-responsive rounded-circle img-thumbnail "
              alt={username}
            />
            {/* 作者名字 */}
            <p>{username}</p>
          </div>
          <p>發文日期:xxxx/xx/xx</p>
        </div>

        {/* 文章圖片 */}
        <Image
          width={100}
          height={100}
          src={img}
          className="w-50 img-fluid  "
          // className="w-50 img-fluid my-md-2 object-fit-scale"
          alt=""
        />
        {/* 作者名稱 文章標題 */}
        {/* <div className="d-flex column-gap-3">
          <div className="fw-bold">{username}</div>
          <div>{caption}</div>
        </div> */}
        {/* 文章主體 */}
        <p className="my-md-4">
          accusantium ea. Non ex repudiandae veniam voluptatem saepe cumque
          eveniet iste. Fugit repellat soluta doloremque? Necessitatibus unde
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          atque accusantium nostrum magnam suscipit, doloremque voluptate omnis
        </p>
        {/* 點讚、評論區 */}
        {/* 愛心(收藏)、聊天 SVG 圖標 */}
        <div className="">
          <div className="d-flex column-gap-4">
            {/* 愛心 SVG (點擊加到我的收藏)  */}
            <svg
              className={styles.heart}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            {/* 聊天 SVG （點擊進行留言） */}
            <svg
              className={styles.chat}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-dots"
              viewBox="0 0 16 16"
            >
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </div>
        </div>
        {/* 文章評論區 */}
        <p className="d-flex column-gap-3 mt-md-2">
          <span className="fw-bold">{username}</span>
          {caption}
        </p>
        {/* 留言區 */}
        <form className="d-flex column-gap-3">
          {/* react-icon Emoji */}
          <BsEmojiKiss />
          {/* 評論輸入框 */}
          <input
            className="border rounded-4 col-9 form-control-lg"
            type="text"
            placeholder="說說你的看法..."
          />
          <button>發表評論</button>
        </form>
      </div>
    </>
  )
}
