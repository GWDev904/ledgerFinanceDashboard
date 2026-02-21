# ◈ Ledger — Personal Finance Dashboard

A sleek personal finance dashboard built with React. Track your income, expenses, and spending habits across categories — all from a clean, data-rich interface.

**[🚀 Live Demo](https://your-vercel-url.vercel.app)** &nbsp;|&nbsp; Built by [Garrett Walker](https://github.com/GWDev904)

---

## Features

- 💳 **Summary cards** — Balance, Income, Expenses, Savings Rate at a glance
- 📊 **Daily spending bar chart** — custom-built without external chart libraries
- 🗂️ **Category breakdown** — proportional bars for each spending category
- 📋 **Transaction list** — filterable by All / Income / Expense
- 🎨 Dark, data-dense dashboard aesthetic with color-coded categories

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| useState / useMemo | State & derived data computation |
| CSS Custom Properties | Theming & design tokens |
| Intl.NumberFormat | Currency formatting |
| Vite | Build tooling |

## Getting Started

```bash
git clone https://github.com/GWDev904/ledger-finance-dashboard.git
cd ledger-finance-dashboard
npm install
npm run dev
```

## Key React Concepts Demonstrated

- **useMemo** for expensive derived computations (totals, category rollups, filtered lists)
- **Component composition** — dashboard assembled from focused, reusable panels
- **Props** passing complex data structures between components
- **Array methods** — filter, reduce, sort for data transformation
- **Conditional styling** — dynamic class names and inline style bindings
- **Data modeling** — clean separation of mock data from UI components

## Project Structure

```
src/
├── App.jsx                     # Root layout, state, derived data
├── index.css                   # Design system & component styles
├── data/
│   └── transactions.js         # Mock transaction data & category colors
└── components/
    ├── SummaryCards.jsx        # 4-up KPI card row
    ├── SpendingChart.jsx       # Custom bar chart by day
    ├── CategoryBreakdown.jsx   # Category proportional bars
    └── TransactionList.jsx     # Filterable transaction feed
```

---

*Part of a 3-project React portfolio. See also: [Focus Task Manager](#) · [Community Feed](#)*
