import React from 'react';
import { FaPlane } from 'react-icons/fa';
const Service = ({ title, content, list }) => {
  return (
    <div className="mt-20">
      <h2>{title}</h2>
      <div
        className="w-[60vw]  border-solid border-prime"
        style={{ borderBottom: '0.3px', borderRadius: '5px' }}
      ></div>
      <div className="pt-10 place-content-start lg:w-[50vw]">
        <p>{content}</p>
        <ul className="grid grid-cols-2">
          {list
            ? list.map((item, index) => {
                return (
                  <li
                    className="flex place-content-start place-items-center gap-3"
                    key={index}
                  >
                    <FaPlane color="8758FF" />
                    <p className="text-back">{item}</p>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Service;
