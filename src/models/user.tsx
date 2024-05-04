export interface User {
    ID_Usuario: number;
    Nombre: string;
    Creado_Por?: number | null;
    Actualizado_Por?: number | null;
    Fecha_Eliminacion?: Date | null;
    Eliminado_Por?: number | null;
    Fecha_creacion?: Date | null;
    Fecha_actualizacion?: Date | null;
  }