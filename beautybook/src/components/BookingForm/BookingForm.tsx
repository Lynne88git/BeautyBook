import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedEsthetician, setSelectedEsthetician] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const spaName = 'Fictional Spa';
  const spaAddress = '123 Spa Avenue, Imaginary City';

  const services = [
    { name: 'Massage', price: 50, time: '1 hour' },
    { name: 'Facial', price: 80, time: '45 minutes' },
    { name: 'Manicure', price: 30, time: '30 minutes' },
    // Add more services as needed
  ];

  const estheticians = [
    { name: 'John Doe', avatar: 'avatar1.jpg' },
    { name: 'Jane Smith', avatar: 'avatar2.jpg' },
    { name: 'David Johnson', avatar: 'avatar3.jpg' },
    // Add more estheticians as needed
  ];

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
    <div className="flex justify-center mt-10">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
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
                    className="bg-a16e48 text-white px-4 py-2 rounded"
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
                <div key={index} className="flex flex-col items-center mr-4">
                  <img
                    src={esthetician.avatar}
                    alt={esthetician.name}
                    className="w-16 h-16 rounded-full mb-2"
                  />
                  <p>{esthetician.name}</p>
                  <button
                    className={`${
                      selectedEsthetician === esthetician.name
                        ? 'bg-a16e48 text-white'
                        : 'bg-gray-300 text-gray-600'
                    } px-2 py-1 rounded mt-2`}
                    onClick={() => handleEstheticianSelection(esthetician.name)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold mb-4">Calendar</h2>
            {/* Calendar component goes here */}
            <button className="bg-a16e48 text-white px-4 py-2 rounded mb-4">
              Show Month
            </button>

            {/* Time slots */}
            <h2 className="text-xl font-bold mb-2">Available Times</h2>
            <div className="flex flex-wrap">
              {/* Render time slots as buttons */}
            </div>

            <button
              className="bg-a16e48 text-white px-4 py-2 rounded float-right"
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
  );
};

export default BookingForm;
