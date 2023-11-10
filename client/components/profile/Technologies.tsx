import React from 'react'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"

import {
    CircleIcon,
} from "@radix-ui/react-icons"

const Technologies = () => {
  return (
    <>
        <Card className="w-100">
            <CardHeader>
                 <CardTitle>
                    <div className="flex justify-between">
                        <p>
                            Technologies
                        </p>
                    </div>
                 </CardTitle>
            </CardHeader>

            <CardDescription className='-mt-1' >
                <CardContent>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                            TypeScript
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                            JavaScript
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-green-400 text-green-400" />
                            Node JS
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-blue-400 text-blue-400" />
                            React JS
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-blue-500 text-blue-500" />
                            Go
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-blue-800 text-blue-800" />
                            Python
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                            Firebase
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-blue-500 text-blue-500" />
                            Microsoft Azure
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-blue-100 text-blue-100" />
                            Tailwind CSS
                        </div>

                        <div className="flex items-center">
                            <CircleIcon className="mr-1 h-3 w-3 fill-red-500 text-red-500" />
                            Material UI
                        </div>
                    </div>
                </CardContent>
            </CardDescription>
        </Card>
    </>
  )
}

export default Technologies