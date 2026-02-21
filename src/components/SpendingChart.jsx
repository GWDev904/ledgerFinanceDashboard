import { useMemo } from "react";

export default function SpendingChart({ transactions }) {
  const bars = useMemo(() => {
    const map = {};
    transactions.filter((t) => t.type === "expense").forEach((t) => {
      const day = t.date.slice(8);
      map[day] = (map[day] || 0) + Math.abs(t.amount);
    });
    const entries = Object.entries(map).sort((a, b) => a[0].localeCompare(b[0]));
    const max = Math.max(...entries.map(([, v]) => v));
    return entries.map(([day, value]) => ({ day, value, pct: (value / max) * 100 }));
  }, [transactions]);

  return (
    <div className="chart-card">
      <div className="chart-header">
        <span className="chart-title">Daily Spending</span>
        <span className="chart-sub">Feb 2026</span>
      </div>
      <div className="bar-chart">
        {bars.map(({ day, value, pct }) => (
          <div key={day} className="bar-col" title={`Feb ${day}: $${value}`}>
            <div className="bar-fill" style={{ height: `${pct}%` }} />
            <span className="bar-label">{parseInt(day)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
