import { CATEGORY_COLORS } from "../data/transactions";

const fmt = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(Math.abs(n));

const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });

export default function TransactionList({ transactions }) {
  return (
    <div className="tx-card">
      <div className="chart-header">
        <span className="chart-title">Transactions</span>
        <span className="chart-sub">{transactions.length} entries</span>
      </div>
      <div className="tx-list">
        {[...transactions].reverse().map((tx) => (
          <div key={tx.id} className="tx-row">
            <div
              className="tx-icon"
              style={{ background: CATEGORY_COLORS[tx.category] + "22", color: CATEGORY_COLORS[tx.category] }}
            >
              {tx.category.slice(0, 1)}
            </div>
            <div className="tx-info">
              <span className="tx-desc">{tx.description}</span>
              <span className="tx-meta">{tx.category} · {formatDate(tx.date)}</span>
            </div>
            <span className={`tx-amount ${tx.type}`}>
              {tx.type === "income" ? "+" : "−"}{fmt(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
