const fmt = (n) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function SummaryCards({ stats }) {
  const cards = [
    { label: "Balance", value: fmt(stats.balance), sub: "This month", accent: "#7c6af5", positive: true },
    { label: "Income", value: fmt(stats.income), sub: "Total in", accent: "#4ade80", positive: true },
    { label: "Expenses", value: fmt(stats.expenses), sub: "Total out", accent: "#f87171", positive: false },
    { label: "Savings Rate", value: `${Math.round((stats.balance / stats.income) * 100)}%`, sub: "Of income", accent: "#60a5fa", positive: true },
  ];

  return (
    <div className="cards-grid">
      {cards.map((card) => (
        <div key={card.label} className="card" style={{ "--card-accent": card.accent }}>
          <span className="card-label">{card.label}</span>
          <span className="card-value">{card.value}</span>
          <span className="card-sub">{card.sub}</span>
          <div className="card-glow" />
        </div>
      ))}
    </div>
  );
}
