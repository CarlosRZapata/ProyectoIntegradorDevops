import supabase from "../utils/supabase"
import { User } from "../models/user";

export const getUsuarios = async (): Promise<User[]> => {
    const { data , error} = await supabase.from("usuarios").select();
    if (error) throw error;
    return data
}