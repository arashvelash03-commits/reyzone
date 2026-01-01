# Reyzone Domain & Use Cases

## 1. Domain Overview
Reyzone is a **Medical Electronic Health Record (EHR)** application designed for high-performance, offline-capable clinical workflows. It is optimized for Persian-speaking users (RTL layout).

## 2. Actors (Roles)
*   **Doctor:** The primary user. Conducts patient visits, diagnoses, prescribes medications, and orders tests.
*   **Clerk:** Manages patient check-in, registration, and scheduling.
*   **Admin:** (Implicit) System configuration.

## 3. Core Entities
*   **Patient:**
    *   Demographics (Name, Age, MRN - Medical Record Number).
    *   Clinical History.
*   **Session/User:**
    *   Authentication state.
    *   Role-based access control (Doctor vs. Clerk).
*   **Encounter (Visit):**
    *   A single interaction between a Doctor and a Patient.
*   **Order:**
    *   Requests for Labs, Imaging, or Medications.

## 4. Primary Use Cases

### UC-1: Doctor Patient Visit
*   **Actor:** Doctor.
*   **Trigger:** Doctor selects a patient from their list.
*   **Workflow:**
    1.  **Patient Header:** View summary (Name, Age, MRN).
    2.  **Medical Canvas:** An interactive visual workspace (ReactFlow) to map out symptoms, diagnoses, and treatments.
    3.  **Ordering Panel:** A side panel to search and select items (Meds, Labs) to add to the patient's record.
    4.  **Right Sidebar:** Helper tools or history view.
*   **Goal:** Complete clinical documentation and orders efficiently.

### UC-2: Authentication & Routing
*   **Actor:** System / User.
*   **Workflow:**
    1.  User lands on app.
    2.  Check Session (Local/Auth Service).
    3.  **If Clerk:** Redirect to `/clerk`.
    4.  **If Doctor:** Redirect to `/doctor`.
    5.  **If Unauthenticated:** Redirect to `/login`.
