# Lunacian Insights Dashboard

A simple internal dashboard for Lunacians to track Axie Infinity activity on YouTube.

## 1. What This Does

- Searches YouTube for Axie-related keywords
- Shows a Weekly Pulse summary, views trend chart, and recent videos table
- Generates a ready-to-paste summary for Slack
- Structured to later add X, Facebook, TikTok, Instagram, and Twitch

---

## 2. Get Your YouTube API Key (Non-Technical Steps)

1. Go to: https://console.cloud.google.com/ (sign in with a Google account).
2. At the top, click the **project selector** and create a **New Project** (any name, e.g. `Lunacian Insights`).
3. With your project selected, in the left menu click **APIs & Services → Library**.
4. In the search box, type **"YouTube Data API v3"** and click it.
5. Click **Enable**.
6. In the left menu, click **APIs & Services → Credentials**.
7. Click **+ CREATE CREDENTIALS → API key**.
8. A popup will show your new **API key**. Copy this key and keep it handy.

You now have your `YOUTUBE_API_KEY`.

---

## 3. Where To Paste Your API Key

You do **not** paste your key into the code directly. Instead, it goes into an environment variable.

### Option A: Running Locally (if a developer helps you)

1. In the project folder, create a file named `.env.local`.
2. Open `.env.local` and paste:

   ```env
   YOUTUBE_API_KEY=YOUR_KEY_HERE