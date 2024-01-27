import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="About - Levago">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="TENTANG KAMI"
            title="Digitalize Your Business!"
            description={`Levago adalah perusahaan penyedia layanan IT terpercaya yang mengkhususkan diri dalam pengembangan teknologi informasi. Kami fokus pada perancangan dan pengembangan website, aplikasi, serta digitalisasi sistem informasi. Dengan komitmen kepada inovasi dan kualitas, Levago siap mewujudkan solusi IT terbaik untuk memenuhi kebutuhan bisnis Anda.`}
          />
        </aside>
      </section>
      <LineDivider />
      {/*<section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
  </section>*/}
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/honey.jpg"
              job="Chief Executive Officer"
              name="Honey Nathania Marsela"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/rekel.jpeg"
              job="Chief Technology Officer"
              name="George Miracle Theophylus"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/juna.jpeg"
              job="Chief Financial Officer "
              name="Arjuna Hamonangan K.D.P."
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/dwy.JPG"
              job="Chief Marketing Officer"
              name="Dwy Wahyuni Sukmawati"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/niko.png"
              job="Head Of Frontend Developer"
              name="Nikolaus Evan Dewanto"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/samuel.jpeg"
              job="Head Of Backend Developer"
              name="Samuel Arya Permana"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default About
