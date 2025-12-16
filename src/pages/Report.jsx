import { Chart } from "react-google-charts";
import { students } from "../data/students";

const Report = () => {
   const chartData = [
      ["Nombre", "Apellido", "Correo", "Carrera", "Promedio", "Estado"],
      ...students.map((student) => [
         student.nombre,
         student.apellido,
         student.correo,
         student.carrera,
         student.promedio,
         student.estado,
      ]),
   ];

   const options = {
      showRowNumber: true,
      width: "100%",
      height: "100%",
      allowHtml: true,
      cssClassNames: {
         tableCell: 'google-chart-cell',
         headerCell: 'google-chart-header',
      }
   };

   return (
      <div className="animate-fade-in" style={{ height: '100%', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
         <h1>Reporte de Notas</h1>
         <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>
            Vista general del rendimiento académico de todos los estudiantes registrados.
         </p>

         <div className="card chart-container" style={{ flex: 1, padding: '0', overflow: 'hidden' }}>
            {/* We wrap the chart in a div with explicit dimensions to ensure it renders */}
            <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
               <Chart
                  chartType="Table"
                  width="100%"
                  height="100%"
                  data={chartData}
                  options={options}
               />
            </div>
         </div>
      </div>
   );
};

export default Report;
