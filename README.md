# Language Practice

This repository documents my structured learning of programming languages using **official documentation and hands-on examples**.  
It serves as both my **personal study log** and a **reference library** I can revisit when building real projects.

---

## 01. Learning Philosophy

I learn each language **from first principles**, following its official guides (e.g. MDN for JavaScript, TypeScript Handbook, React Docs).  
Every folder focuses on *practical understanding over memorization* — each concept is paired with runnable code examples and concise notes written in my own words.

> “Don’t just read the docs — reproduce them.”

---

## 02. Folder Structure

| Folder | Source | Focus |
|--------|---------|-------|
| `javascript-foundations/` | [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | Syntax, flow control, functions, async, prototypes, modules |
| `typescript-foundations/` | [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) | Type system, generics, interfaces, utility types |
| `react-practice/` | [React Official Docs](https://react.dev/learn) | Components, hooks, state management, rendering |
| `notes/` | — | Concept summaries, debugging lessons, gotchas |

Each folder contains:
- `.js` / `.ts` / `.jsx` files → short, runnable examples  
- `readme.md` → concept explanations + takeaways  
- Clean commit messages following the [Conventional Commits](https://www.conventionalcommits.org/) format

---

## 03. Example Commit Messages
- feat(js): add example of closure with counter
- fix(react): correct dependency in useEffect
- docs(ts): explain difference between interface and type
- refactor(js): simplify async/await demo

---

## 04. Learning Goals

- Build deep, language-level intuition (not just syntax familiarity)  
- Practice debugging and refactoring early  
- Maintain readable, documented examples for future reference  
- Prepare for technical interviews and production-level engineering

---

## 05. Progress Overview

| Language | Status | Focus Area |
|-----------|---------|-------------|
| JavaScript | 🟩 In Progress | Intermediate / Advanced topics |
| TypeScript | ⬜ Planned | Core types and interfaces |
| React | ⬜ Planned | Component patterns and hooks |

---

## 06. How to Run

Clone the repo and run examples locally:
```bash
git clone https://github.com/idra-hsieh/language-practice.git
cd javascript-foundations/02-intermediate
node example.js

