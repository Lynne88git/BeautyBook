// import React from 'react';
// import { iAppointmentDetailsProps } from '../../Interfaces/iAppointmentDetailsProps';

// const AppointmentDetails: React.FC<iAppointmentDetailsProps> = ({
//   appointment,
// }) => {
//   const { esthetician, avatarUrl, services, startDatetime, endDatetime } =
//     appointment;

//   return (
//     <div className="border rounded-lg p-4 mt-4">
//       <h3 className="text-lg font-semibold">{esthetician}</h3>
//       {avatarUrl && (
//         <img
//           src={avatarUrl}
//           alt="Esthetician Avatar"
//           className="w-20 h-20 rounded-full mt-2"
//         />
//       )}
//       <p className="mt-2">
//         <strong>Services:</strong> {services}
//       </p>
//       <p>
//         <strong>Start Date and Time:</strong> {startDatetime}
//       </p>
//       <p>
//         <strong>End Date and Time:</strong> {endDatetime}
//       </p>
//     </div>
//   );
// };

// export default AppointmentDetails;
