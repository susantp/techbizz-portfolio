import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Tech Bizz',
    description: 'How Tech Bizz handles information when you visit our website or use the Tech Bizz mobile app.',
    alternates: { canonical: 'https://www.techbizznepal.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
    return (
        <article className="mx-auto max-w-3xl px-6 py-12 text-slate-800 sm:py-16">
            <h1 className="mb-3 text-3xl font-semibold text-slate-950">Privacy Policy</h1>
            <p className="mb-10 text-sm text-slate-600">Effective date: November 20, 2026</p>

            <div className="space-y-8 leading-7">
                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">About this policy</h2>
                    <p>
                        This policy describes information handled when you visit the Tech Bizz website or use
                        the Tech Bizz mobile app. The website includes a contact form. The app displays public
                        company and leadership information and lets you choose to contact us through your
                        device&apos;s email or WhatsApp app.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">Information you provide</h2>
                    <p>
                        When you submit the website contact form, it sends your name, email address, subject,
                        and message to Tech Bizz. The form stores those details in a Google Sheet so we can
                        respond to your inquiry. Do not include sensitive personal information in the form.
                    </p>
                    <p className="mt-3">
                        The mobile app does not contain a contact form or ask you to create an account. If you
                        choose an email or WhatsApp contact option, your device opens that service and you
                        choose what to send. The selected service handles information you provide under its
                        own terms and privacy policy.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">Information handled by the app and website</h2>
                    <p>
                        The app requests public company and leadership content from Tech Bizz and Susant
                        Paudel&apos;s portfolio websites. Those requests, and requests for remotely hosted
                        images, reach the relevant hosting providers. As with ordinary website requests,
                        providers may receive technical information such as your IP address, device or browser
                        details, and the requested resource.
                    </p>
                    <p className="mt-3">
                        The Tech Bizz website uses Vercel Analytics. Vercel describes the information it
                        processes in its own{' '}
                        <a className="underline" href="https://vercel.com/docs/analytics/privacy-policy">
                            Analytics privacy policy
                        </a>
                        . The mobile app does not include Vercel Analytics.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">How we use information</h2>
                    <p>
                        Tech Bizz uses website contact details to review and respond to the inquiry. We use
                        public portfolio content to display company services and leadership information in the
                        website and app. We do not sell the contact details submitted through the form.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">Service providers and retention</h2>
                    <p>
                        Google Sheets stores website inquiries for Tech Bizz. Vercel hosts this website and
                        provides its analytics service. The two portfolio sites host the public content and
                        images requested by the app. These providers process information as needed to provide
                        their services and under their applicable terms.
                    </p>
                    <p className="mt-3">
                        Tech Bizz keeps inquiry information while it is needed to handle and follow up on the
                        request, and may retain it where required for legitimate business or legal purposes.
                        Contact us to ask about an inquiry you submitted.
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">Your choices and contact</h2>
                    <p>
                        You can choose not to submit the website contact form. You can also contact us to ask
                        about personal information you provided through it, or to request correction or
                        deletion where applicable.
                    </p>
                    <p className="mt-3">
                        For privacy questions, contact{' '}
                        <a className="underline" href="mailto:techbizznepal@gmail.com">
                            techbizznepal@gmail.com
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="mb-2 text-xl font-semibold text-slate-950">Changes to this policy</h2>
                    <p>
                        We may update this policy when our practices or services change. The effective date
                        above identifies the latest version.
                    </p>
                </section>
            </div>
        </article>
    );
}
