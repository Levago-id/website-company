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
    <PageTemplate title="Team - Levago">
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
