"use client"

import MainHeader from "@/components/profile/MainHeader"
import AboutSection from "@/components/profile/AboutSection"
import CalandarSection from "@/components/profile/CalandarSection"

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

    </>
  )
}
