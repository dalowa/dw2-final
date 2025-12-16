import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
   return (
      <div className="app-container">
         <aside className="sidebar">
            <div className="logo">
               Académica
            </div>
            <nav className="nav-links">
               <NavLink to="/" className="nav-link" end>
                  Inicio
               </NavLink>
               <NavLink to="/lista" className="nav-link">
                  Alumnos
               </NavLink>
               <NavLink to="/report" className="nav-link">
                  Reporte
               </NavLink>
            </nav>

            <div style={{ marginTop: 'auto', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
               v1.2.0 Beta
            </div>
         </aside>

         <main className="main-content">
            <Outlet />
         </main>
      </div>
   );
};

export default Layout;
