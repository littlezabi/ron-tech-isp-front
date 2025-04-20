import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '100vh',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
};


const CarouselCompo = () => {
return (<div>
    <Carousel className="relative w-full h-full" autoplay={{dotDuration: true}} autoplaySpeed={5000}>
    <div className="relative">
      <img
        style={contentStyle}
        src="https://img.freepik.com/free-photo/young-man-engineer-making-program-analyses_1303-20402.jpg?t=st=1745145053~exp=1745148653~hmac=bca40ae5b414fcadcd32996608ce6e44a218ca1c25024d6b66157bf65814dbdc&w=996"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 mb-4">
          Fast & Reliable Internet Service
        </h1>
        <p className="text-lg font-light text-gray-300">
          Experience seamless browsing and uninterrupted connectivity anywhere.
        </p>
      </div>
    </div>

    <div className="relative">
      <img
        style={contentStyle}
        src="https://neosnetworks.com/wp-content/uploads/2023/02/AdobeStock_191230387-1140x590.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 mb-4">
          Affordable Plans
        </h1>
        <p className="text-lg font-light text-gray-300">
          Get the best value with our tailored packages for home and business.
        </p>
      </div>
    </div>

    <div className="relative">
      <img
        style={contentStyle}
        src="https://neosnetworks.com/wp-content/uploads/2024/04/what-is-dedicated-internet-access-dia.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-orange-600 mb-4">
          Dedicated Internet Access
        </h1>
        <p className="text-lg font-light text-gray-300">
          Enjoy premium connectivity with a dedicated internet line just for you.
        </p>
      </div>
    </div>

    <div className="relative">
      <img
        style={contentStyle}
        src="https://neosnetworks.com/wp-content/uploads/2024/08/ip-transit-connections-842x590.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-600 to-pink-500 mb-4">
          Global Connectivity
        </h1>
        <p className="text-lg font-light text-gray-300">
          Connect to the world with high-speed global transit services.
        </p>
      </div>
    </div>
  </Carousel>
</div>)
}
  export default CarouselCompo;
