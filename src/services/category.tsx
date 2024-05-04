import { Category } from "../models/category";
import supabase from "../utils/supabase"

export const getCategory = async (): Promise<Category[]> => {
    const { data , error} = await supabase.from("categorias").select();
    if (error) throw error;
    return data
}