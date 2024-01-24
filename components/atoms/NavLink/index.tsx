import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useMobileDeviceDetection from 'hooks/useMobileDetection';

interface Props {
  href: string;
  value: string;
  canActive?: boolean;
}

const NavLink = ({ href, value, canActive = false }: Props) => {
  const router = useRouter();
  const isMobile = useMobileDeviceDetection();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link href={href} passHref>
      <p
        className={`select-none hover:text-white ${
          (router.pathname === href && canActive) || isScrolled
            ? 'font-semibold text-blue-900'
            : 'text-opacity-80'
        } ${isMobile ? 'cursor-pointer text-blue-900' : 'cursor-pointer text-blue-1000 font-semibold'}`}
      >
        {value}
      </p>
    </Link>
  );
};

export default NavLink;
