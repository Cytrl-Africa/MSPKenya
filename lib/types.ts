export type Gender = "male" | "female" | "other" | "unknown";
export type CaseStatus = "missing" | "found" | "urgent";

export interface Tip {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  isAnonymous: boolean;
}

export interface MissingPerson {
  id: string;
  caseNumber: string;
  name: string;
  age: number;
  gender: Gender;
  county: string;
  lastSeenLocation: string;
  lastSeenDate: string;
  reportedDate: string;
  physicalDescription: string;
  clothingDescription: string;
  photoUrl?: string;
  status: CaseStatus;
  reportedBy: string;
  contactPhone: string;
  tips: Tip[];
  additionalNotes?: string;
}

export const KENYA_COUNTIES = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet",
  "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado",
  "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga",
  "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia",
  "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit",
  "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi",
  "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
  "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
  "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu",
  "Vihiga", "Wajir", "West Pokot"
];

export const MOCK_CASES: MissingPerson[] = [
  {
    id: "1",
    caseNumber: "TK-2024-0042",
    name: "Amina Wanjiru Ochieng",
    age: 14,
    gender: "female",
    county: "Nairobi",
    lastSeenLocation: "Kawangware Market, Nairobi",
    lastSeenDate: "2024-03-15",
    reportedDate: "2024-03-15",
    physicalDescription:
      "Slim build, about 5'1\" tall, dark complexion, with small braids. Has a small scar on her left cheek from a childhood accident.",
    clothingDescription:
      "Blue school uniform with white collar, black shoes. Carrying a dark blue school bag.",
    status: "urgent",
    reportedBy: "Grace Wanjiru (Mother)",
    contactPhone: "+254 712 345 678",
    additionalNotes:
      "Amina was last seen walking home from Kawangware Primary School. She is a very quiet and shy child who would not go anywhere without telling her mother.",
    tips: [
      {
        id: "t1",
        author: "Mama Pima Shop",
        content:
          "I saw a girl matching this description near the Shell petrol station on Kawangware Road around 4pm. She was alone and looked confused.",
        timestamp: "2024-03-15T16:30:00",
        isAnonymous: false,
      },
      {
        id: "t2",
        author: "Anonymous",
        content:
          "There was a blue Toyota Probox that was parked near the school gate that afternoon. I don't know the plate number.",
        timestamp: "2024-03-16T09:00:00",
        isAnonymous: true,
      },
    ],
  },
  {
    id: "2",
    caseNumber: "TK-2024-0039",
    name: "Mzee Kipchoge Rotich",
    age: 72,
    gender: "male",
    county: "Nakuru",
    lastSeenLocation: "Nakuru Town, near Westside Mall",
    lastSeenDate: "2024-03-10",
    reportedDate: "2024-03-11",
    physicalDescription:
      "Elderly man, grey hair, medium build, about 5'7\" tall. Has a slight limp on his right leg. Usually carries a wooden walking stick.",
    clothingDescription:
      "Grey trousers, white shirt, brown leather jacket. Black brimmed hat.",
    status: "missing",
    reportedBy: "James Rotich (Son)",
    contactPhone: "+254 722 876 543",
    additionalNotes:
      "Mzee Kipchoge has early-stage dementia and sometimes gets confused about where he is. He is gentle and friendly. The family is very worried.",
    tips: [
      {
        id: "t3",
        author: "Nakuru Matatu Driver",
        content:
          "An old man matching this description boarded a matatu to Njoro on the evening of March 10th. He seemed a bit disoriented.",
        timestamp: "2024-03-12T11:00:00",
        isAnonymous: false,
      },
    ],
  },
  {
    id: "3",
    caseNumber: "TK-2024-0035",
    name: "Brian Otieno Omollo",
    age: 22,
    gender: "male",
    county: "Kisumu",
    lastSeenLocation: "Kondele, Kisumu",
    lastSeenDate: "2024-03-05",
    reportedDate: "2024-03-07",
    physicalDescription:
      "Tall and athletic build, about 6'1\". Has a tattoo of a lion on his right forearm. Short hair.",
    clothingDescription:
      "Red Arsenal football jersey, blue jeans, white Nike sneakers.",
    status: "missing",
    reportedBy: "Faith Otieno (Sister)",
    contactPhone: "+254 733 456 789",
    tips: [],
  },
  {
    id: "4",
    caseNumber: "TK-2024-0028",
    name: "Zawadi Fatuma Hassan",
    age: 8,
    gender: "female",
    county: "Mombasa",
    lastSeenLocation: "Likoni Ferry Area, Mombasa",
    lastSeenDate: "2024-02-28",
    reportedDate: "2024-02-28",
    physicalDescription:
      "Small child, very bright eyes, dark complexion. Has a gap between her two front teeth. Hair usually tied in two puffs.",
    clothingDescription:
      "Pink and white floral dress, brown sandals. Carrying a small pink doll.",
    status: "urgent",
    reportedBy: "Hassan Mwana (Father)",
    contactPhone: "+254 741 234 567",
    additionalNotes:
      "Zawadi went missing near the Likoni Ferry crossing. She was with her father but got separated in a crowd. The family is devastated.",
    tips: [
      {
        id: "t4",
        author: "Ferry Vendor",
        content:
          "I saw a little girl crying near the women's waiting area. A woman in a black buibui stopped and talked to her. I was too far away to hear.",
        timestamp: "2024-02-28T15:00:00",
        isAnonymous: false,
      },
      {
        id: "t5",
        author: "Anonymous",
        content:
          "Check with the Likoni Police Station, they sometimes take in children found wandering.",
        timestamp: "2024-02-28T17:30:00",
        isAnonymous: true,
      },
      {
        id: "t6",
        author: "Mama Kadzo",
        content:
          "A child matching this description was seen playing with other children near Likoni market the following morning.",
        timestamp: "2024-02-29T10:00:00",
        isAnonymous: false,
      },
    ],
  },
  {
    id: "5",
    caseNumber: "TK-2024-0019",
    name: "Peter Kamau Njoroge",
    age: 35,
    gender: "male",
    county: "Kiambu",
    lastSeenLocation: "Thika Town, near Thika High School",
    lastSeenDate: "2024-02-14",
    reportedDate: "2024-02-16",
    physicalDescription:
      "Medium build, about 5'9\". Has a beard and short dreadlocks. Light complexion for a Kenyan man.",
    clothingDescription:
      "Black leather jacket, khaki chinos, dark brown loafers.",
    status: "found",
    reportedBy: "Susan Kamau (Wife)",
    contactPhone: "+254 755 678 901",
    additionalNotes: "Peter was found safe in Muranga after two days. He had suffered a medical episode. The family thanks everyone who shared tips.",
    tips: [
      {
        id: "t7",
        author: "Shopkeeper Thika",
        content:
          "He bought water from my shop on Feb 14th evening. He seemed disoriented.",
        timestamp: "2024-02-17T09:00:00",
        isAnonymous: false,
      },
    ],
  },
];
