import { Link, Outlet } from "react-router-dom"

export const Menu=()=>{
  return  (<div>
<nav>
  <ul>
    <li>
      <Link  to="/">Anasayfa</Link>
    </li>
    <li>
      <Link to="/invoice">Fatura Gir</Link>
    </li>
    <li>
      <Link to="/dashboard">Dashboard</Link>
    </li>
  </ul>
</nav>

<hr />

{/* An <Outlet> renders whatever child route is currently active,
    so you can think about this <Outlet> as a placeholder for
    the child routes we defined above. */}
<Outlet />
</div>)
}