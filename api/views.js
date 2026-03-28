import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client using your environment variables
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  // 1. Force JSON response header to prevent "Unexpected Token A" (HTML) errors
  res.setHeader('Content-Type', 'application/json');

  // 2. Quick Check: Ensure keys aren't undefined
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    return res.status(500).json({ 
      error: "Environment variables are missing. Please restart your dev server." 
    });
  }

  try {
    // 3. Fetch current count
    // .maybeSingle() returns null instead of an error if the row doesn't exist
    const { data, error: fetchError } = await supabase
      .from('site_stats')
      .select('view_count')
      .eq('id', 1)
      .maybeSingle();

    if (fetchError) throw fetchError;

    // 4. Calculate new count (Fallback to 0 if the table was empty)
    const currentCount = data ? data.view_count : 0;
    const newCount = currentCount + 1;

    // 5. Update the Database
    // .upsert() will Update if ID:1 exists, or Insert if it is missing
    const { error: updateError } = await supabase
      .from('site_stats')
      .upsert({ id: 1, view_count: newCount });

    if (updateError) throw updateError;

    // 6. Return the result to your Hero.jsx
    return res.status(200).json({ views: newCount });

  } catch (error) {
    console.error("Supabase API Error:", error.message);
    return res.status(500).json({ error: error.message });
  }
}