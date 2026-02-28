import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} bg-secondary py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <div className="mx-auto mt-5 gold-divider w-24" />
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-foreground">HapyJo Ltd</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wider text-accent">Site &amp; Fleet Control</p>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Ready to bring control and reliability to your operations?
              Reach out and let us discuss how Hapyjo can support your next project.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-accent" />
                <span>contact@hapyjo.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone size={18} className="text-accent" />
                <span>+91 90000 00000</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={18} className="text-accent" />
                <span>Kigali, Rwanda</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-lg border border-border bg-card p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Your name" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company" className="bg-background" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+250 ..." className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@company.com" className="bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service Required</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="site-support">Construction Site Support</SelectItem>
                  <SelectItem value="fleet">Fleet Logistics Management</SelectItem>
                  <SelectItem value="rentals">Heavy Equipment Rentals</SelectItem>
                  <SelectItem value="transport">Workforce Transport</SelectItem>
                  <SelectItem value="machinery">Machinery Deployment</SelectItem>
                  <SelectItem value="material">Material Handling</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Tell us about your project..." rows={4} className="bg-background" />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-5 text-sm font-semibold uppercase tracking-wider"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
