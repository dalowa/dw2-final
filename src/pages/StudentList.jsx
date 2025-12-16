import { useState } from 'react';
import { students } from '../data/students';

const StudentList = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const currentStudent = students[currentIndex];
   const isFirst = currentIndex === 0;
   const isLast = currentIndex === students.length - 1;

   const handlePrevious = () => {
      if (!isFirst) {
         setCurrentIndex(prev => prev - 1);
      }
   };

   const handleNext = () => {
      if (!isLast) {
         setCurrentIndex(prev => prev + 1);
      }
   };

   return (
      <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h1 style={{ margin: 0 }}>Ficha de Estudiante</h1>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
               {currentIndex + 1} / {students.length}
            </span>
         </div>

         <div className="card" style={{ marginBottom: '2rem' }}>
            <div style={{
               display: 'inline-block',
               padding: '0.25rem 0.75rem',
               borderRadius: '2rem',
               fontSize: '0.875rem',
               fontWeight: 600,
               marginBottom: '1.5rem',
               backgroundColor: currentStudent.estado === 'Aprobado' ? 'var(--success-bg)' : 'var(--error-bg)',
               color: currentStudent.estado === 'Aprobado' ? 'var(--success-text)' : 'var(--error-text)',
            }}>
               {currentStudent.estado}
            </div>

            <div style={{ marginBottom: '2rem' }}>
               <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{currentStudent.nombre} {currentStudent.apellido}</h2>
               <p style={{ color: 'var(--primary)', fontWeight: 500 }}>{currentStudent.correo}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
               <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Carrera</label>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{currentStudent.carrera}</div>
               </div>
               <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Promedio Ponderado</label>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{currentStudent.promedio}</div>
               </div>
            </div>
         </div>

         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
               onClick={handlePrevious}
               disabled={isFirst}
               className="btn btn-secondary"
            >
               Anterior
            </button>
            <button
               onClick={handleNext}
               disabled={isLast}
               className="btn btn-primary"
            >
               Siguiente
            </button>
         </div>
      </div>
   );
};

export default StudentList;
