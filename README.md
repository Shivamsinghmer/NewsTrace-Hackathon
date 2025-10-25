\# 📰 NewsTrace

\*\*NewsTrace\*\* is an AI-powered journalist intelligence and discovery tool.

It allows users to search for any media outlet and instantly access publicly available information about journalists — including their names, roles, beats, and social profiles.

The project is built with \*\*Next.js 14\*\*, integrated with \*\*Clerk Authentication\*\* for secure user access, and uses \*\*webhooks\*\* to fetch live journalist data from AI agents.

\---

\## 🚀 Getting Started

\### 1. Clone the Repository

\`\`\`bash

git clone https://github.com/yourusername/newstrace.git

cd newstrace

2\. Install Dependencies

bash

Copy code

npm install

\# or

yarn install

⚙️ Environment Variables

Before starting the project, create a .env.local file in the root directory and add the following variables:

bash

Copy code

\# Clerk Authentication Keys

NEXT\_PUBLIC\_CLERK\_PUBLISHABLE\_KEY=your\_clerk\_publishable\_key

CLERK\_SECRET\_KEY=your\_clerk\_secret\_key

\# Clerk Redirect URLs

NEXT\_PUBLIC\_CLERK\_SIGN\_IN\_URL=/sign-in

NEXT\_PUBLIC\_CLERK\_SIGN\_IN\_FALLBACK\_REDIRECT\_URL=/search

NEXT\_PUBLIC\_CLERK\_SIGN\_UP\_FALLBACK\_REDIRECT\_URL=/search

\# Webhook URLs for AI Agent

NEXT\_PUBLIC\_WEBHOOK\_TEST\_URL=https://your-n8n-test-webhook-url

NEXT\_PUBLIC\_WEBHOOK\_PRODUCTION\_URL=https://your-n8n-production-webhook-url

⚠️ Important: These variables are required for authentication and data fetching.

Without them, the app will not run properly.

🧠 Features

🔐 Secure Login using Clerk authentication

🧑‍💻 Search journalists by media outlet name

⚡ Fetch real-time journalist data from n8n AI webhooks

🧾 Displays key details like:

Name

Role / Designation

Beat or Coverage area

Contact / Social links

📱 Fully responsive UI built with Next.js + Tailwind CSS

🧩 Running the Project

Start the local development server:

bash

Copy code

npm run dev

\# or

yarn dev

Then open http://localhost:3000 in your browser.

🧭 Project Structure

bash

Copy code

/app

├── /search # Main search page (protected route)

├── /sign-in # Sign-in page (Clerk)

├── /sign-up # Sign-up page (Clerk)

├── layout.tsx # Global layout

└── page.tsx # Landing page

/components # UI Components

/lib # Utility and API helper functions

🌐 Deployment

The easiest way to deploy NewsTrace is via Vercel — the creators of Next.js.

You can deploy directly using this link:

👉 Deploy on Vercel

Make sure to add all the environment variables in your Vercel project settings before deploying.

📚 Learn More

Next.js Documentation

Clerk Documentation

Vercel Deployment Guide

💡 About the Project

NewsTrace was built to simplify media intelligence.

It’s designed for PR teams, analysts, and researchers who need fast access to verified journalist information without manual searching.

Powered by AI + Automation, it connects to n8n workflows to extract and display structured journalist data from public sources.
