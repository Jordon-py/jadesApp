# 🧠 Copilot Rules-Based UI Audit & Custom CSS Enhancement Protocol

## 🎯 OBJECTIVE:
1. Analyze `copilot-instructions.md` as a layout and style compliance rulebook.
2. Audit the **entire codebase** for layout and CSS alignment (no Tailwind).
3. Apply enhancements to layout and custom CSS only.

---

## 📂 STEP 1: Rule Extraction
Extract frontend-relevant rules into a checklist.

📝 `checklist.md`  
```md
### Rule: <Short Rule Description>
- [x] Compliant in: <file paths>
- [ ] Violations in:
  - <file path>: Line XX → <Issue>
    → Suggested Fix: <concise suggestion>
```

---

## 🧪 STEP 2: UI & CSS Audit
Analyze:
- HTML/JSX layout structure (semantics, hierarchy, responsiveness)
- `.css`/`.scss` files for:
  - LCH-only colors
  - Class consistency
  - Modular naming

---

## 🛠️ STEP 3: Apply Enhancements

📝 `ui_structure_report.md`  
```md
## Component/Page: <filename>

### Change 1:
- Rule Violated: <rule>
- Before: `<snippet>`
- After: `<revised snippet>`
- Justification: <why it matters>
```

---

## 📌 RULES
- NO Tailwind usage
- Use only custom CSS
- LCH color model only
- No inline styles
- Maintain responsiveness

---

## 📤 OUTPUT FILES
- `checklist.md`
- `ui_structure_report.md`
