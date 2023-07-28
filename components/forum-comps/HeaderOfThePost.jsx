import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import DeleteAndEditForThePost from './DeleteAndEditForThePost'
function HeaderOfThePost({
  avatarOfPostAuthor,
  authorOfThePost,
  isLogginUserAuthorOfThePost,
  dateOfPublishOfPost,
}) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-md-4">
        <div className="d-flex align-items-center">
          <AvatarAndNameOfPostAuthor
            avatarOfPostAuthor={avatarOfPostAuthor}
            authorOfThePost={authorOfThePost}
          />
          <DeleteAndEditForThePost
            isLogginUserAuthorOfThePost={isLogginUserAuthorOfThePost}
          />
        </div>
        <time className="mb-0">{dateOfPublishOfPost}</time>
      </div>
    </div>
  )
}

export default HeaderOfThePost
