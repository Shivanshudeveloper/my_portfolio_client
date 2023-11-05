import React from 'react'

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"


const CalandarSection = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>
                  Book a meeting
                </CardTitle>
            </CardHeader>

            <CardDescription className='flex items-center justify-center -mt-8' >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md p-9 shadow"
              />
            </CardDescription>

            <CardFooter className='mt-2' >
              <Button className='w-full' >
                <CalendarIcon className="mr-2 h-4 w-4" /> Book a meeting
              </Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default CalandarSection