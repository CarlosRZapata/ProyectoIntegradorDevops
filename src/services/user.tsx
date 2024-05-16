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

export const createUsuarios = async (usuarios: User): Promise<void> => {
  const { error} = await supabase.from("usuarios").insert(usuarios);
  if (error) throw error;
}