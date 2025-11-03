// importo Outlet per gestione comp su rotte
import { Outlet } from "react-router-dom"

// importo comp Header
import Header from "../components/Header"


// creazione componente Layout DefaultLayout
const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout