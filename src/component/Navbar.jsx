import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <section>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <NavLink to="register" >Register</NavLink>
          </li>
          <li>
          <NavLink to="login" >Login</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </section>
  );
};
