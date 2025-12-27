import { google } from "googleapis";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const body = await request.json();

console.log("EMAIL", process.env.GOOGLE_CLIENT_EMAIL);
console.log("HAS KEY?", !!process.env.GOOGLE_PRIVATE_KEY);
console.log("LEN", process.env.GOOGLE_PRIVATE_KEY?.length);

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

await auth.authorize();


    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.name,
          body.email,
          body.applyingFor,
          body.experience,
          body.portfolio,
          body.github,
          body.about,
          new Date().toLocaleString("en-IN")
        ]]
      }
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Sheet Error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
