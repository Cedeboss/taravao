import { createClient } from "@supabase/supabase-js";

// const supabaseUrl: any = process.env.REACT_APP_END_POINT;
// const supabaseAnonKey: any = process.env.REACT_APP_APIKEY_PUBLIC;
const supabaseUrl: string = "https://tgjdmjlyphcayawspmdf.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnamRtamx5cGhjYXlhd3NwbWRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwNDU4MTksImV4cCI6MjAyMDYyMTgxOX0.1OPA0ZjAnWh9DotDfDsoelztxLLpZcMKtN-NQdo3OE4";

/**
 * Create a new Supabase Client.
 */
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
