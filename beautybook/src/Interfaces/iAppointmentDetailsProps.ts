export interface iAppointmentDetailsProps {
    appointment: {
      id: number;
      esthetician: string;
      avatarUrl: string;
      services: string;
      startDatetime: string;
      endDatetime: string;
    };
  }