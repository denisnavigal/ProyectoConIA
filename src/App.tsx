import React from 'react';
import { PackageSearch, BarChart } from 'lucide-react';
import { Inventario } from './components/Inventario';
import { Reportes } from './components/Reportes';

function App() {
  const [activeTab, setActiveTab] = React.useState<'inventario' | 'reportes'>('inventario');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Sistema de Gestión Restaurante
            </h1>
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab('inventario')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'inventario'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <PackageSearch className="w-4 h-4 mr-2" />
                Inventario
              </button>
              <button
                onClick={() => setActiveTab('reportes')}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === 'reportes'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <BarChart className="w-4 h-4 mr-2" />
                Reportes
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'inventario' ? <Inventario /> : <Reportes />}
      </main>
    </div>
  );
}

export default App;