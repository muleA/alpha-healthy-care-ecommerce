"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with newsletter service
    console.log("Subscribing email:", email);
    setIsSubmitted(true);
    setEmail("");
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-r from-primary/90 via-primary to-accent/90 text-primary-foreground overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-background rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        {/* Heading */}
        <motion.h2
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join Our Wellness Community
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get wellness tips, exclusive offers, and{" "}
          <span className="font-semibold">15% off</span> your first order when
          you subscribe.
        </motion.p>

        <AnimatePresence>
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background/20 backdrop-blur-md rounded-2xl p-6 max-w-md mx-auto border border-primary/30 shadow-lg"
            >
              <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Thank You for Subscribing!
              </h3>
              <p className="text-primary-foreground/80">
                Check your email for your 15% discount code.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xl mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 pl-12 pr-5 rounded-full bg-background text-foreground border-border focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary/10"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-full px-6 font-semibold bg-background text-primary hover:bg-background/90 transition-transform duration-300 flex items-center justify-center group"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
