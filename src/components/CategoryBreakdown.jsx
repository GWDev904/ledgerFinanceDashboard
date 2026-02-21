const fmt = (n) => `$${n.toFixed(0)}`;

export default function CategoryBreakdown({ categories }) {
  const total = categories.reduce((s, c) => s + c.value, 0);

  return (
    <div className="chart-card">
      <div className="chart-header">
        <span className="chart-title">By Category</span>
        <span className="chart-sub">{fmt(total)} total</span>
      </div>
      <div className="category-list">
        {categories.map((cat) => (
          <div key={cat.name} className="category-row">
            <div className="cat-left">
              <span className="cat-dot" style={{ background: cat.color }} />
              <span className="cat-name">{cat.name}</span>
            </div>
            <div className="cat-right">
              <div className="cat-bar-track">
                <div
                  className="cat-bar-fill"
                  style={{ width: `${(cat.value / total) * 100}%`, background: cat.color }}
                />
              </div>
              <span className="cat-amount">{fmt(cat.value)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
