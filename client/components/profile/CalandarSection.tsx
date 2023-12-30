import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";

const CalandarSection = () => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const calenderLink = "https://calendly.com/consultwithshiv/15min";
  const today = new Date();

  const bookMeeting = async () => {
    const currentDate = date || new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const formattedMonth = `${year}-${month}`;
    const newTabUrl = `${calenderLink}?month=${formattedMonth}&date=${formattedDate}`;
    window.open(newTabUrl, "_blank");
  };

  return (
    <>
      <Card className="w-full max-w-xs">
        <CardHeader>
          <CardTitle>
            Book a meeting
          </CardTitle>
        </CardHeader>

        <CardDescription className='flex items-center justify-center -mt-8'>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(day) => day < today} // Disable old days
            className="rounded-md p-9 shadow"
          />
        </CardDescription>

        <CardFooter className='mt-2 gap-1'>
          <Button onClick={bookMeeting} className='w-full'>
            <CalendarIcon className="mr-2 h-4 w-4" />
            Book a meeting
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default CalandarSection;
