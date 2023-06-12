import React, { useState } from 'react';
import Calendar from '../Calendar/Calendar';
import Logo from '../../../assets/images/logo.png';
import { IService } from '../../Interfaces/iServices';
import { IEstheticians } from '../../Interfaces/iEstheticians';
import './BookingForm.css';
import esthetician1 from '../../../assets/images/75.jpg';
import esthetician2 from '../../../assets/images/30.jpg';
import esthetician3 from '../../../assets/images/5.jpg';
import esthetician4 from '../../../assets/images/77.jpg';
import esthetician5 from '../../../assets/images/38.jpg';
import TimeSlots from '../TimeSlots/TimeSlots';
import Estheticians from '../Estheticians/Estheticians';
import Services from '../Services/Services';
import CostCalculator from '../CostCalculator/CostCalculator';
import { format } from 'date-fns';

const BookingForm: React.FC = () => {
  const [page, setPage] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedEsthetician, setSelectedEsthetician] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [serviceSelected, setServiceSelected] = useState(false);
  const [selectedServices, setSelectedServices] = useState<IService[]>([]);
  const [fullSelectionCompleted, setFullSelectionCompleted] = useState(false);

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

  const handleServiceSelection = (
    serviceName: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    const selectedService = services.find(
      (service) => service.name === serviceName,
    );
    if (selectedService) {
      setSelectedServices((prevSelectedServices) => [
        ...prevSelectedServices,
        selectedService,
      ]);
      setServiceSelected(true);
    } else {
      // Handle the case where the selected service is not found
    }
  };

  const handleContinue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (serviceSelected) {
      setPage(2);
    } else {
      // Display an error message or perform any other necessary actions
    }
  };

  const handleEstheticianSelection = (
    esthetician: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedEsthetician(esthetician);
    setFullSelectionCompleted(selectedTime !== '');
  };

  const handleDateSelection = (
    date: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedDate(date);
    setFullSelectionCompleted(
      selectedEsthetician !== '' && selectedTime !== '',
    );
  };

  const handleTimeSelection = (
    time: string,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedTime(time);
    setFullSelectionCompleted(selectedEsthetician !== '');
  };

  const handleBookingConfirmation = () => {
    // TODO: Handle booking confirmation, e.g., send a request to the backend API
    setPage(3);
    console.log('Booking Confirmation');
    console.log('Selected Service:', selectedService);
    console.log('Selected Esthetician:', selectedEsthetician);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="booking-form w-full px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
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
                <Services
                  services={services}
                  handleServiceSelection={handleServiceSelection}
                />
                <button
                  className="btn-primary-outline mt-16 px-4 py-2 rounded float-right"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </>
            )}

            {page === 2 && (
              <>
                <div className="mb-4">
                  <Estheticians
                    estheticians={estheticians}
                    selectedEsthetician={selectedEsthetician}
                    handleEstheticianSelection={handleEstheticianSelection}
                  />
                </div>
                <Calendar handleDateSelection={handleDateSelection} />
                {/* Selected Services */}
                <div className="container py-12">
                  <h2 className="text-xl font-bold mb-2">Selected Services</h2>
                  <ul>
                    {selectedServices.map((service) => (
                      <li key={service.name}>
                        {service.name} - ${service.price}
                        <p className="text-sm text-gray-600">{service.time}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Time slots */}
                <div className="container py-12">
                  <h2 className="text-xl font-bold mb-2">Available Times</h2>
                  <div className="flex flex-wrap">
                    <TimeSlots handleTimeSelection={handleTimeSelection} />
                  </div>
                </div>
                <div className="font-bold float-left mr-4">
                  Total Cost: {/* Calculate and display the total cost */}
                  <CostCalculator />
                </div>
                <button
                  className="btn-primary-outline mt-16 px-4 py-2 rounded float-right"
                  onClick={handleBookingConfirmation}
                  disabled={!fullSelectionCompleted}
                >
                  Book My Appointment
                </button>
              </>
            )}

            {page === 3 && (
              <>
                <h2 className="text-xl font-bold mb-4">Success!</h2>
                <p>Your booking details:</p>
                <p>
                  Services:
                  <br />
                  {selectedServices.map((service) => (
                    <span key={service.name}>
                      {service.name} <br />
                    </span>
                  ))}
                  Esthetician: {selectedEsthetician} <br />
                  Date: {format(new Date(selectedDate), 'd MMMM yyyy')} <br />
                  Time: {selectedTime}
                </p>
                <p className="text-green-500 mt-4">Booking confirmed!</p>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
