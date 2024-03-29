import { Link } from "react-router-dom";

export default function ErrorPage () {
  return (
    <main>
      <div>Page Not Found!</div>
      <Link to="/">Home Page</Link>
    </main>
  )
}