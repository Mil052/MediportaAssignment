import { Outlet } from "react-router-dom";

export default function Layout () {
  return (
    <>
      <header>
        Header Component
      </header>
      <Outlet/>
      <footer>
        Footer Component
      </footer>
    </>
  )
}