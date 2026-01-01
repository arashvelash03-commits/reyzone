# Reyzone Coding Rules & Standards

## 1. General Principles
*   **Context First:** Before writing code, read `.context/architecture.md` and `.context/use-case.md`.
*   **Spec-Driven:** Do not write code without a Plan in `.specs/plans/`.
*   **Type Safety:** `strict: true` in TypeScript. No `any`. Define interfaces in `model` or `types` files.

## 2. Feature-Sliced Design (FSD) Rules
*   **Unidirectional Data Flow:**
    *   `app` -> imports -> `widgets`
    *   `widgets` -> imports -> `features`
    *   `features` -> imports -> `entities`
    *   `entities` -> imports -> `shared`
*   **Forbidden Imports:**
    *   A Slice cannot import from the *same* layer (e.g., `features/A` cannot import `features/B`). Use `widgets` to compose them.
    *   Lower layers cannot import upper layers (e.g., `shared` cannot import `entities`).

## 3. Next.js & React Rules
*   **Server Components Default:** All files in `app/` are Server Components unless explicitly marked `'use client'`.
*   **Client Boundaries:** Move interactive logic (state, effects, handlers) down the tree. Do not make the entire Page a Client Component if only a button needs it.
*   **Data Fetching:**
    *   Server: Use `fetch` or direct DB calls.
    *   Client: Use React Query or specialized hooks (for PouchDB).

## 4. Styling & UI
*   **Tailwind Only:** Use utility classes. Do not create `.css` files (except `globals.css`).
*   **CN Utility:** Always use `cn()` for merging class names.
    *   *Bad:* `className={`p-4 ${customClass}`}`
    *   *Good:* `className={cn("p-4", customClass)}`
*   **Radix Primitives:** Use Radix UI for accessible interactive components (Dialogs, Tabs, Popovers).

## 5. File Naming Conventions
*   **Folders:** `kebab-case` (e.g., `ordering-panel`).
*   **Components:** `PascalCase.tsx` (e.g., `PatientHeader.tsx`).
*   **Hooks:** `camelCase.ts` (e.g., `usePatient.ts`).
*   **Route Groups:** `(group-name)` (e.g., `(doctor)`).
