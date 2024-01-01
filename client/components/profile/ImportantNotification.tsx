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
    <Link href="/demo" >
        <Alert variant="default" >
            <RocketIcon className="h-4 w-4" />
            <AlertTitle className='font-semibold'>Heads up!</AlertTitle>
            <AlertDescription>
                    Click and explore our meticulously crafted <span className='font-semibold'>PowerPoint presentation</span>. Tailored with professional insights, it's your gateway to a wealth of knowledge!
            </AlertDescription>
        </Alert>
        </Link>
    </>
  )
}

export default ImportantNotification