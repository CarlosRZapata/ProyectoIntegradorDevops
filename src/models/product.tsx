export interface Product {
    ID_Producto: number;
    Nombre: string;
    Precio: number;
    ID_Categoria: number;
    FechaCreacion: Date;
    FechaActu?: Date| null;
    FechaEliminado?: Date | null;
  }