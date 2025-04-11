# ✅ GitHub Copilot Instructions for React + Express Full Stack Projects

- Color-Palette: Black or white silver for lettering and for the app color scheme utilize the lch already being used buttons and links. 
You are tasked with generating a **reusable and scalable React component**.

Use:
- Framework: React (JSX)
- Styling: expertly structured css utlizing web dev best practices
- State Management: React hooks (`useState`, `useEffect`)

Before generating the component, clarify the following if not provided:
- What is the name and purpose of the component?
- What data props (if any) should be accepted?
- Does it need user interaction (e.g., input, modal toggle)?

Guidelines:
- Use functional components only
- Prioritize clean layout and reusability
- Apply responsive classes for mobile and desktop views
- Ensure minimal logic duplication and maximize readability
- Ensure concise and educational comments throughout application explaining logic and syntax for students

Examples:
- Form component with user input and validation
- Modal that accepts visibility and dynamic content via props
- Image gallery component with automatic rotation and manual controls

## 🚀 General Code Generation
- Always use React functional components (no class components).
- Always use React hooks like `useState`, `useEffect` appropriately.
- All styling must use TailwindCSS.
- Use 2-space indentation and single quotes in JSX and JS.
- Generated files must contain a top-level comment: `// path to app.jsx from that file `.
- Use `import` statements for all dependencies and components.
- Use `export default` for components and named exports for utility functions.
- Always update a paths file when creating a new component or utility function. (generate one at root level of the project if there isn't already one)


## 🖥️ Frontend (React)
- Decompose logic into clean, reusable hooks and components.
- Maintain strict separation of UI and logic.
- Prefer semantic Tailwind utility classes and avoid inline styles.
- Always use prop-types or TypeScript interfaces where appropriate.

## 🔐 Backend (Express)
- Always use `async/await` syntax — avoid `.then()` chaining.
- Modularize code by separating routes, controllers, services.
- Implement JWT authentication and token verification.
- Input validation and error handling must be present in every route.


## 📋 Code Review or any time /fix is used.
- Check for unused imports, variables, and side effects.
- Flag inconsistent naming, unhandled promises, and hardcoded values; suggest clear solutions.
- Ensure hooks and component lifecycles follow React best practices.
- Validate that all API routes are properly documented and have helpful comments

## 📜 Commit Messages
- Follow this commit format: `<type>(scope): description`  
  Example: `feat(auth): add JWT middleware to API routes`
- Use semantic prefixes: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- Capitalize the description and do not end with a period.
