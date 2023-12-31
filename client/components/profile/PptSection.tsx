"use client"

import React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

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
    <>
        <center>
            <Carousel 
                opts={{ loop: true, align: "start" }} 
            >
                <CarouselContent>
                    {
                        images.map((items) => (
                            <CarouselItem key={items?.id}>
                                <Image
                                    src={items?.path}
                                    width={1000}
                                    className='cursor-pointer'
                                    height={1000}
                                    alt="Shivanshu"
                                />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </center>
    </>
  )
}

export default PptSection