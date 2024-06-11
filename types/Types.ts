import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  gender?: string;
  contactNumber?: string;
  professionalRole?: string;
  highestLevelOfEducation?: string;
  race?: string;
  industryOfWork?: string;
  companyName?: string;
  yearsOfExperience?: string;
  currentJobDetails?: string;
  capacity?: string;
  reason?: string;
  values?: string;
  commitment?: string;
  challenges?: string;
  beenAMentor?: string;
  areaOfMentorship?: string;
  fileName?: string;
  file?: FileList;
  salutation?: string;
  phoneNumber?: string;
  address?: string;
  major?: string;
  specialization?: string;
  bestContactType?: string;
  reasonForApplication?: string;
  helpToRender?: string;
  idealMentor?: string;
  mentorExperienceGain?: string;
  interests?: string;
  additionalInfo?: string;
  projectTitle?:string;
  projectDescription?:string;
  question?:string;
  answer?:string;
}

export type InputFieldProps = {
  label: string;
  name: keyof FormFields;
  type?: string;
  register: UseFormRegister<FormFields>;
  errors: FieldErrors<FormFields>;
  setValue: (value: any) => void;
  validation?: object;
  value: any;
  placeholder?: string;
};
