import SidebarMemberInfo from './sidebar-member-info'
import SidebarProductFilter from './sidebar-product-filter'
import SidebarProductPagination from './sidebar-product-pagination'

export default function SidebarProduct() {
  return (
    <>
      <SidebarMemberInfo></SidebarMemberInfo>
      <SidebarProductFilter></SidebarProductFilter>
      <SidebarProductPagination></SidebarProductPagination>
    </>
  )
}
