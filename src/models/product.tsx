export interface Product {
  id_producto: number;
  nombre: string;
  precio: number;
  fk_categoria: number;
  fecha_creacion: Date;
  FechaActu?: Date| null;
  FechaEliminado?: Date | null;
  }