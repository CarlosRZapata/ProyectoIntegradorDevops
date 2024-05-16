import supabase from "../utils/supabase"
import { Direction } from "../models/direction";

export const getDireccion = async (): Promise<Direction[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("direccion:", data); 
      }
      return data || []; 
}

export const createDireccion = async (direccion: Direction): Promise<void> => {
  const { error} = await supabase.from("direccion").insert(direccion);
  if (error) throw error;
}