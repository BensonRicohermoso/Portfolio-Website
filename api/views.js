import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  try {
    // 1. Fetch current count
    const { data, error: fetchError } = await supabase
      .from('site_stats')
      .select('view_count')
      .eq('id', 1)
      .single();

    if (fetchError) throw fetchError;

    // 2. Increment it
    const newCount = data.view_count + 1;

    // 3. Update the DB
    const { error: updateError } = await supabase
      .from('site_stats')
      .update({ view_count: newCount })
      .eq('id', 1);

    if (updateError) throw updateError;

    // 4. Return the new number to the frontend
    res.status(200).json({ views: newCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}