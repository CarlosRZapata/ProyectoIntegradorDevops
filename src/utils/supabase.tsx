import { createClient } from "@supabase/supabase-js";

  const SUPABASE_URL = "https://vmjnddokygmgjkwitjeb.supabase.co";
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtam5kZG9reWdtZ2prd2l0amViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MjkyODAsImV4cCI6MjA1NjEwNTI4MH0.TVNhl6ZUq5NeFT0uQ91G4NO0cf5sn20L-BscVShTNT4";
  
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  
 export default supabase;
  