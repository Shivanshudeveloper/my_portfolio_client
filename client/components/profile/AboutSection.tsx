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

import { BellIcon, EyeOpenIcon, PersonIcon, MaskOffIcon, BackpackIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

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

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" >
                                        <ChatBubbleIcon className="mr-2 h-4 w-4" />
                                        Contact Me
                                    </Button>

                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Contact Me</DialogTitle>
                                        <DialogDescription>
                                            Click Here to contact us
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Email
                                            </Label>
                                            <Input id="name" value="email" className="col-span-3" />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="username" className="text-right">
                                                Body
                                            </Label>
                                            <Input id="username" value="body" className="col-span-3" />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Submit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
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