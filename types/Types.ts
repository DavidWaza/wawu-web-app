import { UseFormRegister, FieldErrors } from "react-hook-form";

export interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  gender?: string;
  password?:string;
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
  about?:string;
  skills?:string;
  preferredLanguage?:string;
  education?:string;
  certification?:string;
  institution?:string;
  courseOfStudy?:string;
  graduationDate?:string
  name?:string;
  endDate?:Date | null
  country?:string;
  state?:string;
  twitter?:string;
  facebook?:string;
  linkedIn?:string;
  instagram?:string;
  role?:number;
  advert_link?:string
  post_advert?:string;
  call_to_action_button?:string;
  advert_time_frame?:string
  bestProject?:string;
  getDone?:string;
  industry?:string;
  budget?:string
  description?:string;
  title?:string;
  category?:string
  sub_category?:string
  meansOfIdentification?:string
  mentorReasons?:string
  termsAccepted?:boolean
  zipcode?:string,
  discountCode?:string,
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
  className?:string
};

export type ServiceSubCategory = {
  uuid: string;
  name: string;
  createdAt: string;
  updatedAt: string | null;
  serviceCategory: string | null;
};

export type ServiceItem = {
  uuid: string;
  firstName: string;
  lastName:string;
  additionalInfo:IInfo
  createdAt: string;
  updatedAt: string | null;
  popularCount: number;
  serviceSubCategory: ServiceSubCategory;
};

export type ServiceCategoryData = {
  [key: string]: ServiceItem[];
};

interface IInfo {
  about:string
}