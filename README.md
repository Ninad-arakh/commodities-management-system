

# 📦 Commodities Management System 

A fully implemented **role-based commodities management system** built as part of the Slooze Frontend Take-Home Challenge.  
This repository simulates a small-scale inventory management system with **authentication**, **route protection**, **role-restricted actions**, **product CRUD operations**, and modern UI features.

---

## 🚀 Project Summary

This project implements the full feature set described in the challenge:

- Email/password **login authentication** (with a login popup showing mock credentials).  
- **Simulated backend** (mock API endpoints) that behave like real REST APIs.  
- **Role-based access control** for `Manager` and `Store Keeper`.  
- Full **CRUD** for products (create, read, update, delete).  
- **Route protection** and role-based menu restrictions.  
- **Light/Dark theme** with persistence to `localStorage`.  
- UI polish: responsive layout, animations, hover states, reusable components.  
- Session persistence using `localStorage`.

---

## 🧩 Features Implemented

### 1. Authentication & Session
- `POST /api/auth/login` — mock login endpoint.  
- Login popup provides test credentials for quick testing.  
- On successful login, store `token`, `role`, and `user` in `localStorage`.  
- Route guards redirect unauthorized users to the login page.

### 2. Role-Based Access
- Two roles: `Manager` and `Store Keeper`.  
- Managers have access to `/dashboard` and all admin features.  
- Store Keepers can view and manage products but are restricted from the manager dashboard.  
- UI menus and actions are shown/hidden or disabled based on the active role.

### 3. Products (CRUD)
- `GET /api/products` — fetch products list.  
- `POST /api/products` — add a new product.  
- `PUT /api/products/:id` — update product.  
- `DELETE /api/products/:id` — delete product.  
- Product model includes:  
  - `id`  
  - `productName`  
  - `description`  
  - `stock`  
  - `views`  
  - `pricing`  
  - `revenue`  
  - `category`  
  - `discount`  
  - `discountCategory`  
  - `tags` (keywords)

### 4. Dashboard (Manager Only)
- Overview cards: total products, categories, low-stock items, recent updates.  
- Charts and quick stats for managers.  
- Dashboard route blocked for non-managers.

### 5. UI & UX Enhancements
- Light/Dark mode toggle stored in `localStorage`.  
- Responsive layouts for mobile/tablet/desktop.  
- Reusable UI components: `Sidebar`, `Header`, `Modal`, `ProductCard`, `DataTable`, `ProtectedRoute`.  
- Smooth transitions and hover effects for buttons, cards, and inputs.

---

## 📁 Folder Structure (Suggested)
```

src/
├── app/ # Next.js  routes (login, dashboard, products, etc.)
│ ├── login/
│ ├── dashboard/
│ ├── products/
| ├-- api/
| | └── login/
| | └── products/
├── components/ # Reusable UI components
└── constants/ # Mock data, routes, sample product data

```


---

## 🔌 Mock API Behavior

- All mock endpoints simulate network latency and return realistic HTTP statuses.  
- Error handling demonstrates UI fallback states (toasts, inline errors).  
- Mock token is returned on `POST /api/auth/login` and required for protected endpoints in the simulation.

---

## ▶️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Ninad-arakh/commodities-management-system
cd commodities-management-system
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Start the development server:
```
npm run dev
# or
yarn dev
```

4. Open the app:
```
http://localhost:3000
```
---

## 🔑 Test Credentials (Shown in Login Popup)

###  1. Manager
```
email: manager@ninad.com
password: manager123
```

### 2. Store Keeper
```
email: store@ninad.com
password: store123
```