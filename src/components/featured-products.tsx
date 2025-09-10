"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Berbere Spice Blend",
    image:
      "https://m.media-amazon.com/images/I/81RtHU132gL._UF894,1000_QL80_.jpg",
    price: "$12.99",
    originalPrice: "$15.99",
    rating: 4.8,
    reviews: 245,
  },
  {
    name: "Koseret Herb",
    image:
      "https://m.media-amazon.com/images/I/810HtIJqS8L._UF1000,1000_QL80_.jpg",
    price: "$8.99",
    originalPrice: "$10.99",
    rating: 4.9,
    reviews: 189,
  },
  {
    name: "Ethiopian Red Pepper",
    image: "https://i.ebayimg.com/images/g/GssAAeSwww5oIII6/s-l1200.jpg",
    price: "$14.50",
    originalPrice: "$18.00",
    rating: 4.7,
    reviews: 324,
  },
  {
    name: "Shiro Powder",
    image:
      "https://m.media-amazon.com/images/I/51T6D9qAAbL._UF894,1000_QL80_.jpg",
    price: "$22.99",
    originalPrice: "$28.99",
    rating: 4.6,
    reviews: 156,
  },
  {
    name: "Mitmita Spice",
    image:
      "https://m.media-amazon.com/images/I/71K3nV7F7SL._UF1000,1000_QL80_.jpg",
    price: "$11.99",
    originalPrice: "$14.99",
    rating: 4.8,
    reviews: 198,
  },
  {
    name: "Ethiopian Coffee",
    image:
      "https://m.media-amazon.com/images/I/71W+x7KkM3L._UF1000,1000_QL80_.jpg",
    price: "$16.99",
    originalPrice: "$20.99",
    rating: 4.9,
    reviews: 276,
  },
];

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
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
    <section className="py-12 sm:py-16 md:py-20 bg-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0iI2ZmZiIgLz4KPC9zdmc+')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Authentic Ethiopian Wellness
          </motion.h3>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our curated selection of traditional health and beauty
            products.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="border-border/50 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                      Sale
                    </Badge>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground text-lg line-clamp-1 mb-2">
                      {product.name}
                    </h4>
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < Math.floor(product.rating)
                                ? "text-primary fill-current"
                                : "text-muted-foreground/30"
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative" ref={emblaRef}>
          <div className="flex">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_60%] px-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="border-border/50 hover:shadow-lg transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <Badge className="absolute top-3 right-3 bg-destructive text-destructive-foreground">
                          Sale
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground text-lg line-clamp-1 mb-2">
                          {product.name}
                        </h4>
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < Math.floor(product.rating)
                                    ? "text-primary fill-current"
                                    : "text-muted-foreground/30"
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-bold text-primary">
                              {product.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                          <Button
                            size="sm"
                            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border-border rounded-full z-10",
              !prevBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-sm border-border rounded-full z-10",
              !nextBtnEnabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10 sm:mt-12 md:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="rounded-full px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
