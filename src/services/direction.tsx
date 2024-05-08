import supabase from "../utils/supabase"
import { Direction } from "../models/direction";

export const getDireccion = async (): Promise<Direction[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("direccion:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}