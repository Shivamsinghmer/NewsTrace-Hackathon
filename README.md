# 📰 NewsTrace

**NewsTrace** is an AI-powered journalist intelligence and discovery tool.

It allows users to search for any media outlet and instantly access publicly available information about journalists — including their names, roles, beats, and social profiles.

The project is built with **Next.js 16**, integrated with **Clerk Authentication** for secure user access, and uses **webhooks** to fetch live journalist data from AI agents.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash

git clone https://github.com/yourusername/newstrace.git

cd newstrace

2. Install Dependencies

bash

Copy code

npm install

# or

yarn install
```
## ⚙️ Environment Variables

Before starting the project, create a .env.local file in the root directory and add the following variables:

bash

Copy code

## Clerk Authentication Keys

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLERK_SECRET_KEY=your_clerk_secret_key

## Clerk Redirect URLs

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/search

NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/search

## Webhook URLs for AI Agent

NEXT_PUBLIC_WEBHOOK_TEST_URL=https://your-n8n-test-webhook-url

NEXT_PUBLIC_WEBHOOK_PRODUCTION_URL=https://your-n8n-production-webhook-url

## ⚠️ Important: These variables are required for authentication and data fetching.

Without them, the app will not run properly.

### 🧠 Features

🔐 Secure Login using Clerk authentication

🧑‍💻 Search journalists by media outlet name

⚡ Fetch real-time journalist data from n8n AI webhooks

🧾 Displays key details like:

Name

Role / Designation

Beat or Coverage area

Contact / Social links

📱 Fully responsive UI built with Next.js + Tailwind CSS

## 🧩 Running the Project

Start the local development server:

bash

Copy code

npm run dev

##### or

yarn dev

Then open http://localhost:3000 in your browser.

### 🧭 Project Structure

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

## 🌐 Deployment

The easiest way to deploy NewsTrace is via Vercel — the creators of Next.js.

You can deploy directly using this link:

### 👉 Deploy on Vercel

Make sure to add all the environment variables in your Vercel project settings before deploying.

### 📚 Learn More

Next.js Documentation

Clerk Documentation

Vercel Deployment Guide

### 💡 About the Project

NewsTrace was built to simplify media intelligence.

It’s designed for PR teams, analysts, and researchers who need fast access to verified journalist information without manual searching.

Powered by AI + Automation, it connects to n8n workflows to extract and display structured journalist data from public sources.
