import useMobileDeviceDetection from 'hooks/useMobileDetection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection();
  return (
    <div
      className={`select-none ${
        isMobile ? 'cursor-default' : 'cursor-pointer'
      }`}
    >
      <Link href={'/'} passHref>
        <div className="flex items-center">
          <Image
            src={'/images/levago/brand.png'}
            width={100} // Adjusted width for a slimmer navbar
            height={24} // Adjusted height for a slimmer navbar
            alt="company brand"
            loading="lazy"
          />
        </div>
      </Link>
    </div>
  );
};

export default NavBrand;
