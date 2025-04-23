import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <body>
        <h2>Authorization Code:</h2>
        <code>${code || "No code provided"}</code>
        <br />
        <p>Copy this and paste into your bot for token exchange.</p>
      </body>
    </html>
  `);
}
