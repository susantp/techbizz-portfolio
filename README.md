# Tech Bizz Portfolio

Company portfolio website for Tech Bizz Pvt. Ltd., a software and web development company in Kathmandu, Nepal. The homepage presents the company's work process, services, contact details, and inquiry form. Contact inquiries are appended to a Google Sheet.

## Technology

- Next.js 16 with App Router and TypeScript
- React 19, with Server Components for pages and static sections
- Tailwind CSS 4 and React Icons
- Google Sheets API with service account authentication
- Bun for package management and scripts
- Standalone Node.js output for Docker deployment

## Local development

Requirements: Node.js 20.9 or newer and Bun 1.4.4 or newer. The Docker image uses Node.js 24.

```bash
bun install --frozen-lockfile
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). The public pages render without Google credentials; contact submissions require the configuration below.

## Contact form configuration

Create a `.env.local` file in the project root:

```dotenv
GOOGLE_CLIENT_EMAIL="your-service-account@your-project.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID="your-spreadsheet-id"
```

Use the service account's `client_email` and `private_key`. The integration converts literal `\n` sequences in the private key into newlines. Keep these credentials server-side; `.env.local` is ignored by Git.

Enable the Google Sheets API in the service account's Google Cloud project and share the destination spreadsheet with `GOOGLE_CLIENT_EMAIL` as an editor. Set `GOOGLE_SHEET_ID` to the ID from the spreadsheet URL, then restart the development server after changing environment variables.

The form sends `name`, `email`, `subject`, and `detail` to `POST /api/googleSheetSubmit`. The server validates that all four fields are non-empty strings and appends them in that order using range `A1:D1` and `USER_ENTERED` input mode. It returns 400 for invalid input and 500 if the Sheets integration fails. A successful submission writes a real row to the configured spreadsheet.

## Project structure

```text
src/
├── app/
│   ├── layout.tsx                  # HTML shell, shared layout, SEO metadata
│   ├── page.tsx                    # Homepage
│   ├── globals.css                 # Tailwind directives and shared styles
│   ├── about/page.tsx              # Placeholder About page
│   ├── _components/                # Homepage sections and contact form
│   └── api/
│       ├── googleSheetSubmit/route.ts
│       └── hello/route.ts          # Sample GET endpoint
├── components/layout/             # Navbar, footer, logo, contact info, GoTop
├── content/site-content.tsx       # Static company content and icons
└── lib/google-sheets.ts            # Server-only Google Sheets integration
public/                            # Logo, favicon, and other static assets
```

The contact form and `GoTop` control are Client Components. Pages, the shared layout, and static sections render as Server Components. The `@/` import alias points to `src/`.

## Updating the site

- Edit company details, service descriptions, and work process content in `src/content/site-content.tsx`.
- Edit homepage sections in `src/app/_components/` and compose them in `src/app/page.tsx`.
- Update the title, description, social preview, and viewport settings in `src/app/layout.tsx`.
- Update shared navigation and footer components in `src/components/layout/`.
- Put static images in `public/` and reference them from `/`, such as `/logo.png`.
- Adjust shared styles in `src/app/globals.css` and theme settings in the same file (the `@theme` block).

## Commands and validation

| Command | Purpose |
| --- | --- |
| `bun run dev` | Start the development server on port 3000 |
| `bun run lint` | Run ESLint |
| `bun run build` | Build the production application and check TypeScript |
| `bun run start` | Invoke `next start`; use the standalone server below for the configured production output |
| `bun audit` | Check the locked dependency graph for reported vulnerabilities |

There is no automated test suite configured. Before shipping changes, run lint and the production build, check `/` and `/about`, and verify contact submissions against an appropriate Google Sheet when credentials are available.

## Production deployment

After pushing to `main`, check the Vercel deployment status and confirm its source commit matches the pushed commit before considering the release complete.

The project sets `output: 'standalone'` in `next.config.js`. The Dockerfile installs dependencies using `bun.lock`, builds the application, copies the standalone server and static assets, and runs as the `node` user on port 3002.

For Docker, create `.env.docker.local` with the same three variables using unquoted `KEY=value` entries. Keep the private key on one line with literal `\n` sequences; Docker env files do not remove surrounding quotes. This file is also ignored by Git.

```bash
docker build -t techbizz-portfolio .
docker run --rm -p 3002:3002 --env-file .env.docker.local techbizz-portfolio
```

Open [http://localhost:3002](http://localhost:3002). Environment files are excluded from the Docker build context; supply the Google credentials at runtime. Docker reads env-file values literally, so use unquoted `KEY=value` entries for that command and retain literal `
` sequences in the private key. Alternatively, supply variables through the deployment environment's secret configuration.

To run the standalone output directly after `bun run build`, copy the assets alongside the generated server. Supply the three Google variables through the process environment to enable submissions:

```bash
cp -R public .next/standalone/public
mkdir -p .next/standalone/.next
cp -R .next/static .next/standalone/.next/static
PORT=3002 HOSTNAME=0.0.0.0 node .next/standalone/server.js
```

## Dependency maintenance

Commit `bun.lock` after dependency changes and use `bun install --frozen-lockfile` for reproducible installs. Run `bun audit` when updating dependencies.

Dependency upgrades across major versions can require configuration changes. Tailwind CSS 4 uses `@tailwindcss/postcss`, with its theme and forms plugin configured in `src/app/globals.css`.

TypeScript 7 provides the `tsc` executable through the `@typescript/native` alias. The `typescript` dependency aliases Microsoft's `@typescript/typescript6` compatibility package because ESLint's TypeScript tooling still requires the JavaScript compiler API. Keep both aliases when updating dependencies; `bun run build` uses the TypeScript 7 CLI.

The audit on 2026-10-22 reports one high-severity finding in `braces@3.0.3`, reached through `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch`. Track [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) and rerun `bun audit` after tooling updates.
