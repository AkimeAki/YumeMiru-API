export async function GET(): Promise<Response> {
	return new Response(JSON.stringify({ test: "test" }), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
	});
}
