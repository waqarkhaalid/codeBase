import { createClient } from "@supabase/supabase-js";

let NEXT_PUBLIC_SUPABASE_URL = "https://jsjpxqoksewcnygjrvdk.supabase.co"
let REACT_APP_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDA2NDg3MywiZXhwIjoxOTQ1NjQwODczfQ.ptT1M9gUGiLpzdduEypC5j8bYcROYMBvjYPWSmXvZgw"

const supabaseUrl:any = NEXT_PUBLIC_SUPABASE_URL;
const supabaseSecretKey:any = REACT_APP_SUPABASE_KEY;
const supabaseClient = createClient(supabaseUrl, supabaseSecretKey);

export default supabaseClient;