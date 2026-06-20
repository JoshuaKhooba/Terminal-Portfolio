import { cn } from "@/lib/utils";
interface CardProps { className?: string; children: React.ReactNode; hover?: boolean; }
export function Card({ className, children, hover = true }: CardProps) {
  return (
    <div className={cn(
      "glass rounded-xl p-6 transition-all duration-300",
      hover && "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1",
      className
    )}>
      {children}
    </div>
  );
}
