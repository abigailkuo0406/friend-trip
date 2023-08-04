import Post from './Post'

export default function Posts({ posts }) {
  return (
    <div>
      {posts.map(function (post) {
        return (
          <Post
            key={post.post_id}
            id={post.post_id}
            avatarOfPostAuthor={post.img}
            authorOfThePost={post.username}
            isLogginUserAuthorOfThePost={post.isLogginUserAuthorOfThePost}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={post.img}
            articleOfPost={post.content}
          />
        )
      })}
    </div>
  )
}
