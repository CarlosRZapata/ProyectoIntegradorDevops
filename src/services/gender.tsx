import supabase from "../utils/supabase"
import { Gender } from "../models/gender";

export const getGenero = async (): Promise<Gender[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("genero:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}