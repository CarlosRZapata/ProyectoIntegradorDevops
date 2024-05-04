export interface Client {
    ID_Cliente: number;
    Nombre: string;
    Apellido: string;
    Fecha_Nacimiento: Date;
    ID_Genero: number;
    Telefono: string;
    Correo: string;
    ID_Direccion: number;
    FechaCreacion: Date;
    fk_CreadoPor?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }