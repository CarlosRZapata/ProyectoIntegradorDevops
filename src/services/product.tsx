import { Product } from "../models/product";
import supabase from "../utils/supabase";


export const getProducts = async (): Promise<Product[]> => {
    const { data , error} = await supabase.from("productos").select();
    if (error) {
        console.error("Error fetching products:", error);
      } else {
        console.log("products:", data);
      }
      return data || [];
    }

    export const createProducts = async (producto: Product): Promise<void> => {
      const { error} = await supabase.from("productos").insert(producto);
      if (error) throw error;
    }