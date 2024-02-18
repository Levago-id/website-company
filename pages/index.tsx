import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiGlobe, FiCode, FiTablet } from 'react-icons/fi'
const Home = () => {
  return (
    <>
      <PageTemplate title="Levago Company Website">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Digitalize Your Business With Levago."
              description="Levago berfokus pada perancangan dan pengembangan  web, aplikasi, serta mendigitalkan sistem informasi. Dengan komitmen terhadap inovasi dan kualitas, Levago siap menciptakan solusi IT terbaik untuk memenuhi kebutuhan bisnis Anda."
              badge="LEVAGO INDONESIA"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Hubungi" href="/quote" />
            <ButtonLink
              value="Lebih Lanjut"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Website Design"
              description="Levago Memberikan Kebutuhan Website Landing Page, Desain, Domain, Hosting, Pengoperasian Dan Maintance"
              icon={<FiGlobe />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Website App"
              description="Levago Memberikan Solusi Untuk Mempermudah Pekerjaan Dengan Sistem Informasi Yang Dirancang Sesuai Kebutuhan"
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Mobile App"
              description="Levago Mampu Merancang Aplikasi Sesuai Keinginan Anda Yang Dapat Diakses Kapan Saja Melalui Berbagai Device"
              icon={<FiTablet />}
            />
          </div>
        </section>
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={'/images/how-we-work-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Semuanya terencana dengan baik, dirancang dengan baik dan dikembangkan dengan sepenuh hati"
              paragraph="Perencanaan yang matang membuat kami percaya diri, dikembangkan dengan praktik terbaik sehingga proyek dapat dipertahankan. Kami selalu menguji proyek sebelum dikirim."
              badge="Cara Kerja Kami"
            />
          </aside>
        </section>
        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="Kami adalah seorang yang ahli untuk mendigitalisasikan produk anda."
                paragraph="Tim kami terdiri dari banyak orang kreatif. Kami berkomitmen untuk menjaga kualitas kerja dan kecepatan. Orang-orang kreatif ini bekerja sama untuk menciptakan hasil kerja yang maksimal."
                badge="Tim Kami"
              />
              <ButtonLink
                value="Lihat Tim Kami"
                href="/team"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Prices */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Apa yang kamu butuhkan? Pilih layanan yang dapat membantu Anda"
              badge="Layanan Kami"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="85K/Bulan"
                title="Website"
                features={[
                  'Server dan Domain',
                  'Maintance selama 1 tahun',
                  'Tambah Fitur Minor',
                  'Responsive Mobile',
                  'Additional Email',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
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
            <div data-aos="fade-up-left">
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
          </div>
        </section>
        {/* Testimonial 
        <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What do our clients say that we never let down?"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section>*/}
      </PageTemplate>
    </>
  )
}
export default Home
