import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">MovieWorld</Link>
      </div>
    </nav>
  )
}

export default Header