# 🤖 AI Code Review Assistant

A full-stack AI-powered web application that automates multi-language code reviews using LLMs. Developers receive real-time feedback, customize code standards, and download review reports — streamlining collaboration and improving code quality.

---

## 🚀 Features

- 🧠 **AI-Powered Code Reviews** using **DeepSeek LLM**
- ✍️ Customizable prompts for enforcing project-specific coding standards
- 🔄 **Real-time PR Collaboration** with **Socket.IO**
- 📄 Downloadable, human-readable quality reports for every review
- 🔐 Secure backend with **JWT Auth** and clean **MVC architecture**
- 🧪 Robust testing: **Vitest** + **MSW** for unit tests, **Playwright** for E2E tests
- ⚙️ Automated **CI/CD** with **GitHub Actions**
- 🌐 Cloud-deployed (e.g., Railway for backend, Vercel for frontend)

---

## 🧠 LLM Integration & Prompt Engineering

- Leveraged **DeepSeek LLM** to perform intelligent static code analysis
- Built prompt templates for:
  - Code quality assessment
  - Refactoring suggestions
  - Bug detection
  - Style/convention enforcement
- Applied **Prompt Engineering** to optimize response quality across languages (e.g., JavaScript, Python, Go)
- Enabled dynamic customization of prompt context per project or team

---

## 📦 System Architecture

![ai-code-review-flowchart drawio](https://github.com/user-attachments/assets/feb2e585-5c65-445a-9f6d-78acbaa15822)


- **Frontend**: React + Tailwind CSS for responsive, fast UI
- **Backend**: Express.js + MongoDB following **MVC pattern**
- **Real-time Communication**: Enabled via **Socket.IO**
- **Authentication**: Secure login and protected routes using **JWT**
- **API Layer**: RESTful design for clean integration with LLM and frontend

---

## 🧪 Testing & DevOps

- **Unit Testing**:
  - **Vitest** for component/unit logic
  - **MSW (Mock Service Worker)** to simulate backend APIs
- **End-to-End Testing**:
  - **Playwright** for simulating real-user flows and validating app behavior
- **CI/CD**:
  - GitHub Actions automates build, test, and deployment pipelines
  - Multi-environment support: dev, staging, production

---

## 🖥️ Tech Stack

| Frontend      | Backend       | AI & Tools        | DevOps / Infra      |
| ------------- | ------------- | ----------------- | ------------------- |
| React         | Express.js    | DeepSeek LLM      | GitHub Actions      |
|               | MongoDB       | Prompt Engineering| Railway / Vercel    |
| Axios, Socket.IO | JWT, MVC  | Vitest, Playwright, MSW (Mocking) |       |

---

## 📷 Preview


https://github.com/user-attachments/assets/c8950c5b-f9d1-48ec-8cea-38345e1c81f9


---

## 📂 Future Enhancements

- 🧩 GitLab PR integration for auto-review comments
- 📌 User dashboard for review history and analytics
- 🧠 Plugin system to support more LLMs (Claude, Gemini, GPT-4)
