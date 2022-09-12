import { Dropdown, Link, Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png';

const Nav = () => {
  const collapseItems = [
    'Home',
    'Services',
    'Catering',
    'Azmar Holiday',
    'Training',
    'NEWS',
    'About',
    'Contact',
  ];

  return (
    <Navbar
      variant="static"
      maxWidth={'fluid'}
      css={{ bgColor: '#0F3460' }}
      disableBlur
      disableShadow
    >
      <Navbar.Brand
        css={{
          '@xl': {
            w: '20%',
          },
        }}
      >
        <Image src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="highlight"
        css={{
          '@xl': {
            fontSize: '$lg',
          },
        }}
      >
        <Navbar.Link href="/" itemCss={{ fontWeight: '$semibold' }}>
          Home
        </Navbar.Link>
        <Navbar.Link href="services" itemCss={{ fontWeight: '$semibold' }}>
          Services
        </Navbar.Link>
        <Navbar.Link href="catering" itemCss={{ fontWeight: '$semibold' }}>
          Catering
        </Navbar.Link>
        <Navbar.Link href="holiday" itemCss={{ fontWeight: '$semibold' }}>
          Azmar Holiday
        </Navbar.Link>
        <Navbar.Link href="NEWS" itemCss={{ fontWeight: '$semibold' }}>
          NEWS
        </Navbar.Link>
        <Navbar.Link href="about" itemCss={{ fontWeight: '$semibold' }}>
          About
        </Navbar.Link>
        <Navbar.Link isActive href="#">
          Contact
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="primary"
            isActive={index === 7}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href={item}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
