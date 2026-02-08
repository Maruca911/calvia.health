interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-3">
        {labels.map((label, i) => (
          <span
            key={label}
            className={`text-xs font-medium transition-colors ${
              i <= currentStep ? 'text-white' : 'text-white/40'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
