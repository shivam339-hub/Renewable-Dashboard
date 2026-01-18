# Frontend Developer Intern – Take Home Assignment

This project is a pixel-perfect implementation of the provided Figma design using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
The main focus of this assignment is building a **custom, data-heavy table** with complex UI logic **without using any external table libraries**.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui

---

## 📦 Features Implemented

- Pixel-perfect desktop UI based on Figma
- Fully responsive mobile adaptation
- Custom-built table (no table libraries used)
- Sticky first column with horizontal scrolling
- Global search across all table data
- Sorting (ascending/descending) on all columns
- Clean, modular, and reusable component architecture

---

## 🛠️ Running the Project Locally

Follow the steps below to run the project locally:

```bash
git clone https://github.com/shivam339-hub/Renewable-Dashboard.git
cd Renewable-Dashboard
npm install
npm run dev


Approach:

Used position: sticky with left: 0 on the first column cells

Managed z-index carefully to avoid overlap issues during horizontal scrolling

Applied explicit background colors to sticky cells to prevent transparency artifacts

Enabled horizontal scrolling using overflow-x-auto on the table container

This ensures the first column remains fixed while scrolling horizontally, maintaining row context without layout shifts.

🎨 Design Adaptation & Thought Process

The provided Figma file included only a desktop design, so the mobile experience was thoughtfully adapted.

Design Decisions:

Desktop view was implemented pixel-perfectly by matching spacing, typography, and colors from Figma

Responsive typography and spacing were applied using Tailwind’s breakpoint utilities

On mobile devices, the table remains horizontally scrollable to preserve data density

The sticky first column remains active on mobile to ensure usability and context

Challenges Faced:

.Preventing overlap and flickering issues with sticky columns

.Implementing sorting and global search logic from scratch

.Ensuring good usability on mobile without a dedicated mobile design

.Maintaining clean architecture while handling complex table logic
