import { UUID } from "crypto";

export interface ContactInfo {
  name: string;
  phoneNumber: string;
  relationship: string;
}

export interface CommunityTip {
  id?: string;
  name: string;
  tip: string;
  reportDate: string;
  isAnonymous: boolean;
  reportedCase: UUID;
}

export interface Case {
  id: string;
  name: string;
  age: number;
  gender: string;
  caseNumber: string;
  county: string;
  dateReported: string;
  physicalDescription: string;
  caseStatus: string;
  lastSeenLocation: string;
  lastSeenDate: string;
  clothingDescription: string;
  photoUrl?: string;
  additionalNotes?: string;
  contactInfo: ContactInfo;
  communityTips: CommunityTip[];
}

export interface ApiResponse<T> {
  message: string;
  payload: T;
}

export interface CreateCaseDto {
  name: string;
  age: number;
  gender: string;
  caseNumber: string;
  county: string;
  dateReported: string;
  physicalDescription: string;
  contactInfo: ContactInfo;
}

export interface CreateCommunityTipDto {
  name: string;
  tip: string;
  reportDate: string;
  isAnonymous: boolean;
  reportedCase: string;
}