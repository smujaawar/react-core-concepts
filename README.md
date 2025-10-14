# react-core-concepts

An educational React project demonstrating core React concepts and patterns, organized into focused folders so developers can explore and learn: functional components, class components, hooks (`useState`, `useReducer`), Context API, props, routing, reusable components, layouts, and more. Built with Vite for fast development.

This repository is intended for learners and instructors as a hands-on reference to common React patterns and small demo components.

## Quick overview

- Framework: React 19
- Bundler: Vite
- Routing: react-router-dom
- Styling: Tailwind (configured as dependency) and plain CSS files in `src`

## What you'll find here

Top-level `src/` folders map to React concepts:

- `useState/` — examples of the `useState` hook (e.g. `Couter.jsx`, `Toggle.jsx`).
- `useReducer/` — `ReducerCounter.jsx` demonstrates `useReducer`.
- `context-api/` — small Context API demo (`UserContext.jsx`, `Parent.jsx`, `ChildA/B/C.jsx`).
- `Props/` — parent/child prop passing examples (`Parent.jsx`, `Child*.jsx`).
- `Function/` — functional component examples (`FunCounter.jsx`).
- `Class/` — class component example (`ClassCounter.jsx`).
- `reusable/` — small reusable UI controls (`Button.jsx`, `Input.jsx`).
- `components/` — shared layout pieces (`Navbar.jsx`, `Footer.jsx`).
- `layouts/` — app layout wrapper (`MainLayout.jsx`).
- `pages/` — route pages (`Home.jsx`, `About.jsx`, `Products.jsx`, `Contact.jsx`, `ErrorPage.jsx`).
- `routes/` — routing setup (`Routes.jsx`).
- `assets/` — static assets (e.g. `react.svg`).

Entry points:

- `src/main.jsx` — app bootstrap and router mounting.
- `src/App.jsx` — top-level app component.

## Why this structure

The project is organized to let learners focus on one concept at a time. Each folder contains minimal, copyable examples that demonstrate a single React idea.

## Requirements

- Node.js (v18+ recommended)
- npm or yarn

## Getting started (Windows PowerShell)

1. Clone the repo

```powershell
git clone https://github.com/smujaawar/react-core-concepts.git
cd react-core-concepts
```

2. Install dependencies

```powershell
npm install
# or: yarn
```

3. Run the dev server

```powershell
npm run dev
# open http://localhost:5173
```

4. Build and preview

```powershell
npm run build
npm run preview
```

## Available scripts

From `package.json`:

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Key dependencies

- `react`, `react-dom` — UI library
- `react-router-dom` — client-side routing
- `vite` — dev server & build tooling
- `tailwindcss` (and `@tailwindcss/vite`) — optional styling toolchain

## Examples & walkthroughs

Here are a few short pointers to help you explore:

- State: open `src/useState/Couter.jsx` to see a simple counter using `useState`.
- Reducer: `src/useReducer/ReducerCounter.jsx` shows how to replace complex state with `useReducer`.
- Props: `src/Props/Parent.jsx` demonstrates passing data and callbacks to children.
- Context: `src/context-api/UserContext.jsx` + children show how to share data without prop-drilling.
- Class vs Function: Compare `src/Class/ClassCounter.jsx` with `src/Function/FunCounter.jsx` to see class components vs functional components.
- Routing: `src/routes/Routes.jsx` and files in `src/pages/` show react-router setup.
- Reusable components: `src/reusable/Button.jsx` and `Input.jsx` are small building blocks you can drop into other demos.

Feel free to copy/paste these small components into new demo pages to experiment.

## Suggested learning path

1. Start with `useState` examples to understand local component state.
2. Try `Props` folder to learn data flow from parent → child.
3. Move to `useReducer` for more complex state.
4. Learn Context API to avoid prop drilling.
5. Compare class components vs functional components.
6. Explore routing and layouts to build multi-page apps.

## Contributing

Small contributions are welcome — bug fixes, clearer examples, or improved documentation. Suggested workflow:

1. Fork this repository
2. Create a feature branch (e.g., `feat/use-sync-examples`)
3. Add or improve examples and tests (if you add complex behavior)
4. Open a PR with a clear description of changes

Please keep examples small and focused on teaching a single concept.

## License

This repository does not currently include a license file. If you want to publish this for public use, add a `LICENSE` (MIT is common for educational repos).

## Maintainer / Contact

If you have questions about the examples or want help improving the tutorials, open an issue or reach out to the repository owner: `smujaawar` (GitHub).

---
