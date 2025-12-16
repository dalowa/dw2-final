import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
   return (
      <div className="app-container">
         <nav className="navbar">
            <div className="logo">GestiónAcadémica</div>
            <div className="nav-links">
               <NavLink to="/" className="nav-link" end>
                  Inicio
               </NavLink>
               <NavLink to="/lista" className="nav-link">
                  Lista de Alumnos
               </NavLink>
               <NavLink to="/report" className="nav-link">
                  Reporte
               </NavLink>
            </div>
         </nav>
         <main className="main-content">
            <Outlet />
         </main>
         <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)", fontSize: "0.875rem" }}>
            &copy; {new Date().getFullYear()} Sistema de Gestión Académica. Todos los derechos reservados.
         </footer>
      </div>
   );
};

export default Layout;
