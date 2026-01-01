# Reyzone Architecture & Tech Stack

## 1. Core Technology Stack
*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4
    *   **Utilities:** `tailwind-merge`, `clsx`, `class-variance-authority`, `tailwindcss-animate`
*   **UI Library:** Radix UI (Primitives), Lucide React (Icons)
*   **State Management:** Zustand (Client-side global state)
*   **Database/Storage:** PouchDB (Local-first, offline-capable database)
*   **Visualizations:** ReactFlow (Medical flow canvas)
*   **Fonts:** Vazirmatn (Persian support)
*   **Theming:** `next-themes` (Dark/Light mode)

## 2. Architectural Design Pattern: Feature-Sliced Design (FSD)
This project strictly follows the FSD methodology to ensure scalability and decoupling.
**Scope:** `apps/web/src/`

### Layers (Ordered by Dependency - Top can import Bottom)
1.  **`app/`** (The Entry Point)
    *   Next.js App Router specific files (`page.tsx`, `layout.tsx`).
    *   Initializes providers and composes Widgets/Features.
2.  **`widgets/`** (Composition Layer)
    *   Complex UI blocks that combine multiple features and entities.
    *   *Example:* `PatientHeader`, `OrderingPanel`, `RightSidebar`.
3.  **`features/`** (User Interactions)
    *   Handle user actions and business logic that brings value.
    *   *Example:* `canvas` (MedicalFlowCanvas), `prescribe-medication`.
4.  **`entities/`** (Business Domain)
    *   Domain data models and highly reusable, simple UI components.
    *   *Example:* `patient` (PatientCard), `session` (UserRole).
5.  **`shared/`** (Utilities)
    *   Generic code not bound to specific business logic.
    *   *Example:* `ui` (Buttons, Inputs), `lib` (utils), `hooks`.

## 3. Key Architectural Decisions
*   **Local-First Data:** The app uses PouchDB to store data locally in the browser, enabling offline access. Synchronization happens in the background.
*   **Server vs. Client:**
    *   **Layouts & Pages:** Should be **Server Components** by default (fetching initial data, SEO).
    *   **Interactivity:** Use `'use client'` strictly at the leaf nodes (components needing hooks like `useState`, `onClick`).
*   **Styling Strategy:**
    *   No inline styles.
    *   Mobile-first responsive design.
    *   RTL (Right-to-Left) native support for Persian language.
