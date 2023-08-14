import { Injectable } from '@angular/core';

export interface Estado {
  id: number;
  nombre: string;
}

export interface Municipio {
  id: number;
  nombre: string;
}

export interface MunicipiosPorEstado {
  [estadoId: number]: Municipio[];
}

@Injectable({
  providedIn: 'root'
})
export class EstadosServiceService {

  estados: Estado[] = [
    { id: 1, nombre: 'Estado 1' },
    { id: 2, nombre: 'Estado 2' },
    // Agrega más estados
  ];

  municipiosPorEstado: MunicipiosPorEstado = {
    1: [
      { id: 101, nombre: 'Municipio 1-1' },
      { id: 102, nombre: 'Municipio 1-2' },
      // Agrega más municipios para el estado 1
    ],
    2: [
      { id: 201, nombre: 'Municipio 2-1' },
      { id: 202, nombre: 'Municipio 2-2' },
      // Agrega más municipios para el estado 2
    ],
    // Agrega más datos de municipios para otros estados
  };

  constructor() { }

  getEstados() {
    return this.estados;
  }

  getMunicipiosPorEstado(estadoId: number) {
    return this.municipiosPorEstado[estadoId] || [];
  }
}
