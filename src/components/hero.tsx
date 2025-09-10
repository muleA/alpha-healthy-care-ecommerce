"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Timer,
  Gift,
  Truck,
  Shield,
  Leaf,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  badge: string;
}

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [current, setCurrent] = useState(0);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      image: "/hero/hero1.png",
      title: "Natural Wellness",
      description:
        "Discover our premium collection of natural supplements and vitamins for optimal health.",
      buttonText: "Shop Supplements",
      buttonLink: "/supplements",
      badge: "Supplements",
    },
    {
      id: 2,
      image: "/hero/hero2.png",
      title: "Organic Beauty",
      description:
        "Transform your skincare routine with our organic, cruelty-free beauty products.",
      buttonText: "Shop Beauty",
      buttonLink: "/beauty",
      badge: "Beauty",
    },
    {
      id: 3,
      image: "/hero/hero3.png",

      title: "Herbal Remedies",
      description:
        "Experience the healing power of nature with our traditional herbal teas and remedies.",
      buttonText: "Shop Remedies",
      buttonLink: "/teas",
      badge: "Remedies",
    },
    {
      id: 4,
      image: "/hero/hero5.png",

      title: "Herbal Remedies",
      description:
        "Experience the healing power of nature with our traditional herbal teas and remedies.",
      buttonText: "Shop Teas",
      buttonLink: "/teas",
      badge: "Remedies",
    },
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevEnabled(emblaApi.canScrollPrev());
    setNextEnabled(emblaApi.canScrollNext());
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 text-foreground overflow-hidden flex items-center py-8 md:py-12 px-4">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="mb-4 bg-accent text-accent-foreground px-4 py-2 font-bold rounded-full inline-flex items-center gap-1">
                <Gift className="w-4 h-4" />
                LIMITED TIME OFFER
              </Badge>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block">Summer Wellness</span>
              <span className="block text-primary">SALE</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold mt-2">
                UP TO 50% OFF
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Premium healthcare & beauty products. Natural ingredients,
              doctor-approved formulas.
            </motion.p>

            {/* Offer Highlights */}
            <motion.div
              className="bg-background/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-border/20 flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <Timer className="h-5 w-5 text-primary" />
                <span className="font-medium">Ends in 48:12:36</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                <span className="font-medium">Free Gift with $75+</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg">
                SHOP THE SALE
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-medium rounded-lg"
              >
                View Products
              </Button>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Money Back</span>
              </div>
              <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Natural Ingredients</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex">
                {heroSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="flex-[0_0_100%] min-w-0 px-2 md:px-0"
                  >
                    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative h-64 sm:h-72 md:h-80">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {slide.badge}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4 md:p-6">
                        <h3 className="font-bold text-xl mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {slide.description}
                        </p>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3">
                          {slide.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={!prevEnabled}
              className={cn(
                "absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 hidden md:flex",
                !prevEnabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={!nextEnabled}
              className={cn(
                "absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 hidden md:flex",
                !nextEnabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-4 md:mt-6 gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    current === i ? "bg-primary w-6" : "bg-muted"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="flex justify-center mt-6 gap-4 md:hidden">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!prevEnabled}
                className={cn(
                  "rounded-full p-3",
                  !prevEnabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!nextEnabled}
                className={cn(
                  "rounded-full p-3",
                  !nextEnabled && "opacity-50 cursor-not-allowed"
                )}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
