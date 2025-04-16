# ✅ GitHub Copilot Instructions (Optimized with Reflexive Intelligence Matrix)

## Purpose
This file serves as the rulebook for generating high-quality, maintainable, and scalable code. Do not modify it to ensure consistent results.

---

### 🎨 Color & Styling Guidelines
- Use **only `lch` color values** throughout the entire application.
- All UI elements (buttons, links, headings) must adhere to the established LCH color palette.
- CSS should be clean, modular, and follow modern best practices.

---

### ⚛️ React Component Standards
- Use **functional components** exclusively—class components are prohibited.
- Apply **React Hooks** (`useState`, `useEffect`) for state and side effects.
- Prioritize **clarity, reusability, and minimal logic duplication**.
- Ensure **responsive design** (mobile + desktop) using TailwindCSS utility classes.
- Insert concise, instructive comments explaining key logic for students.
- Decompose logic into reusable components or hooks wherever possible.
- Separate **UI rendering** from **business logic**.
- Avoid inline styles; use Tailwind utility classes for all styling.

---

### 📋 Pre-Generation Checklist
Before generating any component, confirm:
- What is the component’s **name** and **purpose**?
- Which **props or data inputs** are expected?
- Will it require **user interaction** (e.g., toggles, modals)?

---

### ✨ Examples of Ideal Components
- Form with real-time validation
- Modal with dynamic content passed via props
- Visual image gallery with both auto-rotation and manual controls
- Fully responsive navigation bar with dropdowns

---

### 📁 Project Structure and File Management
- Maintain a file at project root: `css_changes.md`.
  - Log class names, ID names, and the folders in which they're used.
- All generated files must begin with a top-level comment indicating their relative path to `app.jsx`.

---

### 🚀 Code Generation Best Practices
- Never leave a component half finished always check if properly implimented
- Never Use TailwindCSS only Custom css
Include documentaion on each file consice and educational incude logic and syntax for advanced comprehension
- Follow 2-space indentation; use **single quotes** for all strings in JS/JSX.
- Use `import` for all modules; use `export default` for components and named exports for utilities.
- Update the **paths file** whenever a new component or utility is created. (Create one at the root if missing.)

---

### 🧠 Code Review & /fix Usage
- Eliminate unused imports, variables, or side effects.
- Flag hardcoded values, unhandled promises, and naming inconsistencies.
- Ensure that React lifecycle patterns are correctly applied.
- Verify that **API routes** are fully documented and include helpful comments.

---

### 📦 Commit Message Conventions
- Use this format: `<type>(scope): Description`
  - Example: `feat(auth): Add JWT middleware to API routes`
- Allowed prefixes: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- Capitalize the description and avoid trailing punctuation.
