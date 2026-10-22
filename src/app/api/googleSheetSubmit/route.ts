import { appendContact, type SheetForm } from '@/lib/google-sheets';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return Response.json({ message: 'Invalid JSON body.' }, { status: 400 });
    }
    if (
        !body || typeof body !== 'object' ||
        !['name', 'email', 'subject', 'detail'].every(
            (key) => typeof body[key] === 'string' && body[key].trim().length > 0
        )
    ) {
        return Response.json({ message: 'Please fill form properly.' }, { status: 400 });
    }
    try {
        const data = await appendContact(body as SheetForm);
        return Response.json({ data });
    } catch (error) {
        console.error('Google Sheets submission failed:', error);
        return Response.json({ data: { message: 'Unable to submit your message.' } }, { status: 500 });
    }
}
