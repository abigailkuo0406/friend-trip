import Post from './Post'

export default function Posts({ posts, comments, setPosts }) {
  return (
    <div>
      {posts.map(function (post) {
        {/* 如果登入者尚未發文過，顯示 “您還沒有發過文，新增文章吧！” */ }
        return (
          <Post
            key={post.post_id}
            post_id={post.post_id}
            avatarOfPostAuthor={post.images}
            authorOfThePost={post.member_name}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={post.img}
            articleOfPost={post.content}
            comments={comments}
            postMember_id={post.member_id}
            setPosts={setPosts}
          />
        )
      })}
    </div>
  )
}
