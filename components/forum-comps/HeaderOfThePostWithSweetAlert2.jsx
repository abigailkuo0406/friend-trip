import AvatarAndNameOfPostAuthor from './AvatarAndNameOfPostAuthor'
import moment from 'moment/moment'

function HeaderOfThePost({
  avatarOfPostAuthor,
  authorOfThePost,
  dateOfPublishOfPost,
}) {
  const rawDateOfPublishOfPost = dateOfPublishOfPost
  const formattedDate = moment(rawDateOfPublishOfPost).format('YYYY-MM-DD')
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center my-md-4">
        <div className="d-flex align-items-center">
          <AvatarAndNameOfPostAuthor
            avatarOfPostAuthor={avatarOfPostAuthor}
            authorOfThePost={authorOfThePost}
          />
        </div>
        <time className="mb-0">發文時間：{formattedDate}</time>
      </div>
    </div>
  )
}

export default HeaderOfThePost
