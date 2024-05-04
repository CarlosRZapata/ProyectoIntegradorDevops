import supabase from "../utils/supabase"
import { Gender } from "../models/gender";

export const getGenero = async (): Promise<Gender[]> => {
    const { data , error} = await supabase.from("genero").select();
    if (error) throw error;
    return data
}