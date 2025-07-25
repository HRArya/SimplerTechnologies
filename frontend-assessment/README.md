# 🧑‍💻 Frontend Assessment Project – React + Vite + Tailwind CSS

This project is a submission for a frontend assessment. It demonstrates proficiency in React (with Vite), Tailwind CSS, and modern frontend development practices including routing, component reuse, form handling, and responsive design.

---

## 🔧 Tech Stack

- **React** (with Vite)
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **CSS Utility Classes for Styling**

---

## ✅ Implemented Tasks

### 🔹 Task 1: Sign-Up Page

**Objective:**  
Create a basic sign-up form with the following fields:
- Full Name  
- Email Address  
- Password  

**What I Did:**  
- Built a `SignUpForm` component using React and Tailwind CSS.
- Implemented **form validation** for empty fields and email format.
- Upon successful sign-up:
  - User data is stored in `localStorage`.
  - The app redirects to the home page.
  - A success message "Registered Successfully" is displayed.
- The page is styled with an **eye-soothing gradient background** and modern UI card layout.

---

### 🔹 Task 2: Navigation Bar

**Objective:**  
Build a responsive navigation bar with links:
- Home
- About
- Contact

**What I Did:**  
- Created a `Navbar` component with links to Home, About, and Contact pages.
- The navbar:
  - Adjusts layout for **mobile and desktop** using Tailwind breakpoints.
  - Displays the **logged-in user’s name** on the right side.
  - Includes a **logout button** that clears user data and returns to the sign-up page.
- Used `React Router` for navigation.

---

### 🔹 Task 3: `<UserCard />` Component

**Objective:**  
Create a reusable `<UserCard />` React component that accepts:
- `name`
- `email`  
as props and displays them in a card layout.

**What I Did:**
- Built a `UserCard` component styled with Tailwind CSS.
- Used it across different pages (e.g., Home and Users page).
- Demonstrated prop-driven rendering with user-specific data.

---

## 📁 Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── UserCard.jsx
├── pages/
│ ├── SignUpForm.jsx
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ └── UsersPage.jsx
├── App.jsx
└── main.jsx


---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/frontend-assessment.git
   cd frontend-assessment

   npm install

   npm run dev

