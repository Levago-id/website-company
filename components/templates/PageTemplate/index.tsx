import NavBar from 'components/organisms/NavBar'
import CallOut from 'components/organisms/CallOut'
import Footer from 'components/organisms/Footer'
import React, { ReactNode, useEffect } from 'react'
import Container from 'components/templates/Container'
import Head from 'next/head'
import useGetBrowserName from 'hooks/useGetBrowserName'

interface PageTemplateProps {
  children: ReactNode[] | JSX.Element
  title?: string
}

const PageTemplate = ({ children, title = 'Collosal' }: PageTemplateProps) => {
  const browserName = useGetBrowserName()

  const commonContainerStyles = {
    minHeight: '100vh',
    position: 'relative',
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Navbar Fixed on top */}
      <NavBar />
      {/* Background */}
      <div className="w-full h-fit min-h-screen bg-sky-700 overflow-x-hidden">
        <div className="w-full h-full min-h-screen relative">
          <div className="w-full h-full min-h-screen relative before:absolute before:w-full before:h-full before:min-h-screen before:bg-[url('/images/page-background.svg')] before:bg-cover before:blur-[175px]">
            {/* Space for navbar, because navbar is absolute */}
            <div
              className={`w-full h-full min-h-screen relative ${
                browserName === 'Firefox' ? 'bg-sky-700' : 'bg-sky-700'
              } `}
            >
              <div className="h-[105px]"></div>
              {/* Padding */}
              <Container style={commonContainerStyles}>
                {children}
                <div data-aos="fade-right">
                  <CallOut />
                </div>
                <Footer />
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTemplate;
