import supabase from "../utils/supabase"
import { Direction } from "../models/direction";

export const getDireccion = async (): Promise<Direction[]> => {
    const { data , error} = await supabase.from("direccion").select();
    if (error) throw error;
    return data
}