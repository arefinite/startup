import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const RootLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  )
}
export default RootLayout
