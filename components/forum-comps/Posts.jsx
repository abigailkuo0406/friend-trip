import Post from './Post'

export default function Posts({ posts }) {

  return (
    <div>
      {posts.map(function (post) {
        return (
          <Post
            key={post.post_id}
            id={post.post_id}
            avatarOfPostAuthor={
              post.file_url ||
              'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
            authorOfThePost={post.username}
            isLogginUserAuthorOfThePost={post.isLogginUserAuthorOfThePost}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={
              post.file_url ||
              'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            }
            // imgOfPost={post.img}
            articleOfPost={post.content}
          />
        )
      })}
    </div>
  )
}
