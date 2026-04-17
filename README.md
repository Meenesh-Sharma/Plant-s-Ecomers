# 🌿 Urban Sprout — Modern Plant E-Commerce Platform

Urban Sprout is a **full-stack e-commerce platform** built for plant lovers 🌱.
It provides a seamless experience for users to explore, purchase, and learn about plants, while giving admins powerful tools to manage the platform.

---

## 🚀 Tech Stack

### 🖥️ Frontend

* **Next.js (Latest)**
* **React**
* **ShadCN UI**
* **Tailwind CSS**

### ⚙️ Backend

* **Node.js**
* **Express.js**

### 🗄️ Database

* **MongoDB**

### ☁️ Services & Tools

* **Cloudinary** → Image upload & optimization
* **Socket.IO** → Real-time notifications
* **JWT Authentication** → Secure login system

---

## 📁 Project Structure

```
Urban-Sprout/
│
├── frontend/   → User-facing e-commerce website
├── admin/      → Admin dashboard (full control panel)
├── backend/    → APIs, database logic, authentication
│
└── README.md
```

---

## 🌟 Features

### 🛒 User Features (Frontend)

* Browse and explore plants 🌿
* View detailed plant information
* Add to cart & place orders
* Responsive modern UI
* Smooth shopping experience

---

### 🧑‍💼 Admin Features (Dashboard)

* 🌱 **Plant Management (CRUD)**
* 📘 **Care Guide Management**
* 🔔 **Real-time Notifications (Socket.IO)**
* 📊 **Analytics Dashboard**

  * Monthly revenue charts
  * Sales insights
* 📦 Order management

---

## 🎨 UI/UX Highlights

* Built with **ShadCN UI + Tailwind CSS**
* Clean, modern, and responsive design
* Smooth animations & interactions
* Professional dashboard layout

---

## ⚡ Real-Time Features

* Instant notifications using **Socket.IO**
* Live updates for admin activities

---

## ☁️ Image Handling

* Integrated with **Cloudinary**
* Optimized image upload & delivery
* Fast and scalable media management

---

## 🔐 Authentication

* Secure login/signup system
* Role-based access (Admin / User)
* JWT-based authentication

---

## 📊 Admin Analytics

* Revenue tracking (monthly)
* Visual charts for better insights
* Business performance monitoring

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/urban-sprout.git
cd urban-sprout
```

### 2️⃣ Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env` file in backend:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
PORT=5000
ALLOWED_ORIGINS=http://localhost:3560,http://localhost:3566
JWT_SECRET
```

---
Create `.env.local` file in fronted and admin:
In frontend:
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
In admin:
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000

### 4️⃣ Run the project

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

#### Admin Panel

```bash
npm run dev
```

---

## 🌍 Future Enhancements

* Payment gateway integration 💳
* Wishlist feature ❤️
* AI-based plant recommendations 🤖
* Mobile app version 📱

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork and submit a PR.

---

## 📌 Author

**Sachin**
Full Stack Developer 💻

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---

## 📸 Preview

> Add screenshots of your project here for better presentation.

---

### 🌿 Urban Sprout — Grow Your Space, Naturally

For ui setup in frontend and admin :
 npx shadcn-ui@latest init
 npx shadcn@latest add avatar badge button card checkbox dialog drawer dropdown-menu   input  label radio-group select scroll-area separator sheet skeleton slider tabs textarea toggle-froup toggle
 

