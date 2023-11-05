import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


const MainHeader = () => {
  return (
    <>
        <Card className="w-full">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>
                  <div className="flex flex-row justify-items-start">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className='ml-2 py-1' >
                      Shivanshu Gupta
                      <br />
                      <CardDescription>
                        Some random description about me come here
                      </CardDescription>
                    </p>
                  </div>
                </CardTitle>

                <CardTitle className='py-1' >
                  <div className="flex flex-row justify-items-start gap-2">
                    <Link target='_blank' href="https://google.com" >
                      <Image
                        src="/icons8-fiverr.svg"
                        width={28}
                        height={28}
                        alt="Fiverr"
                      />
                    </Link>
                    
                    <Link target='_blank' href="https://google.com" >
                      <Image
                        src="/icons8-youtube.svg"
                        width={28}
                        height={28}
                        alt="YouTube"
                      />
                    </Link>
                    
                    <Link target='_blank' href="https://google.com" >
                      <Image
                        src="/icons8-medium.svg"
                        width={28}
                        height={28}
                        alt="Medium"
                      />
                    </Link>

                    <Link target='_blank' href="https://google.com" >
                      <Image
                        src="/icons8-linkedin.svg"
                        width={28}
                        height={28}
                        alt="LinkedIn"
                      />
                    </Link>
                  </div>
                </CardTitle>
              </div>
            </CardHeader>
{/* 
            <CardContent>

            </CardContent>

            <CardFooter className="flex justify-between">
                
            </CardFooter> */}
        </Card>
    </>
  )
}

export default MainHeader