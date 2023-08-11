import Image from 'next/image'

function ImgForThePost({ imgSrc = '' }) {
  return (
    <div className="w-100 position-relative">
      {imgSrc && (
        <Image
          className="position-static"
          alt="img_for_post"
          src={imgSrc}
          fill
        />
      )}
    </div>
  )
}

export default ImgForThePost
