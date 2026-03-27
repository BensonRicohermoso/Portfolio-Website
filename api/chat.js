// api/chat.js
export const config = {
  runtime: 'edge', // Using Edge runtime is faster and has built-in fetch support
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { messages } = await req.json();

    // Debug: Log environment and request
    console.log('GROQ_API_KEY present:', !!process.env.GROQ_API_KEY);
    console.log('Request messages:', messages);

    // Check for the key (Make sure it's named GROQ_API_KEY in Vercel)
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error('API key not configured');
      return new Response(JSON.stringify({ error: 'API key not configured' }), { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    console.log('Groq API response:', data);
    const text = data.choices?.[0]?.message?.content || 'No response from AI';

    return new Response(JSON.stringify({ text, debug: data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}