# Healthcare Portal

Welcome to the **Healthcare Portal** repository!
---

## 🚀 Features

- **Home Page**: 
  - The main entry point for the application, introducing the healthcare portal.
  - [File: Home.js](src/pages/Home.js)

- **Login Page**:
  - Secure login for both doctors and patients.
  - Ensures role-based redirection after successful login.
  - [File: Login.js](src/pages/Login.js)

- **Register Page**:
  - Role-based registration forms for doctors and patients.
  - Includes dynamic fields and form validation.
  - [File: Register.js](src/pages/Register.js)

- **Doctor Dashboard**:
  - Comprehensive interface for doctors to manage appointments and view recent patients.
  - Includes navigation to Patient List, Appointments, and Messages.
  - [File: DoctorDashboard.js](src/pages/DoctorDashboard.js)

---

## 🛠️ Tech Stack

- **Frontend**:
  - React.js with Material-UI for responsive and modern UI components.

- **Backend**:
  - Node.js with Express.js for API services.
  - JWT-based authentication using HTTP-only cookies.

- **Database**:
  - MongoDB (or your backend's chosen database).

- **Deployment**:
  - Backend: Render.

---

## 📂 Directory Structure
. ├── src/ │ ├── pages/ │ │ ├── Home.js │ │ ├── Login.js │ │ ├── Register.js │ │ ├── DoctorDashboard.js │ 
├── api/ │ │ └── Api.js │ ├── App.js │ ├── theme.js │ └── index.js ├── public/ │ ├── index.html │ ├── doctor.jpg │ └── bayer_logo.png └── README.md

---

## ⚙️ Setup Instructions

### **1. Clone the Repository**
```bash
git clone https://github.com/rldarshan/squad_2_frontend.git
cd squad_2_frontend

### **2. Install Dependencies**
bash
npm install

### **3. Start the Development Server**
bash
npm start

