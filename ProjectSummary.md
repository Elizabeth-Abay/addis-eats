# Addis-Eats — Capstone Brief

## 1. Project Overview & Brief

### Vision & Objective
Addis-eats is a front-end web application built to streamline the digital dining and online ordering experience. 
The app delivers a modern, user-friendly interface that enables customers to explore daily promotions, browse a full digital menu, 
customize orders, manage a live shopping cart, and register for a user account using email or phone number.

### Key Features
* **Landing & Featured Specials (`/`:** Interactive hero section showcasing chef specials,where users can filter those based on categories.
* **Categorized Digital Menu (`/menu`):** Filterable food and beverage categories with item cards detailing ingredients, pricing, and customization options 
(`/item/:id` to customize your order for the food ).
* **Real-Time Shopping Cart (`/cart`):** Dynamic cart drawer and page allowing users to update item quantities, apply promo codes, and view calculated subtotals and taxes.
* **Simulated Checkout Flow (`/checkout`):**  order verification form collecting delivery details, simulated payment input, and rendering an order summary receipt on ('/thank-you' page).
* **Account Registration & Authentication (`/my-account`):** User registration form using email or phone number.

### Tech Stack & Architecture
* **Framework:** React
* **Routing:** React Router v6 (declarative client-side routing)
* **State Management:** React Context API & `useReducer` and Zustand for global cart and authentication state
* **Styling:** CSS Modules

---

## 2. Application Route Map

The tree diagram and table below illustrate the application's page structure. All routes are wired into persistent primary navigation (Header and Footer) to guarantee full reachability across the application scaffold.

```
                          ┌──────────────────────┐
                          │     Home Page        │
                          │        (/)           │
                          └──────────┬───────────┘
                                     │
      ┌──────────────────┬───────────┴───────────┬──────────────────┐
      │                  │                       │                  │
      ▼                  ▼                       ▼                  ▼
    │   /menu   │           │   /cart   │      │ /my-account  │
    
                   │ /item/:id │           │ /checkout │ 
                                       │  /thank-you   │    | /item-not-found-page|


| Route Path | Screen Name | Component / Purpose | Key Navigation & Interactivity |
| :--- | :--- | :--- | :--- |
| `/` | Specials  | Daily Specials | `SpecialsScreen` — Limited-time deals | Direct "Add to Cart" actions & detail triggers |
| `/menu` | Full Menu | `MenuScreen` — Filterable items grid | Category filter tabs, item selection triggers|
| `/item/:id` | Item Detail View | `ItemDetailModal` / `ItemScreen` | Quantity selectors, ingredient add-ons, "Add to Cart" |
| `/cart` | Shopping Cart | `CartScreen` — Itemized order view | Modify item quantities, remove items, link to `/checkout` |
| `/checkout` | Checkout | `CheckoutScreen` — Customer info & payment | Client validation, submit order triggers `/thank-you` |
| `/thank-you` | Order Complete | `ConfirmationScreen` — Receipt summary | Displays order ID, estimated delivery time,
| `/register` | Registration | `RegisterScreen` — User sign-up | Account creation form with live input validation |
| `/item-not-found` | 404 Not Found | `NotFoundScreen` — Fallback error screen | Provides immediate link back to Home (`/`) |


## 3. Running the Scaffold Locally

Follow these instructions to clone, install dependencies, and run the project locally.

### Prerequisites
* Node.js (`v18.0.0` or higher)
* npm (`v9.0.0` or higher) or yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Elizabeth-Abay/addis-eats/
   cd addis-eats
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```

4. **Verify Route Reachability:**
   Open your browser to `http://localhost:5173` . Use the main navigation menu in the footer to click through each screen (`/`, `/menu`, `/cart`, `/my-account`) to confirm all scaffold pages render properly without breaking.
