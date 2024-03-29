import React, { useEffect, useState } from 'react';
import NavBrand from 'components/atoms/NavBrand';
import NavLink from 'components/atoms/NavLink';
import ButtonLink from 'components/atoms/Button/ButtonLink';
import Container from 'components/templates/Container';
import { FiMenu, FiX } from 'react-icons/fi';
import UAParser from 'ua-parser-js';
import useMobileDeviceDetection from 'hooks/useMobileDetection';
import useGetBrowserName from 'hooks/useGetBrowserName';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const browserName = useGetBrowserName();
  const isMobile = useMobileDeviceDetection();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.classList.add('h-screen');
      body.classList.add('overflow-y-hidden');
    } else {
      body.classList.remove('h-screen');
      body.classList.remove('overflow-y-hidden');
    }
  }, [isOpen]);

  return (
    <>
      <nav
        className={`pt-8 w-full top-0 left-0 z-30 ${
          isScrolled || isOpen ? 'fixed' : 'absolute'
        }`}
      >
        <Container>
          <div
            className={`${
              isScrolled || isOpen ? 'bg-white' : 'bg-light'
            } px-6 py-4 w-full rounded-md backdrop-blur-3xl ${
              isScrolled || isOpen ? '' : 'lg:bg-transparent lg:px-0'
            }`}
          >
            <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
              <div className="w-full flex flex-row place-content-between place-items-center lg:w-fit">
                <NavBrand />
                <div
                  className={`lg:hidden ${
                    isMobile ? 'cursor-default' : 'cursor-pointer'
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className={`text-white-500 text-2xl`}>
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  isOpen ? '' : 'hidden '
                }space-y-5 mt-4 lg:mt-0 lg:space-y-0 lg:space-x-16 lg:flex lg:place-items-center`}
              >
                <NavLink href="/service" value="Layanan" canActive={true} />
                <NavLink href="/project" value="Project" canActive={true} />
                <NavLink
                  href="/how-we-work"
                  value="Cara Kerja"
                  canActive={true}
                />
               
                <NavLink href="/about" value="Tentang Kami" canActive={true} />
              </div>
              <div
                className={`${isOpen ? '' : 'hidden '}lg:block mt-5 lg:mt-0`}
              >
                <ButtonLink
                  value="Kontak"
                  size="small"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default NavBar;
