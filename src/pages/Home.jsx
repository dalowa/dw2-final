import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div className="animate-fade-in">
         <div className="card text-center" style={{ padding: "4rem 2rem" }}>
            <h1 style={{ marginBottom: "1rem" }}>Sistema de Gestión de Alumnos</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
               Administra y visualiza la información de tus estudiantes de manera eficiente, rápida y elegante.
            </p>

            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
               <Link to="/lista" className="btn btn-primary" style={{ minWidth: "200px" }}>
                  Ver Lista de Alumnos
               </Link>
               <Link to="/report" className="btn btn-secondary" style={{ minWidth: "200px" }}>
                  Ver Reporte Detallado
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Home;
