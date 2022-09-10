import React from 'react';
import { FaPlane } from 'react-icons/fa';
import { GiCargoCrate, GiFoodTruck } from 'react-icons/gi';
import { AiFillCustomerService } from 'react-icons/ai';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { motion, useScroll } from 'framer-motion';
const Info = () => {
  return (
    <div className="w-screen h-full mt-20 mb-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-cyan-600 font-bold text-xl">WHAT WE DO</h1>
        <h1 className=" font-bold text-4xl">Our Services Include</h1>
      </div>
      <motion.div
        initial={{ x: '-50vw' }}
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
              showSkeleton
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
                <Button flat auto rounded color={'gradient'}>
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
              showSkeleton
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
                <Button flat auto rounded color={'gradient'}>
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
                Training
              </Text>
            </Col>
          </Card.Header>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              showSkeleton
              src="https://scontent.fisu6-2.fna.fbcdn.net/v/t39.30808-6/299747539_830788401622911_4083274787300582680_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LIwfdiMxaHUAX_5_ce6&_nc_ht=scontent.fisu6-2.fna&oh=00_AT9QVqTpNi6kyV1byMTYVzTShai8KOrZ0efP-TjvQcStaQ&oe=63215294"
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
                <Button flat auto rounded color={'gradient'}>
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
              showSkeleton
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
                <Button flat auto rounded color={'gradient'}>
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
