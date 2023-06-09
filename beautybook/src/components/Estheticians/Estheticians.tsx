import React from 'react';
import { IEstheticians } from '../../Interfaces/iEstheticians';
import esthetician1 from '../../../assets/images/75.jpg';
import esthetician2 from '../../../assets/images/30.jpg';
import esthetician3 from '../../../assets/images/5.jpg';
import esthetician4 from '../../../assets/images/77.jpg';
import esthetician5 from '../../../assets/images/38.jpg';
import './Estheticians.css';

interface EstheticiansProps {
  estheticians: IEstheticians[];
  selectedEsthetician: string;
  handleEstheticianSelection: (esthetician: string) => void;
}

const Estheticians: React.FC<EstheticiansProps> = ({
  estheticians,
  selectedEsthetician,
  handleEstheticianSelection,
}) => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Estheticians</h2>
      <div className="flex flex-wrap my-4">
        {estheticians.map((esthetician, index) => (
          <div key={index} className="flex flex-col items-center mb-4 w-1/5">
            <img
              src={esthetician.avatar.src}
              alt={esthetician.name}
              className="w-16 h-16 rounded-full mb-2"
            />
            <p className="text-left">{esthetician.name}</p>
            <p className="text-left">{esthetician.lastName}</p>
            <button
              className={`${
                selectedEsthetician === esthetician.name
                  ? 'btn-primary text-white'
                  : 'bg-gray-300 text-gray-600'
              } px-2 py-1 rounded mt-2`}
              onClick={() => handleEstheticianSelection(esthetician.name)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Estheticians;
