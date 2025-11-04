import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="container bg-light p-4 rounded shadow-sm">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
