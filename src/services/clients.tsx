import supabase from "../utils/supabase"
import { Client } from "../models/clients";


export const getCliente = async (): Promise<Client[]> => {
    const { data , error} = await supabase.from("clientes").select();
    if (error) throw error;
    return data
}