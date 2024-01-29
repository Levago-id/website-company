import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PricingCard from 'components/molecules/Card/PricingCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Pricing = () => {
  interface Faq {
    title: string
    description: string
  }
  const faqs: Faq[] = [
    {
      title: `How is the payment system?`,
      description: `If the project has agreed, you will pay an advance, and when the progress reaches 50% you will make a second payment, and when the progress is 100% you will pay it off.`,
    },
    {
      title: `Can I consult first?`,
      description: `Of course you can consult us first. We are very happy to help your problems and provide our best solutions. You can contact us via the contact page.`,
    },
    {
      title: `What if the project stops halfway?`,
      description: `We promise to always finish the project on time, if a problem occurs (because of our mistake), all payments will be refunded. And the project will be terminated.`,
    },
    {
      title: `Does it include servers and domains?`,
      description: `You don't need to think about anything else, we have everything prepared. You just need to check your progress and make sure the features you want are the right one.`,
    },
    {
      title: `Will I get the source code?`,
      description: `When the project is 100% complete, all the resources, such as design files, analysis diagrams, source code, etc. will be provided to you. You don't need to worry about this.`,
    },
    {
      title: `Is there a warranty?`,
      description: `1 year warranty for our errors or mistakes. If you want to add a feature that is not included in the warranty, there is another fee per feature, and the price depends on the difficulty.`,
    },
  ]

  return (
    <PageTemplate title="Harga - Levago">
      <section className="grid grid-cols-1 place-items-center">
        <div
          className="sm:w-10/12 md:8/12 lg:w-6/12 text-center"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="Harga Layanan"
            title="Berbagai layanan sesuai dengan kebutuhan anda"
          />
        </div>
      </section>
      <LineDivider />
      <section className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <div data-aos="fade-up">
          <PricingCard
            price="85K/Bulan"
            title="Website Landing Page"
            features={[
              'Server dan Domain',
              'Template Website',
              'Maintance & Bug Fixing 1 Tahun',
              'Add Minor Feature 1 Tahun',
              'Optimalisasi Mobile',
              
            ]}
          />
        </div>
        <div data-aos="fade-up">
          <PricingCard
            price="210K/Bulan"
            title="Website Custom"
            features={[
              'Server dan Domain',
              'Design by Request',
              'Maintance & Bug Fixing 1 Tahun',
              'Add Minor Feature',
              'Optimalisasi Mobile',
            ]}
          />
        </div>
        <div data-aos="fade-up">
        <PricingCard
          price="Request"
          title="Website Application"
         features={[
          'Server dan Domain',
          'Garansi bug & Maintance',
          'Garansi Design & Keamanan',
         'Backup Database',
          'Major Feature : Request '
           ]}
          />
        </div>
        <div data-aos="fade-up">
        <PricingCard
                price="Request"
                title="Mobile Application"
                features={[
                  'Deploy Appstore & Playstore',
                  'Garansi bug & Maintance',
                  'Garansi Design & Keamanan',
                  'Backup Database',
                  'Major Feature : Request '
                ]}
              />
        </div>
        <div data-aos="fade-up">
        <PricingCard
                price="Request"
                title="Paket Multi Platform (Web & Mobile App)"
                features={[
                  'Server dan Domain',
                  'Deploy Appstore & Playstore',
                  'Garansi bug & Maintance',
                  'Garansi Design & Keamanan',
                  'Backup Database',
                  'Major Feature : Request '
                ]}
              />
        </div>
      </section>
     {/*} <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions, maybe the same as yours"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-7">
          {faqs.map((faq) => {
            return (
              <div className="grid gap-2.5" key={randomString(64)} data-aos="fade-right">
                <Text textStyle="FAQTitle" value={faq.title} />
                <Text textStyle="FAQDescription" value={faq.description} />
              </div>
            )
          })}
        </div>
        <div className="text-white text-base font-medium text-center">
          {`Didn't find an answer? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline select-none">
            <Link href={'/quote'}>Do not hesitate to ask!</Link>
        </div>
        </div>
      </section>*/}
    </PageTemplate>
  )
}

export default Pricing
