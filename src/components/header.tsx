"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Phone,
  HelpCircle,
  Menu,
  Truck,
  MapPin,
  ChevronDown,
  Leaf,
  Star,
  Sparkles,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Header() {
  const [userLocation, setUserLocation] = useState("Addis Ababa");
  const [cartCount, setCartCount] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const navItems = [
    { name: "Traditional Herbs", icon: "🌿", featured: true },
    { name: "Supplements", icon: "💊" },
    { name: "Spices & Teas", icon: "🍵" },
    { name: "Beauty & Personal Care", icon: "✨" },
    { name: "Ethiopian Medicine", icon: "🌡️" },
    { name: "Health Foods", icon: "🥗" },
    { name: "Vitamins & Minerals", icon: "💪" },
    { name: "Aromatherapy", icon: "🌸" },
    { name: "Skincare", icon: "🧴" },
    { name: "Wellness Gifts", icon: "🎁" },
  ];

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmScreen(window.innerWidth >= 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel navigation handlers
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

  // Geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await res.json();
            setUserLocation(
              data.address?.city || data.address?.state || "Addis Ababa"
            );
          } catch {
            setUserLocation("Addis Ababa");
          }
        },
        () => setUserLocation("Addis Ababa")
      );
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-background border-b"
      )}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-1 sm:py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs sm:text-sm gap-2">
          {/* Left info */}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" /> +251 900 123 456
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Truck className="h-3 w-3 sm:h-4 sm:w-4" /> Free Shipping Over $50
            </span>
          </div>
          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition hover:underline"
            >
              Track Order
            </Link>
            <Link
              href="#"
              className="hover:text-primary-foreground/80 transition hover:underline"
            >
              Help Center
            </Link>
            {/* Store Location Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-2 h-auto py-1 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MapPin className="h-3 w-3" /> {userLocation}
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {["Addis Ababa", "Bahir Dar", "Mekelle", "Gondar"].map(
                  (city) => (
                    <DropdownMenuItem
                      key={city}
                      onClick={() => setUserLocation(city)}
                    >
                      {city}
                    </DropdownMenuItem>
                  )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-1 px-2 h-auto py-1 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  English <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Amharic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-primary to-primary/80 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              Alpha
            </h1>
            <span className="text-xs text-muted-foreground -mt-1">
              Healthcare
            </span>
          </div>
        </Link>

        {/* Search (desktop) */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input
              type="text"
              placeholder="Search herbs, supplements, health products..."
              className="w-full rounded-full pr-12 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full w-9 h-9 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex hover:bg-muted"
            title="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            className="hidden lg:flex items-center gap-1 hover:bg-muted"
          >
            <User className="h-5 w-5" /> <span>Sign In</span>{" "}
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-muted"
            title="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center p-0 bg-primary text-primary-foreground">
                {cartCount}
              </Badge>
            )}
          </Button>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-muted"
            onClick={() => setSearchOpen(!searchOpen)}
            title="Search"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            title="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in">
          <form onSubmit={handleSearch} className="w-full relative">
            <Input
              type="text"
              placeholder="Search herbs, supplements, health products..."
              className="w-full rounded-full pr-12 border-muted-foreground/20 focus:border-primary focus:ring-1 focus:ring-primary/30"
              autoFocus
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full w-9 h-9 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t px-4 py-4 animate-slide-down">
          <div className="flex flex-col gap-3">
            {/* Mobile User Actions */}
            <div className="flex flex-col gap-2 pb-3 border-b">
              <Button
                variant="ghost"
                className="flex items-center gap-2 justify-start hover:bg-muted rounded-lg"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Button>
              <Button
                variant="ghost"
                className="flex items-center gap-2 justify-start hover:bg-muted rounded-lg"
              >
                <Heart className="h-5 w-5" />
                <span>Wishlist</span>
              </Button>
            </div>

            {/* Navigation Items */}
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href="#"
                className={cn(
                  "flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-muted transition-all duration-300",
                  item.featured &&
                    "bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
                )}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
                {item.featured && (
                  <Badge className="ml-auto bg-primary text-primary-foreground text-xs">
                    Popular
                  </Badge>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Category Carousel - Only visible on sm screens and above */}
      {isSmScreen && (
        <div className="relative bg-gradient-to-b from-muted/30 to-muted/10 border-t py-2">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
         {/*    <Button
              variant="ghost"
              size="icon"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className={cn(
                "flex-shrink-0 rounded-full transition-all duration-300",
                prevBtnEnabled
                  ? "hover:bg-muted hover:scale-105"
                  : "opacity-50 cursor-not-allowed"
              )}
              aria-label="Previous categories"
            >
              <ChevronDown className="h-5 w-5 rotate-90" />
            </Button> */}
            <div ref={emblaRef} className="flex overflow-hidden w-full">
              <div className="flex gap-3">
                {navItems.map((item, idx) => (
                  <DropdownMenu key={idx}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "flex items-center gap-2 whitespace-nowrap hover:text-primary rounded-xl px-4 py-2.5 transition-all duration-300",
                          "bg-gradient-to-b from-background to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-sm",
                          item.featured &&
                            "from-primary/5 to-primary/10 border-primary/20"
                        )}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {item.featured && (
                          <Star className="h-3 w-3 text-primary ml-1" />
                        )}
                        <ChevronDown className="h-3 w-3 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={8}
                      className="w-48"
                    >
                      <DropdownMenuItem className="gap-2">
                        <Sparkles className="h-4 w-4" /> Subcategory 1
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Sparkles className="h-4 w-4" /> Subcategory 2
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </div>
            </div>
        {/*     <Button
              variant="ghost"
              size="icon"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className={cn(
                "flex-shrink-0 rounded-full transition-all duration-300",
                nextBtnEnabled
                  ? "hover:bg-muted hover:scale-105"
                  : "opacity-50 cursor-not-allowed"
              )}
              aria-label="Next categories"
            >
              <ChevronDown className="h-5 w-5 -rotate-90" />
            </Button> */}
          </div>
        </div>
      )}
    </header>
  );
}
