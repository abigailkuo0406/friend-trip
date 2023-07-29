import Post from './Post'


export default function Posts({ posts }) {
  // useEffect,,,,,,

  return (
    <div>
      {posts.map(function (post) {
        return (
          <Post
            key={post.post_id}
            id={post.post_id}
            avatarOfPostAuthor={post.file_url}
            authorOfThePost={post.username}
            isLogginUserAuthorOfThePost={post.isLogginUserAuthorOfThePost}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={post.file_url}
            articleOfPost={post.content}
          />
        )
      })}
    </div>
  )
}
