import React from 'react';
import { BarChart3, Star, MessageSquare } from 'lucide-react';
import { Platillo, Resena, EstadisticasPlatillo } from '../types';
import { platillosIniciales } from '../data/platillos';

const resenasIniciales: Resena[] = [
  {
    id: '1',
    clienteNombre: 'María García',
    platilloId: '1',
    calificacion: 5,
    comentario: '¡Excelente paella! Muy auténtica.',
    fecha: '2024-03-15'
  },
  {
    id: '2',
    clienteNombre: 'Juan Pérez',
    platilloId: '2',
    calificacion: 4,
    comentario: 'Muy refrescante, perfecto para el verano.',
    fecha: '2024-03-14'
  }
];

export function Reportes() {
  const [platillos] = React.useState<Platillo[]>(platillosIniciales);
  const [resenas] = React.useState<Resena[]>(resenasIniciales);

  const estadisticas: EstadisticasPlatillo[] = React.useMemo(() => {
    return platillos.map(platillo => {
      const resenasPlato = resenas.filter(r => r.platilloId === platillo.id);
      const calificacionPromedio = resenasPlato.reduce((acc, r) => acc + r.calificacion, 0) / (resenasPlato.length || 1);
      
      return {
        platillo,
        cantidadVendida: Math.floor(Math.random() * 100), // Simulado
        calificacionPromedio,
        resenas: resenasPlato.length
      };
    });
  }, [platillos, resenas]);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <BarChart3 className="w-6 h-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800">Reportes y Estadísticas</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Platillos Más Populares</h3>
          <div className="space-y-4">
            {estadisticas
              .sort((a, b) => b.calificacionPromedio - a.calificacionPromedio)
              .slice(0, 3)
              .map(({ platillo, calificacionPromedio }) => (
                <div key={platillo.id} className="flex items-center justify-between">
                  <span className="font-medium">{platillo.nombre}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{calificacionPromedio.toFixed(1)}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Últimas Reseñas</h3>
          <div className="space-y-4">
            {resenas.map(resena => {
              const platillo = platillos.find(p => p.id === resena.platilloId);
              return (
                <div key={resena.id} className="border-b pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{platillo?.nombre}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{resena.calificacion}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{resena.comentario}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <MessageSquare className="w-4 h-4" />
                    <span>{resena.clienteNombre}</span>
                    <span>•</span>
                    <span>{new Date(resena.fecha).toLocaleDateString()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}