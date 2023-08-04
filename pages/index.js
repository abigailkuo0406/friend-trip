import AdminLayout from '@/components/layout/admin-layout'
import HomePageStyle from '@/css/homepage.module.css'
import Btn from '@/components/common/button/btn-normal'

export default function AdminIndex() {
  return (
    <>
      <article className="blog-post">
        {/* <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p> */}
        <div className={`${HomePageStyle.card} ${HomePageStyle.cardPair}`}>
          <p className={HomePageStyle.cardTitle}>認識理想中的他與她！</p>
          <Btn
            btnText='抽好友這裡去→'
            addClassforButton='btn-light'
          />
        </div>
      </article>
      <article className="blog-post">
      <div className={HomePageStyle.card}>
          <p className={HomePageStyle.cardTitle}>認識理想中的他與她！</p>
          <Btn
            btnText='抽好友這裡去→'
            addClassforButton='btn-light'
          />
        </div>
        {/* <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p> */}
      </article>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Sample blog post</h2>
        <hr />
        <p>
          This is some additional paragraph placeholder content. It has been
          written to fill the available space and show how a longer snippet of
          text affects the surrounding content. We'll repeat it often to keep
          the demonstration flowing, so be on the lookout for this exact same
          string of text.
        </p>
      </article>
    </>
  )
}

// 這裡代表要套用AdminLayout，取代原本的DefaultLayout
// 要寫在元件的函式之外
AdminIndex.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
