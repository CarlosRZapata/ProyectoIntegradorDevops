import supabase from "../utils/supabase"
import { SessionProduct } from "../models/sessionsProduct";

export const getSesionProductos = async (): Promise<SessionProduct[]> => {
    const { data , error} = await supabase.from("sesiones_productos").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("sesiones_productos:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}