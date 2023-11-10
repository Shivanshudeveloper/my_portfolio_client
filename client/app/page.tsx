"use client"

import MainHeader from "@/components/profile/MainHeader"
import AboutSection from "@/components/profile/AboutSection"
import CalandarSection from "@/components/profile/CalandarSection"
import Technologies from "@/components/profile/Technologies"



export default function Home() {
  return (
    <>
      
      <div>
        <MainHeader />
      </div>

      <div className="mt-2 grid grid-flow-col justify-stretch gap-2">
          <AboutSection />

          <CalandarSection />
      </div>

      <div className="mt-2">
        <Technologies />
      </div>
    </>
  )
}
