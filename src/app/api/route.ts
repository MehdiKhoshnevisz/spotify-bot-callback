export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Authorization Code</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
          }
          code {
            background-color: #f0f0f0;
            padding: 2px 4px;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <h2>Authorization Code:</h2>
        <code>${code || "No code provided"}</code>
        <br />
        <p>Copy this and paste into your bot for token exchange.</p>
      </body>
    </html>
  `;

  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=utf-8",
      "cache-control": "no-cache",
    },
  });
}
