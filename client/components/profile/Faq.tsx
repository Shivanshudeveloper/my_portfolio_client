import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

const Faq = () => {
  return (
    <>
        <Card>
            <CardHeader>
                <CardTitle>You ask? I answer</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="necessary" className="flex flex-col space-y-1">
                    <span>What will I get?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                    I provide consultation in the field of SaaS and Web Development I can help you with your doubts and questions.
                    </span>
                </Label>
                </div>
                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="functional" className="flex flex-col space-y-1">
                    <span>How much is the Cost?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                    My basic consultation start from just $5 and then you can check my other pricings as well on my fiverr account.
                    </span>
                </Label>
                </div>
                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="performance" className="flex flex-col space-y-1">
                    <span>How to contact you?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                        The contact details are provided above of the website you can feel free to schedule the meeting.
                    </span>
                </Label>
                </div>

                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="performance" className="flex flex-col space-y-1">
                    <span>What other services you give?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                        I also provide the Project Management, Team Building and Team Management, Full Stack Development as well.
                    </span>
                </Label>
                </div>

                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="performance" className="flex flex-col space-y-1">
                    <span>What is your expirience?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                    I have overall 7+ years in the webdevelopment I provide consultation and technical help to my clients.
                    </span>
                </Label>
                </div>

                <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="performance" className="flex flex-col space-y-1">
                    <span>Are you on Fiverr/Upwork?</span>
                    <span className="font-normal leading-snug text-muted-foreground">
                    Yes my services are availabe on Fiverr, Upwork and also on Patreon. I also run a brand by the name of consultwithshiv.com
                    </span>
                </Label>
                </div>
            </CardContent>
        </Card>
    </>
  )
}

export default Faq