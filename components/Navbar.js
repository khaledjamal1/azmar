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
    <Navbar variant="sticky" color="black" maxWidth={'fluid'}>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xl': {
            w: '20%',
          },
        }}
      >
        <Image src={logo} alt="logo" />
        <Text b color="inherit" hideIn="xs" size={'large'}>
          Azmar Airlines
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="warning"
        hideIn="xs"
        variant="highlight"
        css={{
          '@xl': {
            fontWeight: '$extrabold',
            fontSize: '$lg',
          },
        }}
      >
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Catering</Navbar.Link>
        <Navbar.Link href="#">Azmar Holiday</Navbar.Link>
        <Navbar.Link href="#">NEWS</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link isActive href="#">
          Contact
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Collapse disableAnimation>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="warning"
            css={{
              color: index === collapseItems.length - 1 ? '$error' : '',
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
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
