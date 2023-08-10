import PostWithSweetAlert from './PostWithSweetAlert'

export default function PostsWithSweet({ posts, comments }) {
  return (
    <div>
      {posts.map(function (post) {
        return (
          <PostWithSweetAlert
            key={post.post_id}
            post_id={post.post_id}
            avatarOfPostAuthor={post.images}
            authorOfThePost={post.member_name}
            dateOfPublishOfPost={post.created_at}
            imgOfPost={post.img}
            articleOfPost={post.content}
            comments={comments}
            postMember_id={post.member_id}
          />
        )
      })}
    </div>
  )
}
