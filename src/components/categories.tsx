"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Droplet,
  Pill,
  Sparkles,
  Flower2,
  Dumbbell,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Skincare",
    icon: Droplet,
    products: "120+",
    href: "/categories/skincare",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: 2,
    name: "Supplements",
    icon: Pill,
    products: "85+",
    href: "/categories/supplements",
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    id: 3,
    name: "Beauty",
    icon: Sparkles,
    products: "200+",
    href: "/categories/beauty",
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
  },
  {
    id: 4,
    name: "Herbal & Organic",
    icon: Flower2,
    products: "65+",
    href: "/categories/herbal",
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: 5,
    name: "Fitness & Wellness",
    icon: Dumbbell,
    products: "90+",
    href: "/categories/fitness",
    color:
      "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

export default function ShopByCategory() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-left mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-2 px-3 py-1">
            Browse Categories
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore curated collections crafted for your wellness and beauty
            needs.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={category.href} className="block">
                  <Card className="group h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full">
                      {/* Icon */}
                      <div
                        className={cn(
                          "flex items-center justify-center w-16 h-16 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110",
                          category.color
                        )}
                      >
                        <Icon className="h-8 w-8" aria-hidden="true" />
                      </div>

                      {/* Category Name */}
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {category.name}
                      </h3>

                      {/* Product Count */}
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.products} items
                      </p>

                      {/* Shop Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-auto group-hover:bg-primary group-hover:text-primary-foreground rounded-full px-4"
                      >
                        Shop Now
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="rounded-full px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Categories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
