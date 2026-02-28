import { useEffect, useState, useRef } from "react";
import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { Users, Truck, Briefcase, Calendar } from "lucide-react";

const stats = [
  { icon: Users, value: 128, label: "Employees", suffix: "" },
  { icon: Truck, value: 64, label: "Active Fleet Units", suffix: "" },
  { icon: Briefcase, value: 210, label: "Projects Supported", suffix: "+" },
  { icon: Calendar, value: 8, label: "Years in Operation", suffix: "" },
];

function useCounter(end: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isVisible, end, duration]);

  return count;
}

const StatCard = ({ icon: Icon, value, label, suffix, isVisible }: {
  icon: typeof Users; value: number; label: string; suffix: string; isVisible: boolean;
}) => {
  const count = useCounter(value, isVisible);
  return (
    <div className="text-center p-8">
      <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 text-accent">
        <Icon size={26} />
      </div>
      <p className="font-serif text-4xl font-bold text-primary sm:text-5xl">
        {count}{suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} bg-secondary py-20 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {stats.map((s) => (
            <StatCard key={s.label} {...s} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
