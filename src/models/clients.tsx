export interface Client {
    id_cliente: number;
    nombre: string;
    apellido: string;
    fechadenacimiento: Date | null;
    fk_genero: number;
    telefono: string;
    correo: string;
    fk_direccion: number;
    fecha_creacion: Date;
    fk_creadopor?: number | null;
    fecha_actualizacion?: Date| null;
    fk_actualizadopor?: number| null;
    fechaeliminacion?: Date | null;
    fk_eliminadopor?: number | null;
  }