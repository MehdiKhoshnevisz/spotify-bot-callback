export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  return (
    <>
      <h2>Authorization Code:</h2>
      <code>${code || "No code provided"}</code>
      <br />
      <p>Copy this and paste into your bot for token exchange.</p>
    </>
  );
}
