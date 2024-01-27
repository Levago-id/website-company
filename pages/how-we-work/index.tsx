import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <PageTemplate title="Cara Kerja - Levago">
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="zoom-in-up">
          <PageSentence
            badge="CARA KERJA LEVAGO"
            title="Levago memiliki alur kerja yang memungkinkan pekerjaan diselesaikan dengan baik"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/discuss-illustration.webp'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Some people discuss'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 01"
            title={`Konsultasikan masalah perusahaan Anda`}
            paragraph={"Setelah mengirimkan formulir penawaran, kami akan meninjau kembali, kemudian kami akan menghubungi Anda. Dan berdiskusi dengan tim kami mengenai permasalahan Anda dan mencari solusi dari permasalahan tersebut. <br> <br> Pada langkah ini, Anda akan membahas aplikasi apa yang akan dibangun."}
          />
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-right">
          <SectionSentence
            badge="STEP 02"
            title={`Melakukan perencanaan, desain, dan pengembangan hingga semuanya selesai.`}
            paragraph="Ketika semua sudah disepakati, tim kami akan membuat rencana terkait dengan aplikasi yang akan dibuat. Mulai dari analisis, desain, hingga pengembangan. <br> <br> Pada langkah ini, aplikasi sudah 100% selesai."
          />
        </aside>
        <aside className="w-full" data-aos="fade-up-left">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/development-illustration-2.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Development'
            />
          </div>
        </aside>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="fade-up-right">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/project-asset-illustration.svg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Project Asset'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="fade-up-left">
          <SectionSentence
            badge="STEP 03"
            title={`Proyek sudah selesai dan kami telah mengirimkan semua aset proyek serta akses ke server.`}
            paragraph="Kami akan bertanggung jawab untuk mengirimkan semua aset proyek kepada Anda, jangan khawatir. Aset-aset ini mencakup file desain, kode sumber, akses server, dan sebagainya. <br> <br> Pada langkah ini, semua sudah selesai dan kontrak berakhir."
          />
        </aside>
      </section>
      <LineDivider />
    </PageTemplate>
  )
}

export default HowWeWork
