import Image from 'next/image'
export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-light mt-4 p-5 rounded-5">
      {/* 論壇文章作者頭圖 */}
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <Image
            width={50}
            height={50}
            src={userImg}
            className="img-responsive rounded-circle img-thumbnail "
            alt={username}
          />
          <p>{username}</p>
        </div>
        <p>發文日期:xxxx/xx/xx</p>
      </div>

      {/* 論壇文章圖片 */}
      <Image
        width={100}
        height={100}
        src={img}
        className="w-50 img-fluid my-md-4"
        alt=""
      />
      {/* 論壇文章 */}
      <p className="my-md-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero ex
        explicabo repudiandae delectus, ipsum error sunt eligendi eum commodi
        necessitatibus facilis eaque perferendis dolor voluptatem ut hic fuga
        quibusdam? Corporis, molestias fugit assumenda esse aspernatur est
        veniam eveniet delectus voluptas animi iure omnis laborum nam provident
        atque quasi ea modi tempore tenetur similique quia ex nesciunt sed.
        Sapiente quibusdam aut similique unde id blanditiis voluptates, aliquam
        aliquid laudantium, voluptatem itaque aperiam consequatur
        necessitatibus! Fugit, odit nam ratione nemo autem culpa ab ducimus
        corrupti esse ea unde perspiciatis, quam eveniet exercitationem. Vel
        quos eum saepe veniam nemo placeat, vero, dicta reprehenderit tempora
        reiciendis voluptates blanditiis, commodi perferendis facilis expedita
        ratione maxime autem? Cumque nostrum blanditiis eum rerum est. Minus,
        accusantium ea. Non ex repudiandae veniam voluptatem saepe cumque
        perspiciatis in, aperiam dicta praesentium sequi eligendi numquam ut
        quos! Adipisci officia aliquam sunt cum tenetur tempore quae!
        Perferendis aperiam fugiat voluptatem reprehenderit cupiditate magni,
        saepe ea eos atque vero assumenda consectetur modi culpa obcaecati ipsum
        mollitia eius aliquam. Eveniet distinctio quas quod nostrum. Culpa
        labore voluptatum voluptates reiciendis modi molestias totam ab, in
        laborum hic harum consequuntur ullam vitae optio quas deleniti sit
        tenetur numquam! Deserunt cupiditate iusto beatae tempora eos soluta
        harum corporis enim qui saepe? Officiis voluptas voluptate neque
        mollitia illo modi deserunt tenetur nostrum praesentium quidem
        voluptatem, non laudantium quibusdam saepe cupiditate reiciendis! Nulla
        eum ratione, tempore nisi minus accusantium porro omnis, odit architecto
        repellendus similique, totam laboriosam. Architecto possimus suscipit
        quasi, veritatis eligendi nulla facere magnam et, recusandae modi
        cumque, corporis accusantium odio similique! Cum ducimus dolor, facilis,
        deleniti nulla repellendus illo, expedita maiores saepe ipsam error
        accusantium alias harum minus nisi totam ea magni quasi in ex ipsa
        eveniet iste. Fugit repellat soluta doloremque? Necessitatibus unde
        optio maiores cum quo exercitationem eveniet repellat harum perferendis
        earum?
      </p>
      {/* Post Buttons */}
      <div className="">
        <div className=""></div>
      </div>
    </div>
  )
}
