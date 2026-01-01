# Plan: Refactor Root Layout to Server Component

## 1. Context & Problem
*   **Current State:** `apps/web/src/app/layout.tsx` is marked `'use client'`. It contains logic to check user session and redirect based on roles (`doctor` vs `clerk`).
*   **Issue:** This prevents the use of Next.js Server Component features, specifically SEO `metadata` and initial server-side rendering optimizations.
*   **Goal:** Restore `layout.tsx` to a Server Component and isolate client-side auth logic.

## 2. Technical Solution
We will implement a "Session Guard" pattern.

### 2.1. New Component: `SessionGuard`
*   **File:** `apps/web/src/app/session-guard.tsx`
*   **Type:** Client Component (`'use client'`)
*   **Responsibilities:**
    *   Wrap the application content.
    *   Check `useSession()`.
    *   Handle loading state (show "Loading...").
    *   Handle redirects (`useRouter`, `useEffect`) for login/role-based routing.

### 2.2. Update: `RootLayout`
*   **File:** `apps/web/src/app/layout.tsx`
*   **Type:** Server Component
*   **Changes:**
    *   Remove `'use client'`.
    *   Remove `useSession`, `useRouter`, `useEffect`.
    *   Import and use `SessionGuard`.
    *   Add `export const metadata: Metadata = { ... }`.

## 3. Step-by-Step Execution
1.  **Create `session-guard.tsx`:** Copy logic from current `layout.tsx`.
2.  **Refactor `layout.tsx`:**
    *   Clean up imports.
    *   Define Metadata.
    *   Render `SessionGuard` inside `Providers`.

## 4. Verification
*   Run the app.
*   Verify redirects still work (Login -> Doctor Page).
*   Verify "Loading..." state appears.
*   Check that `metadata` is present in the document head.
