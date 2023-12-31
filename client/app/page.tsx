"use client"

import MainHeader from "@/components/profile/MainHeader"
import AboutSection from "@/components/profile/AboutSection"
import CalandarSection from "@/components/profile/CalandarSection"
import Technologies from "@/components/profile/Technologies"
import Gigs from "@/components/profile/Gigs"
import Faq from "@/components/profile/Faq"
import ImportantNotification from "@/components/profile/ImportantNotification"
import Books from "@/components/profile/Books"


export default function Home() {
  return (
    <>

      <div>
        <MainHeader />
      </div>

      {/* mt-2 md:grid md:grid-flow-col md:justify-stretch md:gap-2 */}

      {/* <div className="mt-2">
        <PptSection />
      </div> */}
      <div className="mt-2">
        <ImportantNotification />
      </div>

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

      <div className="mt-2">
        <Faq />
      </div>

      <div className="mt-2">
        <Books />
      </div>

    </>
  )
}
