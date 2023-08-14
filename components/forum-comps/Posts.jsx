import Post from './Post'

export default function Posts({ posts, comments, setPosts }) {
  // console.log('')
  return (
    <div>
      {posts.map(function (post) {
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
