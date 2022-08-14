import {NextApiRequest, NextApiResponse} from "next";
import {google} from "googleapis"

const sheets = google.sheets('v4');
type SheetForm = {
    name: string,
    email: string,
    subject: string,
    detail: string
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send({message: 'Only POST requests are allowed.'})
    }
    const body = req.body as SheetForm
    try {
// prepare auth
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
        res.status(200).send({data: response})

        return res.status(200).json({
            data: response.data
        })
    } catch (e) {
        console.log('error',e)
        return res.status(500).send({data: e})
    }
}