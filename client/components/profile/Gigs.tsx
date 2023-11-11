import React from 'react'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

import { ChevronRightIcon } from "@radix-ui/react-icons";


const Gigs = () => {
  return (
    <>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Start Up Plan
                </CardTitle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$5</div>
                <p className="text-xs text-muted-foreground">
                Providing SaaS consultation, resolving doubts, validating ideas, offering honest opinions, and analyzing potential risks for a comprehensive understanding.                </p>
                </CardContent>

                <CardFooter className="flex justify-end">
                    <Button>
                        View More
                        <ChevronRightIcon className="ml-2 mt-0.5 h-4 w-4" />    
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Growth Plan
                </CardTitle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$50</div>
                <p className="text-xs text-muted-foreground">
                    Creating comprehensive documentation, devising a roadmap tailored to your SaaS concept, and conducting thorough validation, research , and analyzing potential risks for a comprehensive understanding. .
                </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button>
                        View More
                        <ChevronRightIcon className="ml-2 mt-0.5 h-4 w-4" />    
                    </Button>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Scale Plan
                </CardTitle>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">$250</div>
                <p className="text-xs text-muted-foreground">
                    Performing rigorous SaaS due diligence, acting as SCRUM Master for task oversight, leading regular team updates, ensuring deadline adherence, and proactively managing and mitigating potential risks.                </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button>
                        View More
                        <ChevronRightIcon className="ml-2 mt-0.5 h-4 w-4" />    
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </>
  )
}

export default Gigs