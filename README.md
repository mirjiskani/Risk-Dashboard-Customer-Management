# Risk Dashboard & Customer Management System

A high-performance, full-stack application featuring an interactive **Risk Dashboard** and a comprehensive **Customer Management** interface. This project serves as a showcase of clean code, scalability, and modern architectural patterns, utilizing **Angular** for the frontend, **NestJS** for the backend, and **MongoDB** as the database layer.

---

## 🚀 Key Features

*   **Risk Dashboard:** Real-time data visualization of financial, operational, or account-level risk metrics with interactive filtering.
*   **Customer Management (CMS):** Full CRUD module for managing customer profiles, risk tier classification, and historical assessment logs.
*   **Advanced Data Aggregation:** Efficient MongoDB aggregation pipelines to serve optimized, real-time analytics to the dashboard.
*   **Role-Based Access Control (RBAC):** Secure JWT-driven authentication with route guards protecting sensitive financial and risk-mutation operations.

---

## 🛠️ Architecture & Tech Stack

The system is engineered following **SOLID principles**, strict typing, and a decoupled architecture to ensure high maintainability and straightforward testability ($TDD$ ready).

### Frontend
*   **Framework:** Angular (v17+) using standalone components and signals for optimized reactivity.
*   **State Management:** RxJS for reactive data streaming and declarative event handling.
*   **UI/UX:** Responsive layout built with Tailwind CSS / Angular Material, featuring clean data tables and charts.

### Backend
*   **Framework:** NestJS (Node.js) leveraging its native modular architecture and powerful Dependency Injection container.
*   **Database:** MongoDB via Mongoose ODM for scalable, schema-based document modeling.
*   **Security & Validation:** `class-validator` and DTOs for strict request-runtime validation, paired with Passport-JWT for secure sessions.

---

## 📂 Repository Structure

```text
├── backend/          # NestJS application (Modules, Controllers, Services)
├── frontend/         # Angular application (Components, Services, State)
├── docker-compose.yml# Multi-container local orchestration
└── README.md
