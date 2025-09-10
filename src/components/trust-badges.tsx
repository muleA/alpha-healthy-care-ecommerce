"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TrustBadges() {
  const features = [
    {
      icon: Shield,
      title: "Authentic Products",
      description:
        "Sourced directly from Ethiopian farmers and trusted traditional healers.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Enjoy free nationwide shipping on orders over $50.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our health experts are always ready to help you anytime.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description:
        "Blending traditional recipes with modern quality standards you can trust.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-14 md:mb-16 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-2 px-3 py-1">
            Our Promise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2">
            Why Shop With Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We bring authenticity, speed, and unmatched quality to your
            healthcare and beauty shopping experience.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="flex flex-col items-center text-center p-6 h-full">
                    {/* Icon Wrapper */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-4 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <Icon
                        className="h-8 w-8 text-primary"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
