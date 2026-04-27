# Next.js Rendering Demo

Eta ekta chhoto Next.js App Router project jekhane external API theke data fetch kore `foods` ebong `todos` page render kora hoyeche. Project-ta server-side data fetching, dynamic routing, loading state, ebong error boundary-er basic usage dekhano-r jonno bhalo ekta demo.

## Project Overview

Ei project-e muloto ei route-gulo ache:

- `/` : default landing page
- `/foods` : food collection page, jekhane API theke food data ene card layout-e dekhano hoy
- `/foods/[foodId]` : single food detail page, jekhane nirdishto item-er image, nutrition, pricing, ingredients, ebong cooking steps dekhano hoy
- `/todos` : todo dashboard, jekhane completed, pending, ebong featured tasks alada kore dekhano hoy

## Features

- Next.js App Router based routing
- Async server components diye API data fetch
- Dynamic route: `foods/[foodId]`
- `loading.jsx` diye loading UI
- `error.jsx` diye foods route-er custom error state
- Tailwind CSS v4 + DaisyUI styling
- Remote image support via `next/image`
- React Compiler enabled in `next.config.mjs`

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- Tailwind CSS `4`
- DaisyUI `5`
- ESLint `9`

## External Data Sources

Ei project duita public API use kore:

- Foods API: `https://phi-lab-server.vercel.app/api/v1/lab/foods`
- Todos API: `https://jsonplaceholder.typicode.com/todos`

`foods` page ebong detail page thikmoto load hote internet connection dorkar. Food image render korar jonno Cloudinary remote images allow kora ache.

## Getting Started

Project locally run korte:

```bash
npm install
npm run dev
```

Tarpor browser-e ei URL open korun:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/app/
|-- layout.js
|-- page.js
|-- globals.css
|-- foods/
|   |-- page.jsx
|   |-- loading.jsx
|   |-- error.jsx
|   `-- [foodId]/
|       `-- page.jsx
`-- todos/
    `-- page.jsx
```

## Notes

- Root homepage ekhono default starter content dekhay.
- `foods/error.jsx` client component hisebe error handle kore.
- Kono `foodId` invalid hole detail route `notFound()` trigger kore.
- UI-te Bangladeshi pricing context hisebe `BDT` use kora hoyeche.

## Purpose

Ei repo learning, practice, ebong rendering pattern bojhar jonno handy. Bishesh kore jodi App Router, async page component, dynamic params, ar route-level loading/error handling eksathe dekhte chan, tahole project-ti bhalo reference hobe.
