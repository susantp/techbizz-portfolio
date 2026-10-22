import 'server-only';
import { google } from 'googleapis';

export type SheetForm = {
    name: string;
    email: string;
    subject: string;
    detail: string;
};

export async function appendContact(body: SheetForm) {
    const sheets = google.sheets('v4');
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets'
        ]
    })


    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'A1:D1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [body.name, body.email, body.subject, body.detail]
            ]
        },
        auth: auth,
    })
    return response.data;
}
