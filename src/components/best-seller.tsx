"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Eye,
  Leaf,
  ReceiptCent,
  Ban,
  Star,
  SatelliteDish,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Bestsellers() {
  const products = [
    {
      image: "https://sfile.chatglm.cn/images-ppt/5aab7d0805de.jpg",
      name: "Immune Defense Vitamin C Complex",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: ReceiptCent, text: "Non-GMO", color: "secondary" },
      ],
      rating: 5,
      reviews: 1200,
      price: "$25.49",
      originalPrice: "$29.99",
      badge: "15% Off",
      badgeType: "destructive",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/a479f7fd2075.png",
      name: "Rosehip Oil Cold Pressed",
      tags: [
        { icon: SatelliteDish, text: "Organic", color: "accent" },
        { icon: ReceiptCent, text: "Cold-Pressed", color: "secondary" },
      ],
      rating: 5,
      reviews: 892,
      price: "$22.99",
      badge: "Bestseller",
      badgeType: "secondary",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/689ce5359cd7.jpg",
      name: "Complete Women's Multivitamin",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: Ban, text: "Gluten-Free", color: "secondary" },
      ],
      rating: 4,
      reviews: 756,
      price: "$19.99",
      badge: "Bestseller",
      badgeType: "secondary",
    },
    {
      image: "https://sfile.chatglm.cn/images-ppt/8d93ddb1cd22.jpg",
      name: "Natural Energy Boost Complex",
      tags: [
        { icon: Leaf, text: "Vegan", color: "primary" },
        { icon: ReceiptCent, text: "Non-GMO", color: "secondary" },
      ],
      rating: 4,
      reviews: 523,
      price: "$19.99",
      originalPrice: "$24.99",
      badge: "20% Off",
      badgeType: "destructive",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 sm:mb-12">
          <div>
            <Badge variant="secondary" className="mb-3 px-3 py-1">
              Top Rated
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Best Sellers
            </h2>
          </div>
          <Link
            href="#"
            className="text-base sm:text-lg font-semibold text-primary flex items-center hover:underline transition-colors"
            aria-label="View all bestsellers"
          >
            View All <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Grid */}
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
                        variant={product.badgeType as any}
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

                {/* Card content */}
                <CardContent className="p-4 flex flex-col h-full">
                  <h3 className="font-semibold text-foreground text-lg line-clamp-2 mb-3">
                    {product.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
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
                  <div className="font-bold text-xl text-primary mb-4 flex items-baseline gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    <span>{product.price}</span>
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
