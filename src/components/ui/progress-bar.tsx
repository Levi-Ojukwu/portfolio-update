interface ProgressBarProps {
    value: number
    className?: string
  }
  
  export function ProgressBar({ value, className }: ProgressBarProps) {
    return (
      <div className={`progress-bar ${className || ""}`}>
        <div className="progress-bar-fill" style={{ width: `${value}%` }} />
      </div>
    )
  }
  
  