import { Platillo } from '../types';

export const platillosIniciales: Platillo[] = [
  {
    id: '1',
    nombre: 'Paella Valenciana',
    descripcion: 'Arroz con mariscos, pollo y verduras',
    precio: 250,
    categoria: 'Plato Principal',
    existencias: 20,
    popularidad: 4.8
  },
  {
    id: '2',
    nombre: 'Gazpacho',
    descripcion: 'Sopa fría de tomate y verduras',
    precio: 120,
    categoria: 'Entrada',
    existencias: 15,
    popularidad: 4.2
  },
  {
    id: '3',
    nombre: 'Flan de Caramelo',
    descripcion: 'Postre tradicional con caramelo',
    precio: 80,
    categoria: 'Postre',
    existencias: 25,
    popularidad: 4.5
  }
];