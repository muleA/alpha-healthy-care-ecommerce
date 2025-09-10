"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Store,
  UserCheck,
  CalendarCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Service {
  icon: typeof Store;
  title: string;
  description: string;
  linkText: string;
  iconBg: string;
  href?: string;
}

export default function StoresServices() {
  const services: Service[] = [
    {
      icon: Store,
      title: "Retail Locations",
      description:
        "Visit our wellness stores for personalized product recommendations.",
      linkText: "Find a Store",
      iconBg: "bg-primary",
      href: "/stores",
    },
    {
      icon: UserCheck,
      title: "Wellness Consultations",
      description:
        "Book a free 15-minute consultation with our wellness experts.",
      linkText: "Book Now",
      iconBg: "bg-accent",
      href: "/consultations",
    },
    {
      icon: CalendarCheck,
      title: "Wellness Events",
      description: "Join our workshops and events led by health experts.",
      linkText: "View Events",
      iconBg: "bg-secondary",
      href: "/events",
    },
    {
      icon: Smartphone,
      title: "App Experience",
      description: "Download our app for exclusive offers and features.",
      linkText: "Download App",
      iconBg: "bg-accent",
      href: "/app",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <Badge variant="default" className="mb-3 px-3 py-1">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Stores & Services
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Explore our physical locations and digital services designed to
              enhance your wellness journey.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            asChild
          >
            <Link href="/stores">
              Find a Store <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                <CardContent className="flex flex-col items-center text-center p-6 h-full">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
                      service.iconBg
                    )}
                  >
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Button
                    variant="ghost"
                    className="mt-auto text-primary hover:bg-primary/10 rounded-full px-4 transition-colors"
                    asChild
                  >
                    <Link href={service.href || "#"}>
                      {service.linkText}{" "}
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
