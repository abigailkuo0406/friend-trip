import AdminLayout from '@/components/layout/admin-layout'
import Image from 'next/image'

export default function Post() {
  return (
    <div>
      {/* 登入狀態下顯示刪除、編輯圖標 */}
      {/* 發文者頭圖、名稱、發文日期 */}
      {/* 圖片 */}
<Image src={https://images.wondershare.com/ailab/image2023/products/head-swap-after.png}/>
      {/* 作者名稱、文章內容 */}
      {/* 留言圖標、按讚圖標 */}
    </div>
  )
}

Post.getLayout = function (page) {
  return <AdminLayout>{page}</AdminLayout>
}
