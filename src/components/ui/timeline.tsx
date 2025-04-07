interface TimelineItem {
    title: string
    description: string
  }
  
  interface TimelineProps {
    items: TimelineItem[]
  }
  
  export function Timeline({ items }: TimelineProps) {
    return (
      <div className="bg-card/80 border border-border/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
        {items.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <h4 className="text-lg font-semibold mb-2 font-heading">{item.title}</h4>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    )
  }
  
  