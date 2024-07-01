import React from 'react';

function Color({ colorData, setColor }) {
  return (
    <div>
      <ul className="color p-0">
        {colorData &&
          colorData?.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setColor(item?._id)}
                style={{ backgroundColor: item?.title }}
              ></li>
            );
          })}
      </ul>
    </div>
  );
}

export default Color;
