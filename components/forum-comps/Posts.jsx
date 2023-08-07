import Post from './Post'
{/* <Image src="https://example.com/path/to/face1.png" alt="Face 1" /> */}
// http://localhost:3002/forum_pics/brownBlv.jpg

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
