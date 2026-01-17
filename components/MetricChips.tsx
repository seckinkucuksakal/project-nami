interface Metric {
  value: string;
  label: string;
}

interface MetricChipsProps {
  metrics: Metric[];
}

export function MetricChips({ metrics }: MetricChipsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="rounded-lg border bg-card p-6 text-center shadow-sm"
        >
          <div className="text-2xl font-bold text-primary sm:text-3xl">
            {metric.value}
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

