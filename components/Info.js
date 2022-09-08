import React from 'react';
import { FaPlane } from 'react-icons/fa';
import { GiCargoCrate, GiFoodTruck } from 'react-icons/gi';
import { AiFillCustomerService } from 'react-icons/ai';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { motion, useScroll } from 'framer-motion';
const Info = () => {
  return (
    <div className="w-screen h-full mt-20 mb-20">
      <motion.div
        initial={{ x: '-100vw' }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        transition={{ ease: 'easeInOut', bounce: 1 }}
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-cyan-600 font-bold text-xl">WHAT WE DO</h1>
        <h1 className=" font-bold text-4xl">Our Services Include</h1>
        
      </motion.div>
      <motion.div
        initial={{ x: '-100vw' }}
        whileInView={{ x: 0 }}
        viewport={{ once: false }}
        className="grid place-content-evenly sm:grid-cols-4 grid-cols-1  h-full p-10 gap-5 "
      >
        <Card css={{ w: '100%', h: '400px', m: 5 }} isHoverable>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                <FaPlane />
              </Text>
              <Text h3 color="black" weight={'bold'}>
                Ground Handling
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: '#94f9f0', bg: '#94f9f026' }}
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Read More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Card.Footer>
        </Card>

        <Card css={{ w: '100%', h: '400px', m: 5 }} isHoverable>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                <GiFoodTruck />
              </Text>
              <Text h3 color="black" weight={'bold'}>
                Catering
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://azmarairstorage.blob.core.windows.net/root/root/images/111132019_SERVAIR-Vehicle.jpg"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: '#94f9f0', bg: '#94f9f026' }}
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Read More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Card.Footer>
        </Card>

        <Card css={{ w: '100%', h: '400px', m: 5 }} isHoverable>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                <FaPlane />
              </Text>
              <Text h3 color="black" weight={'bold'}>
                Customer Care
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://images.pexels.com/photos/63991/pexels-photo-63991.jpeg?auto=compress&cs=tinysrgb&w=1600"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: '#94f9f0', bg: '#94f9f026' }}
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Read More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Card.Footer>
        </Card>

        <Card css={{ w: '100%', h: '400px', m: 5 }} isHoverable>
          <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                <FaPlane />
              </Text>
              <Text h3 color="black" weight={'bold'}>
                Cargo Handling
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src="https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: 'absolute',
              bgBlur: '#ffffff66',
              borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Col>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: '#94f9f0', bg: '#94f9f026' }}
                >
                  <Text
                    css={{ color: 'inherit' }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Read More
                  </Text>
                </Button>
              </Row>
            </Col>
          </Card.Footer>
        </Card>
      </motion.div>
    </div>
  );
};

export default Info;
