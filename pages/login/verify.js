import React from 'react'
import LoginLayout from '@/components/layout/login-layout'
import VerifyLetter from '@/components/login/verify'
export default function Verify() {
  return (
    <>
      <VerifyLetter />
    </>
  )
}
Verify.getLayout = function (page) {
  return <LoginLayout>{page}</LoginLayout>
}
