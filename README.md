# Next.js Task Management & Dashboard

A modern web application built with **Next.js (App Router)** to manage tasks and view analytics dashboards. This project demonstrates Next.js best practices including Server Components, Server-side Pagination, Suspense Boundaries, and Error Handling.

## 🚀 Features

- **📊 Dashboard Analytics**: Dynamic charts using `recharts` to display monthly views and trending statistics. The chart is lazy-loaded (`next/dynamic`) for optimal performance.
- **📝 Task Management**: A complete task list featuring **Server-side Pagination**. Tasks are fetched concurrently with user data and displayed in a responsive table.
- **👥 User Directory**: View detailed information about users, including their roles and avatars.
- **⏳ Skeleton Loading States**: Smooth user experience with `<Suspense>` and custom `loading.tsx` skeletons while data is being fetched.
- **🚨 Error Boundaries**: Graceful error handling using Next.js `error.tsx` to prevent the entire app from crashing during API failures.
- **🛠️ Mock API Backend**: Uses `json-server` to mock a realistic REST API with support for pagination (`_page`, `_per_page`).

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Mock API**: [json-server](https://github.com/typicode/json-server) (v1.0.0-beta)

## 📂 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── dashboard/       # Dashboard page with lazy-loaded charts
│   │   ├── tasks/           # Tasks list with server-side pagination
│   │   ├── users/           # User management and dynamic user details
│   │   ├── error.tsx        # Global error boundary
│   │   ├── layout.tsx       # Main application layout and navigation
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable UI components (shadcn/ui, Pagination, etc.)
├── db.json                  # Database file for json-server
├── package.json
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:

```bash
npm install
```

### Running the Application

The project uses a single command to run both the Next.js frontend and the `json-server` backend simultaneously.

```bash
npm run dev
```

- The **Next.js App** will run on [http://localhost:3000](http://localhost:3000)
- The **json-server API** will run on [http://localhost:3001](http://localhost:3001)

### Building for Production

To build the application for production (e.g., deploying to Vercel):

```bash
npm run build
```
*(Note: Since this app fetches data from a local `json-server`, ensure you provide a valid remote `NEXT_PUBLIC_API_URL` environment variable if deploying to a cloud provider like Vercel.)*

## 💡 Key Implementations

- **Pagination (`/tasks`)**: URL-based state management (`?page=2&limit=25`). The server component reads `searchParams` and fetches exactly what is needed from the API, providing excellent SEO and shareable URLs.
- **Suspense Bailout Fix**: Components relying on `useSearchParams` (like the pagination controls) are safely wrapped in `<Suspense>` boundaries to prevent Next.js Static Site Generation (SSG) errors during `npm run build`.
