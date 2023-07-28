import Post from './Post'

const mock_posts = [
  {
    id: '1',
    authorOfThePost: 'Amber',
    isLogginUserAuthorOfThePost: true,
    dateOfPublishOfPost: '2023/07/23',
    articleOfPost:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, quis? Adipisci fugiat obcaecati, quas eum animi provident commodi, corrupti, perspiciatis perferendis placeat eos aliquid a soluta earum rem assumenda quibusdam?',
    avatarOfPostAuthor:
      'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffake-persona.fa9c7bea.png&w=2048&q=75',
    imgOfPost:
      'https://images.unsplash.com/photo-1643818507403-a3ed10760d16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: '2',
    authorOfThePost: 'Peter',
    isLogginUserAuthorOfThePost: false,
    dateOfPublishOfPost: '2023/05/13',
    articleOfPost:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, illum facilis perspiciatis repellendus aut maiores recusandae mollitia vero explicabo possimus ipsa vel ad consequatur laboriosam sequi maxime at praesentium doloribus!',
    avatarOfPostAuthor:
      'https://static.skillshare.com/uploads/users/350301760/user-image-large.jpg?753816048',
    imgOfPost:
      'https://images.unsplash.com/photo-1643806720662-f9bc01be4e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
]

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
