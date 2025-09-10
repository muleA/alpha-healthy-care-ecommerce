
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tags, Gift, Leaf, Coins, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SpecialOffers() {
  const offers = [
    {
      title: "Get 25% Off Select Supplements",
      subtitle: "Ends in 3 days",
      description: "Score can't-miss deals on select supplements. New deals every day! No promo code needed.",
      terms: "In store & online • Exclusions/terms apply",
      icon: <Tags className="text-[--primary-foreground]" />,
    },
    {
      title: "Get a FREE Wellness Gift Set!",
      subtitle: "Limited time",
      description: "Free gift set with samples from our top wellness brands. Yours with $50 spend.",
      terms: "Alpha Rewards members only • Online only • Exclusions/terms apply",
      icon: <Gift className="text-[--primary-foreground]" />,
    },
    {
      title: "Free Trial-Size Ashwagandha",
      subtitle: "While supplies last",
      description: "Try our viral stress-relief formula. Free with $30 purchase.",
      terms: "Alpha Rewards members only • Online only • Exclusions/terms apply",
      icon: <Leaf className="text-[--primary-foreground]" />,
    },
    {
      title: "3X Points on All Immune Products",
      subtitle: "Ends in 5 days",
      description: "Earn 3X points on all immune support products. Boost your rewards while boosting your health!",
      terms: "Alpha Rewards members only • In store & online • Exclusions/terms apply",
      icon: <Coins className="text-[--primary-foreground]" />,
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[--card] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[--foreground] tracking-tight">
            Wellness Offers
          </h2>
          <Link
            href="#"
            className="text-base sm:text-lg font-semibold text-[--primary] flex items-center hover:underline transition-colors"
            aria-label="View all offers"
          >
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <Card className="border-[--border]/30 hover:bg-[--card]/90 transition-all duration-300">
                <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-4 sm:mb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[--foreground] mb-1 sm:mb-2 tracking-tight">
                          {offer.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[--muted-foreground]">
                          {offer.subtitle}
                        </p>
                      </div>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[--accent]/10 border border-[--border] rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                        {React.cloneElement(offer.icon, {
                          "aria-label": offer.title,
                          className: `h-6 w-6 sm:h-8 sm:w-8 text-[--primary-foreground] transition-colors duration-200`,
                        })}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-[--muted-foreground] mb-4 sm:mb-6">
                      {offer.description}
                    </p>
                    <p className="text-xs sm:text-sm text-[--muted-foreground]/70 mb-4 sm:mb-6">
                      {offer.terms}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-[--primary] hover:bg-[--primary]/90 text-[--primary-foreground]"
                    aria-label={`Shop ${offer.title.toLowerCase()}`}
                  >
                    Shop Now
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