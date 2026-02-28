import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const Contact = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-background py-16 sm:py-20 lg:py-24 ${isVisible ? "opacity-100" : ""}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-equipment-yellow">
            Deployment &amp; Support
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Request Project Logistics Plan
          </h2>
          <div className="divider-industrial mx-auto mt-4" />
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground">{COMPANY.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-equipment-yellow">
              {COMPANY.tagline}
            </p>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Ready to bring control and reliability to your operations?
              Reach out and let us discuss how HapyJo can support your next project.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-steel shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="font-medium text-foreground hover:underline">
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-steel shrink-0" />
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="font-medium text-foreground hover:underline">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-steel shrink-0 mt-0.5" />
                <span>
                  {COMPANY.address.country}, {COMPANY.address.province}, {COMPANY.address.district}, {COMPANY.address.sector}, {COMPANY.address.location}
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-border bg-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-semibold text-foreground">
                  Full Name
                </label>
                <input
                  id="fullName"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-foreground">
                  Company Name
                </label>
                <input
                  id="company"
                  placeholder="Your company"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
                />
              </div>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+250 ..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
                />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <label htmlFor="service" className="text-sm font-semibold text-foreground">
                Service Required
              </label>
              <select
                id="service"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
              >
                <option value="">Select a service</option>
                <option value="site-support">Construction Site Support</option>
                <option value="fleet">Fleet Logistics Management</option>
                <option value="rentals">Heavy Equipment Rentals</option>
                <option value="transport">Workforce Transport</option>
                <option value="machinery">Machinery Deployment</option>
                <option value="material">Material Handling</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mt-5 space-y-2">
              <label htmlFor="message" className="text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
              />
            </div>
            <button
              type="submit"
              className="btn-cta mt-6 w-full min-w-0"
            >
              Request Project Logistics Plan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
