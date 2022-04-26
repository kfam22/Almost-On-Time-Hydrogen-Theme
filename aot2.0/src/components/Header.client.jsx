import {useEffect, useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import {useCartUI} from './CartUIProvider.client';
import CountrySelector from './CountrySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';
import '../header.css';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (
    <header role="banner">
      <Link to="/" className="logo"> {storeName} </Link>
      <div className="verticalNav">
        <div className="cart">
          <CartToggle
            handleClick={() => {
            if (isMobileNavOpen) setIsMobileNavOpen(false);
            }}
          />
        </div>

        <div className="nav">
          <Link to="/">shop</Link>
          <Link to="/">about</Link>
          <Link to="/">press</Link>
        </div>
      </div>
    </header>
  );
}

{/* <div
        className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${
          isMobileNavOpen ? '' : 'bg-opacity-95'
        }`}
      >
        <div
          className="h-full flex lg:flex-col place-content-between"
          style={{
            paddingRight: isCartOpen ? scrollbarWidth : 0,
          }}
        >
          <div className="nav">
            <CountrySelector />
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              {storeName}
            </Link>
            <CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              about
            </Link>
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              press
            </Link>
            <Link
              className="font-black uppercase text-3xl tracking-widest"
              to="/"
            >
              shop
            </Link>
          </div>
          <Navigation collections={collections} storeName={storeName} />
        </div>
      </div> */}
