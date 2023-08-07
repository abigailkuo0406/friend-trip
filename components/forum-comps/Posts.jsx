import Post from './Post'

export default function Posts({ posts, comments }) {
  return (
    <div>
      {posts.map(function (post) {
        return (
          <Post
            key={post.post_id}
            post_id={post.post_id}
            avatarOfPostAuthor={post.images}
            authorOfThePost={post.username}
            isLogginUserAuthorOfThePost={post.isLogginUserAuthorOfThePost}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={post.img}
            articleOfPost={post.content}
            comments={comments}
          />
        )
      })}
    </div>
  )
}
