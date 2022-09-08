import { Button, Card, Col, Text } from '@nextui-org/react';
import React from 'react';
import acc from '../public/acc.jpg';
const News = () => {
  return (
    <div className="grid h-full w-2/3 justify-center items-center grid-cols-4 gap-2 grid-rows-10">
      <Card>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text
              size={12}
              weight="bold"
              transform="uppercase"
              color="#ffffffAA"
            >
              What to watch
            </Text>
            <Text h4 color="white">
              Stream the Acme event
            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="https://nextui.org/images/card-example-4.jpeg"
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card>
      
    </div>
  );
};

export default News;
