"use client"

import React from 'react'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { BellIcon, EyeOpenIcon, PersonIcon, MaskOffIcon , BackpackIcon, ChatBubbleIcon } from "@radix-ui/react-icons"

const AboutSection = () => {
  return (
    <>
        <Card className="w-[975px]">
            <CardHeader>
                <CardTitle>
                    <div className="flex justify-between">
                        <p>
                            About Me
                        </p>
                        <Button variant="outline" >
                            <ChatBubbleIcon className="mr-2 h-4 w-4" /> 
                            Contact Me
                        </Button>
                    </div>

                </CardTitle>
            </CardHeader>

            <CardDescription className='p-2 -mt-1' >
                <Card className='border-none'>
                    <CardContent className="grid gap-5">
                        
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            <BellIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Work</p>
                                <p className="text-sm text-muted-foreground">
                                Email digest, mentions & all activity.
                                </p>
                            </div>
                        </div>
                        
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            <PersonIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Availability</p>
                                <p className="text-sm text-muted-foreground">
                                09:00 AM IST - 06:00 PM IST
                                </p>
                            </div>
                        </div>
                        
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            <BackpackIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Projects</p>
                                <p className="text-sm text-muted-foreground">
                                Turn off all notifications.
                                </p>
                            </div>
                        </div>

                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            <EyeOpenIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Opportunity</p>
                                <p className="text-sm text-muted-foreground">
                                Turn off all notifications.
                                </p>
                            </div>
                        </div>

                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                            <MaskOffIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">Rate/hour</p>
                                <p className="text-sm text-muted-foreground">
                                $5.00 - $15.00
                                </p>
                            </div>
                        </div>

                        
                    </CardContent>
                </Card>

            </CardDescription>
        </Card>
    </>
  )
}

export default AboutSection