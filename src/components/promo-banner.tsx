"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Percent, Leaf, Shield, Hotel, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PromoBanners() {
  const banners = [
    {
      icon: Percent,
      title: "Today Only: 25% Off",
      description: "All supplements with our biggest sale of the season!",
      image:
        "https://m.media-amazon.com/images/I/81RtHU132gL._UF894,1000_QL80_.jpg",
    },
    {
      icon: Leaf,
      title: "New Ashwagandha",
      description:
        "Our viral stress-relief formula for natural calm and balance.",
      image:
        "https://m.media-amazon.com/images/I/810HtIJqS8L._UF1000,1000_QL80_.jpg",
    },
    {
      icon: Shield,
      title: "Immune Boosting",
      description: "Essentials for great health, energy, and immune support.",
      image: "https://i.ebayimg.com/images/g/GssAAeSwww5oIII6/s-l1200.jpg",
    },
    {
      icon: Hotel,
      title: "Wellness Bundles",
      description: "Curated sets for complete mind-body wellness support.",
      image:
        "https://m.media-amazon.com/images/I/51T6D9qAAbL._UF894,1000_QL80_.jpg",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-16 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-2 px-3 py-1">
            Special Offers
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-2">
            Exclusive Promotions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
            Discover our latest deals and featured products for your wellness journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {banners.map((banner, index) => {
            const Icon = banner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={banner.image}
                        alt={banner.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Overlay Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-destructive text-destructive-foreground">
                          Sale
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Icon */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {banner.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {banner.description}
                      </p>

                      {/* Button */}
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto"
                      >
                        <Link
                          href="#"
                          aria-label={`Shop ${banner.title.toLowerCase()}`}
                        >
                          Shop Now
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
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
