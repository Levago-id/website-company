import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import SectionSentence from 'components/molecules/SectionSentence'
import React from 'react'

const CallOut = () => {
  return (
    <>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 place-items-center m-0 py-12 lg:grid-cols-2">
        <div className="text-center sm:w-8/12 md:w-10/12 lg:w-full lg:text-left">
          <SectionSentence title="Mari berkolaborasi bersama kami, kirimkan ide dan masukan anda" />
        </div>
        <div className="flex flex-col gap-5 w-full sm:w-fit sm:flex-row lg:w-full lg:justify-end">
          <ButtonLink value="Hubungi" href="https://api.whatsapp.com/send?phone=6285861126558&text=*Hi%20Levago!*%20*Saya*%20*Mau%20Konsultasi%F0%9F%98%8A*%0A%20(Message%20from%20Website)" />
          <ButtonLink value="Tanya Kami" color="white" style="light" href="/faq" />
        </div>
      </section>
      <LineDivider />
    </>
  )
}

export default CallOut
