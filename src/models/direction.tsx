export interface Direction {
    ID_Direccion: number;
    Codigo_Postal: number;
    Calle: string;
    Colonia: string;
    Num_Exterior: string;
    Num_Interior: string;
    Ciudad: string;
    FechaCreacion: Date;
    fk_CreadoPor?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }