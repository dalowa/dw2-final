import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <div className="animate-fade-in">
         <div style={{ marginBottom: "3rem" }}>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Bienvenido</h1>
            <p style={{
               fontSize: "1.25rem",
               color: "var(--text-muted)",
               maxWidth: "700px",
               lineHeight: "1.7"
            }}>
               Gestiona tu institución académica con nuestra plataforma moderna. Control total sobre notas, perfiles y reportes.
            </p>
         </div>

         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            <Link to="/lista" style={{ textDecoration: 'none' }}>
               <div className="card" style={{ transition: 'transform 0.2s', cursor: 'pointer', height: '100%', borderColor: 'transparent' }}>
                  <h2>Listado de Alumnos</h2>
                  <p className="text-muted">Acceso rápido a las fichas personales de los estudiantes.</p>
               </div>
            </Link>
            <Link to="/report" style={{ textDecoration: 'none' }}>
               <div className="card" style={{ transition: 'transform 0.2s', cursor: 'pointer', height: '100%', borderColor: 'transparent' }}>
                  <h2>Reporte General</h2>
                  <p className="text-muted">Visualiza el rendimiento académico de toda la clase.</p>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Home;
