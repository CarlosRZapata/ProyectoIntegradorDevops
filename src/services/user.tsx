import supabase from "../utils/supabase"
import { User } from "../models/user";

export const getUsuarios = async (): Promise<User[]> => {
    const { data , error} = await supabase.from("usuarios").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("usuarios:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}