import React from 'react';
import { Package2, TrendingUp, TrendingDown } from 'lucide-react';
import { Platillo } from '../types';
import { platillosIniciales } from '../data/platillos';

export function Inventario() {
  const [platillos, setPlatillos] = React.useState<Platillo[]>(platillosIniciales);
  const [filtroCategoria, setFiltroCategoria] = React.useState<string>('');

  const platillosFiltrados = React.useMemo(() => {
    return filtroCategoria
      ? platillos.filter((p) => p.categoria === filtroCategoria)
      : platillos;
  }, [platillos, filtroCategoria]);

  const categorias = [...new Set(platillos.map((p) => p.categoria))];

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <Package2 className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Inventario</h2>
      </div>

      <div className="mb-4">
        <select
          className="w-full md:w-64 p-2 border rounded-lg"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {platillosFiltrados.map((platillo) => (
          <div
            key={platillo.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">{platillo.nombre}</h3>
              <span className="text-gray-600">${platillo.precio}</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">{platillo.descripcion}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm">
                Existencias: <strong>{platillo.existencias}</strong>
              </span>
              <div className="flex items-center gap-1">
                {platillo.popularidad >= 4.5 ? (
                  <TrendingUp className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm">{platillo.popularidad}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}