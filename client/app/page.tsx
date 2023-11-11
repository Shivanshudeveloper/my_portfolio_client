"use client"

import MainHeader from "@/components/profile/MainHeader"
import AboutSection from "@/components/profile/AboutSection"
import CalandarSection from "@/components/profile/CalandarSection"
import Technologies from "@/components/profile/Technologies"
import Gigs from "@/components/profile/Gigs"



export default function Home() {
  return (
    <>

      <div>
        <MainHeader />
      </div>

      {/* mt-2 md:grid md:grid-flow-col md:justify-stretch md:gap-2 */}
      <div className="flex justify-items-stretch gap-2 mt-2 flex-wrap">
        <AboutSection />

        <CalandarSection />
      </div>

      <div className="mt-2">
        <Technologies />
      </div>

      <div className="mt-2">
        <Gigs />
      </div>

    </>
  )
}
