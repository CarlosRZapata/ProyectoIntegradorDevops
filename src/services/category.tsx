import { Category } from "../models/category";
import supabase from "../utils/supabase"

export const getCategory = async (): Promise<Category[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("categorias:", data); // Agrega esta línea para imprimir los datos
      }
      return data || []; 
}

export const createCategory = async (categoria: Category): Promise<void> => {
  const { error} = await supabase.from("categoria").insert(categoria);
  if (error) throw error;
}