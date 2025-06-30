# 🔐 Next.js JWT Auth Starter

A modern authentication flow in **Next.js** powered by **JWT stored in secure browser cookies**. Built with clean architecture, global error handling, async status tracking, and protected routes.

## 🚀 Features

- ✅ **JWT-based Authentication**
  - Token handling through same-site and secure cookies
  -
- 🪝 **State Management with Zustand**
  - scalabe and feature wise state stores
  - Custom middleware for handling loading states for async actions
- 🔒 **Protected Routes via Middleware**
  - Server-side route protection using `middleware.ts`
- 🔄 **Axios Interceptors**
  - Global token injection
  - Auto error catching and handling
  - Auto renewal of the access token
- 🧠 **Global Error Handling**
  - Centralized error UI and messages
- 💅 **Fully Typed with TypeScript**
  - Clean interfaces and safety everywhere

---

## 🧰 Tech Stack

- **Next.js** (App Router)
- **Zustand** – global state
- **Axios** – HTTP client
- **JWT** – secure authentication
- **Cookies** – using `HttpOnly` and `Secure` flags
- **TailwindCSS** – optional styling framework

---

## 🛠️ Setup Instructions

```bash
git clone 
cd nextjs-jwt-cookie-auth
npm install
cp .env.local
```
## check out the app

```bash
https://nextjs-jwt-cookie-auth-git-main-arbaaz833s-projects.vercel.app/
```
