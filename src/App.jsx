import './App.css'

// import delle pages
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
// import layout
import DefaultLayout from './layouts/DefaultLayout'

// import degli elemnti React di gestione router
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='/movies/:id' element={<MoviePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App