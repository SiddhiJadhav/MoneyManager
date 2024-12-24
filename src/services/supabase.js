import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://watlpbuzhxfmewrwmyuq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhdGxwYnV6aHhmbWV3cndteXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MDY0MDMsImV4cCI6MjA1MDM4MjQwM30.hbO7kC3qcy94RdIka2zqItZviuRY41C_gbFMt8fc2Vc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
