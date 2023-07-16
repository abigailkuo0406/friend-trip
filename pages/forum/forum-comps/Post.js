export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div>
      {/* Post Header */}
      <div className="flex">
        <img src={userImg} alt={username} />
        <p>{username}</p>
      </div>

      {/* Post Image */}
      <img src={img} alt="" />

      {/* Post Buttons */}
      <div className="">
        <div className="">
          <HeartIcon />
        </div>
      </div>
    </div>
  )
}
