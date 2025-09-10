"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Eye,
  Leaf,
  Ban,
  Star,
  Hotel,
  Signature,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ChosenForYou() {
  const products = [
    {
      image: "https://sfile.chatglm.cn/images-ppt/dfea32983acd.jpg",
      name: "Adaptogenic Stress Relief Complex",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: Ban, text: "Gluten-Free", color: "secondary" },
      ],
      rating: 4,
      reviews: 324,
      price: "$29.99",
      badge: "New",
      badgeType: "default",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/6d1e21306d57.jpg",
      name: "Deep Sleep Melatonin Complex",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: Signature, text: "Non-GMO", color: "accent" },
      ],
      rating: 5,
      reviews: 412,
      price: "$34.99",
      badge: "New",
      badgeType: "default",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/60db7258ccd2.jpg",
      name: "Advanced Gut Health Probiotic",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: Ban, text: "Gluten-Free", color: "secondary" },
      ],
      rating: 4,
      reviews: 567,
      price: "$24.99",
      badge: "Bestseller",
      badgeType: "secondary",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/e1407264c5c0.png",
      name: "Lavender Calm Essential Oil Blend",
      tags: [
        { icon: Signature, text: "Organic", color: "accent" },
        { icon: Hotel, text: "Therapeutic Grade", color: "secondary" },
      ],
      rating: 5,
      reviews: 892,
      price: "$19.99",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            Recommended For You
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Chosen For You
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl ">
            Based on your preferences, we've selected these products just for
            you.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                {/* Image */}
                <AspectRatio
                  ratio={4 / 3}
                  className="relative overflow-hidden rounded-xl"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant={(product.badgeType as any) || "default"}
                        className="rounded-full px-3 py-1 text-xs uppercase"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  {/* Quick view */}
                  <div className="absolute top-3 left-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`Quick look at ${product.name}`}
                      className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </AspectRatio>

                {/* Card Content */}
                <CardContent className="p-4 flex flex-col h-full">
                  <h3 className="font-semibold text-foreground text-lg line-clamp-2 mb-3">
                    {product.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className={cn(
                          "flex items-center text-xs px-2 py-1 gap-1",
                          tag.color === "primary"
                            ? "border-primary text-primary"
                            : tag.color === "secondary"
                            ? "border-secondary text-secondary"
                            : "border-accent text-accent"
                        )}
                      >
                        <tag.icon className="h-3 w-3" />
                        {tag.text}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < product.rating
                              ? "text-primary fill-current"
                              : "text-muted-foreground/40"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="font-bold text-xl text-primary mb-4">
                    {product.price}
                  </div>

                  {/* Add to Cart */}
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground mt-auto font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
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
