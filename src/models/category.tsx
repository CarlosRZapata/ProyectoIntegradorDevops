export interface Category {
    id_categoria: number;
    nombre: string;
    fecha_creacion?: Date | null;
    fk_CreadoPor?: number | null;
    fecha_actualizacion?: Date| null;
    fk_ActualizadoPor?: number| null;
    fecha_eliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }