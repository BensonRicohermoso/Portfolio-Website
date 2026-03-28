import { createClient } from '@supabase/supabase-js'

// Initialize Supabase
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async function handler(req, res) {
  // Debug: Check if env variables are actually loading
  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ 
      error: "Supabase environment variables are missing in this environment." 
    });
  }

  try {
    // 1. Fetch current count
    // We use .maybeSingle() so it doesn't crash if the row doesn't exist yet
    const { data, error: fetchError } = await supabase
      .from('site_stats')
      .select('view_count')
      .eq('id', 1)
      .maybeSingle();

    if (fetchError) throw fetchError;

    // 2. Handle the math (fallback to 0 if data is null)
    const currentCount = data ? data.view_count : 0;
    const newCount = currentCount + 1;

    // 3. Update the DB
    // Using upsert ensures that if ID 1 is missing, it creates it automatically
    const { error: updateError } = await supabase
      .from('site_stats')
      .upsert({ id: 1, view_count: newCount });

    if (updateError) throw updateError;

    // 4. Success! Return the new number
    res.status(200).json({ views: newCount });
  } catch (error) {
    console.error("View API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}