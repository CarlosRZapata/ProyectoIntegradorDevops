export interface Session {
    ID_Sesion: number;
    Fecha_Sesion?: Date| null;
    Hora_Sesion?: TimeRanges;
    ID_Cliente: number;
    Fecha_Venta: Date;
    FechaCreacion: Date;
    fk_CreadoPor?: number | null;
    FechaActu?: Date| null;
    fk_ActualizadoPor?: number| null;
    FechaEliminado?: Date | null;
    fk_EliminadoPor?: number | null;
  }