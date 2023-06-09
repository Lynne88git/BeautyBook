import React from 'react';
import { IService } from '../../Interfaces/iServices';
import './Services.css';

interface ServicesProps {
  services: IService[];
  handleServiceSelection: (service: string) => void;
}

const Services: React.FC<ServicesProps> = ({
  services,
  handleServiceSelection,
}) => {
  return (
    <>
      <h3 className="text-lg font-bold mb-4">Services</h3>
      <ul className="mb-4">
        {services.map((service, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <div>
              <p className="font-bold">{service.name}</p>
              <p className="text-sm text-gray-600">{service.time}</p>
            </div>
            <div>
              <p className="font-bold">${service.price}</p>
            </div>
            <button
              className="btn-primary text-white px-4 py-2 rounded"
              onClick={() => handleServiceSelection(service.name)}
            >
              Book it!
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Services;
