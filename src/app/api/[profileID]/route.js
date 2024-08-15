export async function GET(request, context) {
    const team = context.params.profileID; // Accessing the dynamic 'team' parameter
  
    // You can now use the 'team' variable, e.g., fetch data based on this parameter
  
    return new Response(JSON.stringify({ message: `Team ID is ${team}` }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  