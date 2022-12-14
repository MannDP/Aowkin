import { FieldValue, Timestamp } from "firebase/firestore";

export type TDiaryEntry = {
  id?: string;
  uid?: string;
  created_at: FieldValue | Timestamp;
  updated_at: FieldValue | Timestamp;
  sleep_time: number;
  sleep_rating: number;
  mood: number;
  stress: number;
  medication_compliance: boolean;
  medications: string[];
  pain: boolean;
  pain_type: string;
  vision_impaired: boolean;
  priapism_episode: boolean;
  fever: boolean;
};
