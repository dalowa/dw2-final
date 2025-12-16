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
      <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '600px', margin: '0 auto' }}>
         <h1>Visor de Estudiantes</h1>

         <div className="card" style={{ width: '100%', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
               <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Estudiante {currentIndex + 1} de {students.length}
               </span>
               <span style={{
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  backgroundColor: currentStudent.estado === 'Aprobado' ? '#dcfce7' : '#fee2e2',
                  color: currentStudent.estado === 'Aprobado' ? '#166534' : '#991b1b',
               }}>
                  {currentStudent.estado}
               </span>
            </div>

            <div style={{ display: 'grid', gap: '1rem' }}>
               <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Nombre Completo</label>
                  <div style={{ fontSize: '1.25rem', fontWeight: 600 }}>{currentStudent.nombre} {currentStudent.apellido}</div>
               </div>

               <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Correo Institucional</label>
                  <div style={{ fontSize: '1rem' }}>{currentStudent.correo}</div>
               </div>

               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                     <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Carrera</label>
                     <div style={{ fontSize: '1rem' }}>{currentStudent.carrera}</div>
                  </div>
                  <div>
                     <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Promedio</label>
                     <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary-color)' }}>{currentStudent.promedio}</div>
                  </div>
               </div>
            </div>
         </div>

         <div style={{ display: 'flex', gap: '1rem', width: '100%', justifyContent: 'center' }}>
            <button
               onClick={handlePrevious}
               disabled={isFirst}
               className="btn btn-secondary"
               style={{ flex: 1, maxWidth: '150px' }}
            >
               ← Anterior
            </button>
            <button
               onClick={handleNext}
               disabled={isLast}
               className="btn btn-primary"
               style={{ flex: 1, maxWidth: '150px' }}
            >
               Siguiente →
            </button>
         </div>
      </div>
   );
};

export default StudentList;
