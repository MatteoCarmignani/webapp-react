import { Outlet } from "react-router-dom"


const DefaultLayout = () => {
  return (
    <>
      <main className="container bg-light p-4 rounded shadow-sm">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout
