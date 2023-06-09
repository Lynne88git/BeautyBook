import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import { IService } from '../Interfaces/iServices';
import { IEstheticians } from '../Interfaces/iEstheticians';
import './BookingForm.css';
import esthetician1 from '../../../assets/images/75.jpg';
import esthetician2 from '../../../assets/images/30.jpg';
import esthetician3 from '../../../assets/images/5.jpg';
import esthetician4 from '../../../assets/images/77.jpg';
import esthetician5 from '../../../assets/images/38.jpg';

const BookingForm: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedEsthetician, setSelectedEsthetician] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const spaName = 'Elysian Spa & Wellness';
  const spaAddress = '7 Serenity Lane, Imory City, 0801';

  const services: IService[] = [
    { name: 'Massage', price: 50, time: '1 hour' },
    { name: 'Facial', price: 80, time: '45 minutes' },
    { name: 'Manicure', price: 30, time: '30 minutes' },
    // Add more services as needed
  ];

  const estheticians: IEstheticians[] = [
    {
      name: 'Lacie',
      lastName: 'Maneth',
      avatar: createImageElement(esthetician1),
    },
    {
      name: 'Roslyn',
      lastName: 'Jove',
      avatar: createImageElement(esthetician2),
    },
    {
      name: 'Tiffany',
      lastName: 'Destro',
      avatar: createImageElement(esthetician3),
    },
    {
      name: 'Tisha',
      lastName: 'Werder',
      avatar: createImageElement(esthetician4),
    },
    {
      name: 'Mahalia',
      lastName: 'Whisenand',
      avatar: createImageElement(esthetician5),
    },
  ];

  function createImageElement(src: string): HTMLImageElement {
    const image = new Image();
    image.src = src;
    return image;
  }

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    setPage(2);
  };

  const handleEstheticianSelection = (esthetician: string) => {
    setSelectedEsthetician(esthetician);
    setPage(3);
  };

  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookingConfirmation = () => {
    // TODO: Handle booking confirmation, e.g., send a request to the backend API
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="booking-form w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="flex justify-center">
          <div className="container">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto booking-form-logo mb-8"
            />
            {page === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4">{spaName}</h2>
                <p className="text-gray-600 mb-4">{spaAddress}</p>
                <h3 className="text-lg font-bold mb-4">Services</h3>
                <ul className="mb-4">
                  {services.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between mb-2"
                    >
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
            )}

            {page === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">Estheticians</h2>
                <div className="flex mb-4">
                  {estheticians.map((esthetician, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center mr-4"
                    >
                      <img
                        src={esthetician.avatar.src}
                        alt={esthetician.name}
                        className="w-16 h-16 rounded-full mb-2"
                      />
                      <p>{esthetician.name}</p>
                      <p>{esthetician.lastName}</p>
                      <button
                        className={`${
                          selectedEsthetician === esthetician.name
                            ? 'btn-primary text-white'
                            : 'bg-gray-300 text-gray-600'
                        } px-2 py-1 rounded mt-2`}
                        onClick={() =>
                          handleEstheticianSelection(esthetician.name)
                        }
                      >
                        Select
                      </button>
                    </div>
                  ))}
                </div>

                <h2 className="text-xl font-bold mb-4">Calendar</h2>
                {/* Calendar component goes here */}
                <button className="btn-primary text-white px-4 py-2 rounded mb-4">
                  Show Month
                </button>

                {/* Time slots */}
                <h2 className="text-xl font-bold mb-2">Available Times</h2>
                <div className="flex flex-wrap">
                  {/* Render time slots as buttons */}
                </div>

                <button
                  className="btn-primary text-white px-4 py-2 rounded float-right"
                  onClick={handleBookingConfirmation}
                >
                  Book it!
                </button>
                <p className="font-bold float-right mr-4">
                  Total Cost: {/* Calculate and display the total cost */}
                </p>
              </>
            )}

            {page === 3 && (
              <>
                <h2 className="text-xl font-bold mb-4">Success!</h2>
                <p>Your booking details:</p>
                <p>
                  Service: {selectedService} <br />
                  Esthetician: {selectedEsthetician} <br />
                  Date: {selectedDate} <br />
                  Time: {selectedTime}
                </p>
                <p className="text-green-500 mt-4">Booking confirmed!</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
