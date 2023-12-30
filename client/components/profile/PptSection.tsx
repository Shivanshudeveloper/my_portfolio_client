"use client"

import React from 'react'
import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
    {
        id: 1,
        path: "/assets/1.jpg"
    },
    {
        id: 2,
        path: "/assets/2.jpg"
    },
    {
        id: 3,
        path: "/assets/3.jpg"
    },
    {
        id: 4,
        path: "/assets/4.jpg"
    },
    {
        id: 5,
        path: "/assets/5.jpg"
    },
    {
        id: 6,
        path: "/assets/6.jpg"
    },
    {
        id: 7,
        path: "/assets/7.jpg"
    },
    {
        id: 8,
        path: "/assets/8.jpg"
    },
]


const PptSection = () => {
  return (
    <div className='items-center justify-center'>
        <Carousel opts={{ loop: true, align: "start" }} className="w-[975px] ">
            <CarouselContent>
                {
                    images.map((items) => (
                        <CarouselItem key={items?.id}>
                            <Image
                                src={items?.path}
                                width={900}
                                className='cursor-pointer'
                                height={900}
                                alt="Shivanshu"
                            />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
            <CarouselPrevious />
        <CarouselNext />
        </Carousel>
        
    </div>
  )
}

export default PptSection