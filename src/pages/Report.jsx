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
         tableRow: 'google-chart-row'
      }
   };

   return (
      <div className="animate-fade-in" style={{ height: 'calc(100vh - 200px)', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
         <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ marginBottom: '0.5rem' }}>Reporte General</h1>
            <p className="text-muted">Desempeño académico de la promoción actual.</p>
         </div>

         <div className="chart-container" style={{ flex: 1 }}>
            <Chart
               chartType="Table"
               width="100%"
               height="100%"
               data={chartData}
               options={options}
            />
         </div>
      </div>
   );
};

export default Report;
