"use client"

import React from 'react'

import { RocketIcon } from "@radix-ui/react-icons"
import Link from 'next/link'

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const ImportantNotification = () => {
  return (
    <>
        <Alert variant="default" >
            <RocketIcon className="h-4 w-4" />
            <AlertTitle className='font-semibold'>Heads up!</AlertTitle>
            <AlertDescription>
                <Link href="/demo" className='font-semibold' >
                    Click and explore our meticulously crafted PowerPoint presentation. Tailored with professional insights, it's your gateway to a wealth of knowledge!
                </Link>
            </AlertDescription>
        </Alert>
    </>
  )
}

export default ImportantNotification