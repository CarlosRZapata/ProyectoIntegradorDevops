import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://klvyjzzctlgdojqtvork.supabase.co", 
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsdnlqenpjdGxnZG9qcXR2b3JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMjI3OTAsImV4cCI6MjAyODg5ODc5MH0.P6YayJKLBJ0BTg5NzTLGrW8-RVKL1s4sstiWUzTg9u0"

);

export default supabase;