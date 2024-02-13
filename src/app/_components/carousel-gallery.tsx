"use client";

import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// carousel item className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
// carousel className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl"

const CarouselGallery: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="border-none bg-transparent">
                <CardContent className="flex h-[75vh] flex-col items-center justify-center p-6">
                  <div className="h-1/2 w-screen">
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      src="https://source.unsplash.com/random"
                    />
                  </div>
                </CardContent>
              </Card>
              <span className="text-3xl font-semibold">{index + 1}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="absolute top-0 -z-10 h-full w-full"
                src="https://source.unsplash.com/random"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 z-50" />
      <CarouselNext className="absolute right-2 top-1/2 z-50" />
    </Carousel>
  );
};

export default CarouselGallery;
