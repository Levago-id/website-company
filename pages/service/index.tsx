import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Image from 'next/image'
import SectionSentence from 'components/molecules/SectionSentence'
import {
  FiArrowUp,
  FiCheckCircle,
  FiDownload,
  FiGlobe,
  FiLayout,
  FiMonitor,
  FiRefreshCcw,
  FiSmartphone,
} from 'react-icons/fi'
import SmallCardIcon from 'components/molecules/Card/SmallCardIcon'
import CardListIcon from 'components/molecules/Card/CardListIcon'
import TextArrowLink from 'components/molecules/TextArrowLink'
import IconListItem from 'components/molecules/IconListItem'
const Services = () => {
  return (
    <>
      <PageTemplate title='Service - Levago'>
        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="LAYANAN"
              title="Hadir untuk membantu menyelesaikan permasalahan perusahaan Anda"
            />
          </div>
        </section>
        <LineDivider />
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[315px] relative">
              <Image
                src={'/images/ui-design-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='Website Design'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Website Design"
                title="Landing Page, Company Website, Website Profile"
                paragraph="Levago Memberikan Kebutuhan Website Landing Page, Desain, Domain, Hosting, Pengoperasian Dan Maintance"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5">
                <SmallCardIcon
                  title="Website Template"
                  description="Dapatkan website anda yang terbaik dan termurah."
                  icon={<FiLayout />}
                />
                <SmallCardIcon
                  title="Website Custom"
                  description="Levago dapat mewujudkan website idaman yang anda harapkan."
                  icon={<FiLayout />}
                />
              </aside>
              <TextArrowLink label="Selengkapnya" href="/service/detail" />
            </div>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-right">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Application"
                title="Website Application, Mobile Application"
                paragraph="Levago Memberikan solusi untuk memepermudah pekerjaan dengan Sistem Website dan Merancang Aplikasi Sesuai Keinginan Anda Yang Dapat Diakses Kapan Saja Melalui Berbagai Device"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="w-full grid grid-cols-1 gap-5">
                <CardListIcon
                  icon={<FiSmartphone />}
                  title="Mobile Application"
                />
                <CardListIcon icon={<FiGlobe />} title="Website Application" />
              </aside>
              <TextArrowLink label="Selengkapnya" href="/service/detail" />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-left">
            <figure className="w-full h-[450px] relative">
              <Image
                src={'/images/development-illustration.svg'}
                layout="fill"
                objectFit="fill"
                alt='IDE for development'
              />
            </figure>
          </aside>
        </section>
        <section className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-5 ">
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full" data-aos="fade-up-right">
            <figure className="w-full h-[545px] relative">
              <Image
                src={'/images/digital-marketing.svg'}
                layout="fill"
                objectFit="fill"
                alt='digital marketing'
              />
            </figure>
          </aside>
          <aside className="grid gap-12 place-items-center" data-aos="fade-up-left">
            <div className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left">
              <SectionSentence
                badge="Digital Marketing"
                title="Tingkatkan online presence & brand awareness melalui social media."
                paragraph="Levago tak hanya memberikan solusi secara teknologi, namun juga memberikan solusi melalui pemasaran digital"
              />
            </div>
            <div className="grid gap-6 w-full place-items-end md:w-8/12 lg:w-full">
              <aside className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">  
              </aside>
              <TextArrowLink label="Selengkapnya" href="/service/detail" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Services
