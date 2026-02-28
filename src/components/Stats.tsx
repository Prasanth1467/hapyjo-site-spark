import { FLEET_STATS } from "@/lib/constants";

const items = [
  { value: FLEET_STATS.machines, label: "Machines Available" },
  { value: FLEET_STATS.trucks, label: "Transport Trucks" },
  { value: "24/7", label: "Deployment Ready Today" },
  { value: "24/7", label: "Active Site Support" },
];

const Stats = () => {
  return (
    <section className="border-y border-stone-dark bg-stone py-6 sm:py-8" aria-label="Fleet credibility">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8">
          {items.map(({ value, label }) => (
            <div
              key={label}
              className="border-steel/20 text-center md:border-r md:border-r-steel/30 md:pr-8 last:md:border-r-0 last:md:pr-0"
            >
              <p className="font-heading text-xl font-bold text-navy sm:text-2xl md:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wider text-steel sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
