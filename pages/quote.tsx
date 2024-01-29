import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import SelectGroup from 'components/molecules/FormGroup/SelectGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const Quote = () => {
  return (
    <>
      <PageTemplate title='Send Idea - Levago'>
        <section className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-2">
          <aside className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-full lg:place-items-start" data-aos="fade-down-right">
            <div className="text-center lg:text-left">
              <PageSentence
                title="Kami adalah Solusi"
                description="Kami dengan senang hati membantu Anda, beritahu kami apa permasalahan yang ada pada perusahaan Anda, dan kami siap menjawab permasalahan tersebut."
                badge="KONTAK KAMI"
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="TANYA KAMI"
                href="/faq"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside className="w-full sm:w-10/12 md:w-8/12 lg:w-full lg:flex lg:justify-end" data-aos="fade-up-left">
            <div className="grid grid-cols-1 gap-7 p-6 md:p-9 bg-light rounded-md lg:w-10/12 ">
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Nama" />
                <InputGroup label="Email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <InputGroup label="Perusahaan" />
                <SelectGroup
                  label="Kuantitas Perusahaan"
                  options={[
                    { label: 'Kecil', value: 'small' },
                    { label: 'Menengah', value: 'medium' },
                    { label: 'Besar', value: 'large' },
                  ]}
                />
              </div>
              <TextAreaGroup label=" Pesan" />
              <Button value="Kirim" />
            </div>
          </aside>
        </section>
      </PageTemplate>
    </>
  )
}

export default Quote
