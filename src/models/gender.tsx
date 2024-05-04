export interface Gender {
    ID_Genero: number;
    Genero: string;
    FechaCreacion: Date;
    FK_Creado_Por?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }