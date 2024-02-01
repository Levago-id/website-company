import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const TermOfService = () => {
  return (
    <PageTemplate title='Term Of Service | Levago'>
      <section className="space-y-6 text-center" data-aos="zoom-in-up">
        <PageSentence badge="LEVAGO" title={`Terms & Conditions`} />
      <Text textStyle="BlogMeta" value="Updated at 2024-02-01" />
      </section>
      <LineDivider />
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-8/12 space-y-10">
          <Text
            textStyle="PageContent"
            value={`
            Dengan mengakses dan melakukan pemesanan dengan Levago, Anda mengonfirmasi bahwa Anda menyetujui dan terikat oleh persyaratan layanan yang terdapat dalam Syarat & Ketentuan yang diuraikan di bawah ini. Ketentuan ini berlaku untuk seluruh situs web dan semua email atau jenis komunikasi lainnya antara Anda dan Levago.
            <br> <br>
            Dalam situasi apa pun, Tim Levago tidak bertanggung jawab atas segala kerugian langsung, tidak langsung, khusus, insidental, atau konsekuensial, termasuk, namun tidak terbatas pada, hilangnya data atau keuntungan, yang timbul dari penggunaan, atau ketidakmampuan untuk menggunakan, materi di sini. situs, meskipun tim Levago atau perwakilan resmi telah diberitahu tentang kemungkinan kerusakan tersebut. Jika penggunaan Anda atas materi dari situs ini mengakibatkan perlunya servis, perbaikan atau koreksi peralatan atau data, Anda menanggung segala biayanya.
            <br> <br>
            Levago tidak akan bertanggung jawab atas hasil apa pun yang mungkin terjadi selama penggunaan sumber daya kami. Kami berhak mengubah harga dan merevisi kebijakan penggunaan sumber daya kapan saja.
              `}
          />
          <div className="space-y-2.5">
            <Text textStyle="PageSubtitle" value="Lisensi" />
            <Text
              textStyle="PageContent"
              value={`
              Levago memberi Anda lisensi terbatas yang dapat dibatalkan, non-eksklusif, tidak dapat dialihkan, untuk mengunduh, menginstal, dan menggunakan situs web secara ketat sesuai dengan ketentuan Perjanjian ini.
              <br> <br>
              Syarat & Ketentuan ini adalah kontrak antara Anda dan Levago ("kami", "milik kami", atau "kita") yang memberi Anda lisensi terbatas yang dapat dibatalkan, non-eksklusif, tidak dapat dialihkan, untuk mengunduh, memasang, dan menggunakan situs web secara ketat sesuai dengan keinginan Anda. sesuai dengan ketentuan Perjanjian ini.
              `}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default TermOfService
