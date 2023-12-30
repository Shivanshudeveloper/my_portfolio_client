"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

import { BellIcon, EyeOpenIcon, PersonIcon, MaskOffIcon, BackpackIcon, ChatBubbleIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const AboutSection = () => {
    const router = useRouter()

    const { toast } = useToast()
    const [open, setOpen] = React.useState(false);


    const submitContact = () => {
        setOpen(false);
        setTimeout(() => {
            toast({
                title: "Message send Successfully",
                description: "Your message to Shivanshu Gupta was send, we will let you know if he responds back.",
                action: (
                  <ToastAction altText="Goto schedule to undo">Undo Message</ToastAction>
                ),
            })
        }, 1000);
    }

    const changePage = () => {
        router.push('/demo', { scroll: false })
    }

    return (
        <>
            <Card className="w-[975px]">
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between">
                            <p className="flex items-center">
                                About Me

                                <HoverCard>
                                    <HoverCardTrigger asChild>
                                        <InfoCircledIcon className="ml-2 h-4 w-4 cursor-pointer fill-sky-400 text-sky-400" />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-80">
                                        <div className="flex justify-between space-x-4">
                                            <div className="space-y-1">
                                                <p className="text-sm">
                                                    I provide professional SaaS consultation and development support for clients worldwide. Many of them face challenges in launching their MVPs and managing teams. My expertise includes guiding them on key elements such as Tech Stack, 3rd Party Libraries, Business Models, Payment Gateways, and more, ensuring a streamlined and successful product development process.
                                                </p>
                                                <div className="flex items-center pt-2">
                                                    <span className="text-xs text-muted-foreground">
                                                        Since December 2019
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>

                            </p>

                            <Dialog open={open} >
                                <DialogTrigger asChild>
                                    <>
                                        <Button onClick={() => setOpen(true)} variant="outline" >
                                            <ChatBubbleIcon className="mr-2 h-4 w-4" />
                                            Contact Me
                                        </Button>
                                    </>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[525px]">
                                    <DialogHeader>
                                        <DialogTitle>Contact Me</DialogTitle>
                                        <DialogDescription>
                                            Click Here to contact us
                                        </DialogDescription>
                                    </DialogHeader>



                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="name">Email</Label>
                                                <Input id="email" placeholder="example@gmail.com" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="framework">Body</Label>
                                                <Textarea placeholder="Type your message here." className='h-[16rem]' />
                                            </div>
                                        </div>
                                    </form>



                                    <DialogFooter>
                                        <Button onClick={submitContact} type="submit">Submit</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                    </CardTitle>
                </CardHeader>

                <CardDescription className='p-2 -mt-1' >
                    <Card className='border-none'>
                        <CardContent className="grid gap-5">

                            <div onClick={changePage} className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                <BellIcon className="mt-px h-5 w-5" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">How do it work?</p>
                                    <p className="text-sm text-muted-foreground">
                                        Check out the presentation made.
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
                                        Mainly SaaS related projects.
                                    </p>
                                </div>
                            </div>

                            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer">
                                <EyeOpenIcon className="mt-px h-5 w-5" />
                                <div className="space-y-1">
                                    <p className="text-sm font-medium leading-none">Opportunity</p>
                                    <p className="text-sm text-muted-foreground">
                                        Work from Home &#38; Work from Office
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