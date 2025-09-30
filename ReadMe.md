# **Taskly-Frontend**

```markdown
- Frontend Live Demo: [https://Taskly-Frontend.netlify.app](https://Taskly-Frontend.netlify.app)

# Taskly–Frontend

**Taskly App Frontend** provides the user interface for MyTodo, allowing users to register, login, and manage their tasks. Built with **HTML, CSS, and JavaScript**, it communicates with the backend API.

---

## **Features**

- Register and login with JWT authentication  
- Add and delete tasks  
- View tasks specific to the logged-in user  
- Clean and responsive interface  

---

## **Tech Stack**

- HTML, CSS, JavaScript  
- Connects to Node.js + Express backend API  

---

## **Folder Structure**

Taskly-Frontend/
├── index.html # To-Do page
├── login.html # Login page
├── register.html # Registration page
├── style.css # Styling
├── auth.js # Login & Register logic
├── script.js # To-Do CRUD logic
└── .gitignore

yaml
Copy code

---

## **Setup & Usage**

1. Clone the frontend repo:
```bash
git clone https://github.com/<AdinathJabade>/Taskly-Frontend.git
cd mytodo-frontend
Open HTML files in a browser (or use Live Server in VS Code)

Update backend URLs in auth.js and script.js:

javascript
Copy code
const backendUrl = "https://Taskly-Backend.onrender.com/api/auth"; // login/register
const backendUrlTodos = "https://Taskly-Backend.onrender.com/api/todos"; // tasks
Register, login, and manage your tasks.

Deployment
Push frontend repo to GitHub

Deploy on Netlify (or Vercel)

Publish directory: ./

Example frontend URL: https://Taskly-Frontend.netlify.app

Contributing
Fork the repo

Create a feature branch: git checkout -b feature/YourFeature

Commit changes: git commit -m "Add feature"

Push branch: git push origin feature/YourFeature

Open a pull request

License:
MIT License

Contact:

GitHub: https://github.com/<AdinathJabade>
Email: <adijabade5@gmail.com>

yaml
Copy code

---









