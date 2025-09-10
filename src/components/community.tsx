"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, MessageCircle, Camera, Calendar } from "lucide-react";
import Link from "next/link";

export default function Community() {
  const communityItems = [
    {
      icon: <MessageCircle className="text-white text-3xl" />,
      title: "Wellness Forum",
      description:
        "Join discussions about holistic health, share your journey, and get advice from our community.",
      linkText: "Join the Conversation",
      bg: "from-[--primary]/30 to-[--card]",
      iconBg: "bg-[--primary]",
    },
    {
      icon: <Camera className="text-white text-3xl" />,
      title: "Share Your Story",
      description:
        "Show how you incorporate Alpha Healthcare products into your wellness routine.",
      linkText: "Share Photos",
      bg: "from-[--accent]/20 to-[--card]",
      iconBg: "bg-[--accent]",
    },
    {
      icon: <Calendar className="text-white text-3xl" />,
      title: "Wellness Events",
      description:
        "Join our virtual and in-person events led by wellness experts and educators.",
      linkText: "View Events",
      bg: "from-[--secondary]/20 to-[--card]",
      iconBg: "bg-[--secondary]",
    },
  ];

  return (
    <section className="py-16 bg-[--background]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[--foreground] mb-4 md:mb-0">
            Community
          </h2>
          <Link
            href="#"
            className="inline-flex items-center text-[--primary] font-semibold text-lg hover:underline transition-colors duration-200"
          >
            Join Community <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityItems.map((item, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${item.bg} rounded-2xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="flex flex-col items-center text-center p-6 sm:p-8">
                <div
                  className={`w-20 h-20 ${item.iconBg} rounded-full flex items-center justify-center mb-6 shadow-md`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[--foreground] mb-4">
                  {item.title}
                </h3>
                <p className="text-[--muted-foreground] mb-6">
                  {item.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-[--primary] font-semibold hover:underline transition-colors duration-200"
                >
                  {item.linkText} <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
