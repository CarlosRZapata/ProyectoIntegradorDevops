import supabase from "../utils/supabase"
import { Session } from "../models/sessions";


export const getSesiones = async (): Promise<Session[]> => {
    const { data , error} = await supabase.from("sesiones").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("sesiones:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}