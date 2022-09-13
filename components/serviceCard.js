import React from 'react';
import { FaPlane } from 'react-icons/fa';
import Card from './Card';
const ServiceCard = ({ title, content, list }) => {
  return (
    <div className="mt-20">
      <h2>{title}</h2>
      <div
        className="w-[60vw]  border-solid border-prime"
        style={{ borderBottom: '0.3px', borderRadius: '5px' }}
      ></div>
      <div className="pt-10 place-content-start lg:w-[50vw]">
        <p>{content}</p>
        <div className="grid grid-cols-2">
          {list
            ? list.map((item, index) => {
                return (
                  <Card
                    key={index}
                    title={item.title}
                    content={item.content}
                    src={item.src}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
