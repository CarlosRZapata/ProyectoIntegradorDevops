export interface User {
    id_usuario: number;
    nombre: string;
    Creado_Por?: number | null;
    Actualizado_Por?: number | null;
    fecha_Eliminacion?: Date | null;
    Eliminado_Por?: number | null;
    fecha_creacion?: Date | null;
    fecha_actualizacion?: Date | null;
  }