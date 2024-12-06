# Shop Order Management System (Backend)

This project is the **backend application** for managing shop orders. It includes a system for processing order submissions and a backend dashboard for managing pre-orders. The backend focuses on providing secure, scalable, and efficient functionalities to support a shop order management system.

## Features

### 1. Form Input
- Fields for **Name**, **Email**, and **Product Selection** via a dropdown menu.
- Conditional logic to add a **Phone** field for emails ending with `@xyz.com`.

### 2. reCAPTCHA Integration *(Pending)*
- Integration of **Google reCAPTCHA** to prevent bot submissions and ensure security.

### 3. Form Submission Rate Limiting
- Limits form submissions to a maximum of **10 per minute** to manage traffic and prevent abuse.

### 4. Database Validation
- Ensures data consistency and accuracy by validating form data before saving it to the database.

### 5. Admin Dashboard
- Backend dashboard displaying all pre-orders. <!-- in a **list view**. -->
- Features:
  - **Search** functionality. *(Pending)*
  - **Pagination** for easy navigation.
  - **Ordering** capabilities for improved management.

### 6. Role-Based Access
- Two user roles:
  - **Admin**: Full access to the dashboard and data.
  - **Manager**: View-only access for monitoring.

### 7. Optimized Search *(Pending)*
- Allows searching by **email** and **name**.
- Implements indexing and optimized queries for fast and efficient search performance.

---

## Requirements

- **Node.js**: v16.x or higher
- **MongoDB**: v4.2 or higher

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rahat-003/Shop-Order-Management-System.git

2. Navigate to the backend directory:
   ```bash
    cd backend
    npm install
    npm run dev


