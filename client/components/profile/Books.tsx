"use client"

import React from 'react'
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Books = () => {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>Free books on Amazon Kindle</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                    <a target="_blank" href="https://www.amazon.com/dp/B0CR8CCRK8" rel="noopener noreferrer">
                        <Image
                            src="/assets/book1.jpg"
                            width={200}
                            height={200}
                            alt="The Art of Launching a Successful SaaS: A Comprehensive Guide to Starting Your SaaS Venture"
                        />
                    </a>

                    <a target="_blank" href="https://www.amazon.com/Cheat-Codes-Building-SaaS-development-ebook/dp/B0BXJQBL9T" rel="noopener noreferrer">
                        <Image
                            src="/assets/book2.jpg"
                            width={200}
                            height={200}
                            alt="Cheat Codes for Building a SaaS: A to Z steps for the development of SaaS business"
                        />
                    </a>

                    <a target="_blank" href="https://www.amazon.com/Marketing-Strategies-Grow-Your-SaaS-ebook/dp/B0CPPRX1H7" rel="noopener noreferrer">
                        <Image
                            src="/assets/book3.jpg"
                            width={200}
                            height={200}
                            alt="Marketing Strategies to Grow Your SaaS: How to get paying clients for your SaaS?"
                        />
                    </a>

                    <a target="_blank" href="https://www.amazon.com/Cheat-Code-Building-AI-Driven-SaaS-ebook/dp/B0CGFXD4TZ/" rel="noopener noreferrer">
                        <Image
                            src="/assets/book4.jpg"
                            width={200}
                            height={200}
                            alt="Cheat Code for Building AI-Driven SaaS"
                        />
                    </a>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default Books