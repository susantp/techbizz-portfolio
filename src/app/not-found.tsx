import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-6 py-16 text-center text-slate-900">
            <p className="text-sm font-semibold tracking-widest text-orange-800">404</p>
            <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
            <p className="text-slate-700">Check the address or return to the homepage.</p>
            <Link
                href="/"
                className="mt-2 rounded-md bg-brown-900 px-5 py-3 font-semibold text-white hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown-900"
            >
                Back to homepage
            </Link>
        </section>
    );
}
