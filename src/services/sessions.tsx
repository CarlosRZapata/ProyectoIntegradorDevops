import supabase from "../utils/supabase"
import { Session } from "../models/sessions";


export const getSesiones = async (): Promise<Session[]> => {
    const { data , error} = await supabase.from("sesiones").select();
    if (error) throw error;
    return data
}