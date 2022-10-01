import React from 'react';
import { FaPlane } from 'react-icons/fa';
const Service = ({ title, content, list }) => {
  return (
    <div className="mt-20 z-10 bg-back p-10 rounded-xl shadow-2xl">
      <h2 className="text-text  font-extrabold">{title}</h2>
      <div
        className="w-[60vw]  border-solid border-prime"
        style={{ borderBottom: '0.3px', borderRadius: '5px' }}
      ></div>
      <div className="pt-10 place-content-start lg:w-[50vw]">
        <p className="text-text  font-bold">{content}</p>
        <ul className="grid md:grid-cols-2">
          {list
            ? list.map((item, index) => {
                return (
                  <li
                    className="flex place-content-start place-items-center gap-3"
                    key={index}
                  >
                    <FaPlane color="34a853" />
                    <p className="text-text  font-semibold">{item}</p>
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
