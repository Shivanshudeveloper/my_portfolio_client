"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

import PptSection from '@/components/profile/PptSection'
import { CalendarIcon } from "@radix-ui/react-icons";


const page = () => {
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
            <center>
                <Button onClick={bookMeeting} className='w-50 mb-2'>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Book a meeting
                </Button>
            </center>
            <PptSection />
        </>
    )
}

export default page