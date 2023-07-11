'use client'
 
import Image from 'next/image'
 
const imageLoader = ({ src='src', width='width', heigh='heigh',quality ,text='text'}) => {
  return `https://example.com/${src}?w=${width}&h=${width}&q=${quality || 75}`
}
 
export default function Page() {
  return (
    <>
    <Image
      loader={imageLoader}
      src={src}
      alt="Picture of the author"
      width={width}
      height={heigh}
    />
    <h3>{tetx}</h3>
    </>
  )
}