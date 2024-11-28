export interface Platillo {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  existencias: number;
  popularidad: number;
}

export interface Resena {
  id: string;
  clienteNombre: string;
  platilloId: string;
  calificacion: number;
  comentario: string;
  fecha: string;
}

export interface EstadisticasPlatillo {
  platillo: Platillo;
  cantidadVendida: number;
  calificacionPromedio: number;
  resenas: number;
}