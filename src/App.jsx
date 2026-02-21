import { useState, useMemo } from "react";
import { transactions, CATEGORY_COLORS } from "./data/transactions";
import SummaryCards from "./components/SummaryCards";
import SpendingChart from "./components/SpendingChart";
import TransactionList from "./components/TransactionList";
import CategoryBreakdown from "./components/CategoryBreakdown";

export default function App() {
  const [filter, setFilter] = useState("all");

  const stats = useMemo(() => {
    const income = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
    const expenses = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + Math.abs(t.amount), 0);
    return { income, expenses, balance: income - expenses };
  }, []);

  const categoryTotals = useMemo(() => {
    const map = {};
    transactions.filter((t) => t.type === "expense").forEach((t) => {
      map[t.category] = (map[t.category] || 0) + Math.abs(t.amount);
    });
    return Object.entries(map)
      .map(([name, value]) => ({ name, value, color: CATEGORY_COLORS[name] || "#888" }))
      .sort((a, b) => b.value - a.value);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "income") return transactions.filter((t) => t.type === "income");
    if (filter === "expense") return transactions.filter((t) => t.type === "expense");
    return transactions;
  }, [filter]);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">◈</span>
          <span>Ledger</span>
        </div>
        <nav className="nav">
          {["Overview", "Transactions", "Budget", "Reports"].map((item, i) => (
            <button key={item} className={`nav-item ${i === 0 ? "active" : ""}`}>{item}</button>
          ))}
        </nav>
        <div className="sidebar-footer">Feb 2026</div>
      </aside>

      <main className="main">
        <header className="top-bar">
          <div>
            <h1 className="page-title">Overview</h1>
            <p className="page-sub">February 2026 · Personal Account</p>
          </div>
          <div className="filter-pills">
            {["all", "income", "expense"].map((f) => (
              <button
                key={f}
                className={`pill ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </header>

        <SummaryCards stats={stats} />

        <div className="charts-row">
          <SpendingChart transactions={transactions} />
          <CategoryBreakdown categories={categoryTotals} />
        </div>

        <TransactionList transactions={filtered} />
      </main>
    </div>
  );
}
