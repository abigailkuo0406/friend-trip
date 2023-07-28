import Image from 'next/image'

function ImgForThePost({ imgSrc }) {
  return (
    <div className="w-50">
      <Image
        alt="img_for_post"
        src={imgSrc}
        width={200}
        height={200}
        className="img-fluid w-100"
      />
    </div>
  )
}

export default ImgForThePost
