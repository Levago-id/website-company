import NavBrand from 'components/atoms/NavBrand';
import NavLink from 'components/atoms/NavLink';
import Text from 'components/atoms/Text';
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16 h-full"> {/* Add the "h-full" class */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`All Right Reserved`}
                textStyle="SectionParagraph"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SOCIAL MEDIA" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink
                  value="Instagram"
                  href="https://www.instagram.com/levago.id"
                />
                <NavLink
                  value="Linkedin"
                  href="https://www.linkedin.com/company/levago-indonesia"
                />
                <NavLink value="Tiktok" href="https://www.tiktok.com/@levagoindonesia" />
                <NavLink value="Twitter" href="https://twitter.com/levago_id" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Tentang Kami" href="/about" />
                <NavLink value="Kontak" href="/contact" />
                <NavLink value="Saran" href="/quote" />
                <NavLink value="Harga" href="/pricing" />
                <NavLink value="Term of Service" href="/term-of-service" />
                <NavLink value="Internship" href="/jobs" />
              </div>
            </div>
            <div className="space-y-5">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79465803024!2d110.4170652!3d-7.0247298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sKota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1706195494605!5m2!1sid!2sid"
                width="130%"
                height="300"
                frameBorder="0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
