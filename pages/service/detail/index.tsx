import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import FeatureCard, {
  FeatureCardProps,
} from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FiClock,
  FiCode,
  FiFigma,
  FiLayout,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'
import randomString from 'utils/randomString'

const ServiceDetail = () => {
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
  const features: FeatureCardProps[] = [
    {
      title: 'UI UX Design',
      description:
        'Proyek dirancang dengan baik. Anda akan mendapatkan file desain.',
      icon: <FiFigma />,
    },
    {
      title: 'Durasi Pengerjaan',
      description: `Kami tidak ingin Anda menunggu lama. Semuanya akan selesai pada hari yang sama.`,
      icon: <FiClock />,
    },
    {
      title: 'Quality Code',
      description: `Kode yang ditulis berdasarkan praktik yang baik sangat mudah dipelihara.`,
      icon: <FiCode />,
    },
    {
      title: 'SEO',
      description:
        'Website akan muncul di halaman pertama mesin pencari.',
      icon: <FiTrendingUp />,
    },
    {
      title: 'Responsive Design',
      description: `Akses website di perangkat apa pun, jangan batasi pengunjung Anda.`,
      icon: <FiLayout />,
    },
    {
      title: 'Website Cepat',
      description:
        'Website berkecepatan tinggi tidak akan mengecewakan calon pelanggan.',
      icon: <FiZap />,
    },
  ]
  return (
    <PageTemplate title="Service Detail - Levago">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="LEVAGO"
            title="Selesaikan di perusahaan Anda dengan solusi digital"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
        <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
          <figure className="w-full h-[450px] relative">
            <Image
              src={'/images/development-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="IDE that connect to Desktop, Mobile and Web mean multiple platform"
            />
          </figure>
        </aside>
        <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
          <div className="sm:w-10/12 md:w-8/12 lg:w-full lg:text-left grid gap-10">
            <div className="grid gap-8">
              <Text
                value={`Cukup beritahu kami masalah perusahaan anda saat ini, dan kami akan menciptakan solusi digital. <br> <br> Kami dapat membuatkan Anda website, mobile application, dan website applicatiion. Semua jenis aplikasi memiliki sistem keamanan yang baik, mudah perawatannya, dan berkecepatan tinggi. `}
                textStyle={'SectionParagraph'}
              />
            </div>
            <ul className="list-square text-white text-base font-medium pl-5 grid gap-2.5">
              <li>Terhindar potensi bug dengan unit testing</li>
              <li>Desain modern dan menyenangkan user</li>
              <li>User Experience yang tidak mengecewakan</li>
            </ul>
          </div>
          <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full"></div>
        </aside>
      </section>
      <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            title="Apa yang anda dapatkan saat bekerja sama dengan Levago"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => {
            return (
              <div key={randomString(64)} data-aos="fade-up">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  isNaked={true}
                />
              </div>
            )
          })}
        </div>
      </section>
       {/*  <section className="grid place-items-center gap-16">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="FAQ"
            title="Frequently asked questions"
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
        <div className="text-white text-base font-medium">
          {`Ingin Bertanya lebih Lanjut? `}
          <div className="sm:hidden"></div>
          <div className="text-primary inline">
            <Link href={'/quote'}>Jangan ragu untuk bertanya!</Link>
          </div>
        </div>
      </section>*/}
    </PageTemplate>
  )
}

export default ServiceDetail
