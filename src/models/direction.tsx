export interface Direction {
  id_direccion: number;
  nombre: string;
  codigo_postal: number;
  calle: string;
  Colonia: string;
  numero_exterior: string;
  numero_interior: string;
  Ciudad: string;
  fecha_creacion: Date | null;
  fk_CreadoPor?: number | null;
  FechaActu?: Date| null;
  fk_ActualizadoPor?: number| null;
  FechaEliminado?: Date | null;
  fk_EliminadoPor?: number | null;
  }