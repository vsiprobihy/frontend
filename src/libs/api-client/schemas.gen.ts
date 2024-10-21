export const UserProfileSchema = {
  type: "object",
  properties: {
    first_name: {
      title: "First name",
      type: "string",
      maxLength: 50,
      "x-nullable": true,
    },
    last_name: {
      title: "Last name",
      type: "string",
      maxLength: 50,
      "x-nullable": true,
    },
    gender: {
      title: "Gender",
      type: "string",
      enum: ["M", "F"],
      "x-nullable": true,
    },
    date_of_birth: {
      title: "Date of birth",
      type: "string",
      format: "date",
      "x-nullable": true,
    },
    t_shirt_size: {
      title: "T shirt size",
      type: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      "x-nullable": true,
    },
    country: {
      title: "Country",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    city: {
      title: "City",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    phone_number: {
      title: "Phone number",
      type: "string",
      maxLength: 20,
      "x-nullable": true,
    },
    sports_club: {
      title: "Sports club",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    emergency_contact_name: {
      title: "Emergency contact name",
      type: "string",
      maxLength: 100,
      "x-nullable": true,
    },
    emergency_contact_phone: {
      title: "Emergency contact phone",
      type: "string",
      maxLength: 20,
      "x-nullable": true,
    },
    registered_events: {
      title: "Registered events",
      type: "string",
      readOnly: true,
    },
  },
} as const;

export const RegisterSchema = {
  required: ["email", "password", "password2"],
  type: "object",
  properties: {
    email: {
      title: "Email",
      type: "string",
      format: "email",
      maxLength: 254,
      minLength: 1,
    },
    password: {
      title: "Password",
      type: "string",
      minLength: 1,
    },
    password2: {
      title: "Password2",
      type: "string",
      minLength: 1,
    },
  },
} as const;

export const TokenObtainPairSchema = {
  required: ["email", "password"],
  type: "object",
  properties: {
    email: {
      title: "Email",
      type: "string",
      minLength: 1,
    },
    password: {
      title: "Password",
      type: "string",
      minLength: 1,
    },
  },
} as const;

export const TokenRefreshSchema = {
  required: ["refresh"],
  type: "object",
  properties: {
    refresh: {
      title: "Refresh",
      type: "string",
      minLength: 1,
    },
    access: {
      title: "Access",
      type: "string",
      readOnly: true,
      minLength: 1,
    },
  },
} as const;

export const OrganizerEventSchema = {
  required: ["name", "phone_number", "email"],
  type: "object",
  properties: {
    name: {
      title: "Name",
      type: "string",
      maxLength: 255,
      minLength: 1,
    },
    site_url: {
      title: "Site url",
      type: "string",
      format: "uri",
      maxLength: 200,
      "x-nullable": true,
    },
    phone_number: {
      title: "Phone number",
      type: "string",
      maxLength: 20,
      minLength: 1,
    },
    email: {
      title: "Email",
      type: "string",
      format: "email",
      maxLength: 254,
      minLength: 1,
    },
    instagram_url: {
      title: "Instagram url",
      type: "string",
      format: "uri",
      maxLength: 200,
      "x-nullable": true,
    },
    facebook_url: {
      title: "Facebook url",
      type: "string",
      format: "uri",
      maxLength: 200,
      "x-nullable": true,
    },
    telegram_url: {
      title: "Telegram url",
      type: "string",
      format: "uri",
      maxLength: 200,
      "x-nullable": true,
    },
  },
} as const;

export const AdditionalItemEventSchema = {
  required: ["item_type"],
  type: "object",
  properties: {
    id: {
      title: "ID",
      type: "integer",
      readOnly: true,
    },
    item_type: {
      title: "Item type",
      type: "string",
      enum: ["transfer", "medal", "t_shirt"],
    },
    price: {
      title: "Price",
      type: "string",
      format: "decimal",
      "x-nullable": true,
    },
    event: {
      title: "Event",
      type: "integer",
    },
  },
} as const;

export const DistanceEventSchema = {
  required: ["name"],
  type: "object",
  properties: {
    id: {
      title: "ID",
      type: "integer",
      readOnly: true,
    },
    name: {
      title: "Name",
      type: "string",
      maxLength: 255,
      minLength: 1,
    },
    cost: {
      title: "Cost",
      type: "string",
      format: "decimal",
      "x-nullable": true,
    },
    is_free: {
      title: "Is free",
      type: "boolean",
    },
    event: {
      title: "Event",
      type: "integer",
    },
  },
} as const;

export const EventSchema = {
  required: [
    "name",
    "competition_type",
    "date_from",
    "date_to",
    "place",
    "description",
  ],
  type: "object",
  properties: {
    name: {
      title: "Name",
      type: "string",
      maxLength: 255,
      minLength: 1,
    },
    competition_type: {
      title: "Competition type",
      type: "string",
      enum: [
        "running",
        "trail",
        "ultramarathon",
        "cycling",
        "online",
        "walking",
        "ocr",
        "swimming",
        "triathlon",
      ],
    },
    date_from: {
      title: "Date from",
      type: "string",
      format: "date",
    },
    date_to: {
      title: "Date to",
      type: "string",
      format: "date",
    },
    place: {
      title: "Place",
      type: "string",
      maxLength: 255,
      minLength: 1,
    },
    photos: {
      title: "Photos",
      type: "string",
      readOnly: true,
      "x-nullable": true,
      format: "uri",
    },
    description: {
      title: "Description",
      type: "string",
      minLength: 1,
    },
    registration_link: {
      title: "Registration link",
      type: "string",
      format: "uri",
      maxLength: 200,
      "x-nullable": true,
    },
    hide_participants: {
      title: "Hide participants",
      type: "boolean",
    },
    schedule_pdf: {
      title: "Schedule pdf",
      type: "string",
      readOnly: true,
      "x-nullable": true,
      format: "uri",
    },
    organizer: {
      $ref: "#/definitions/OrganizerEvent",
    },
    additional_items: {
      type: "array",
      items: {
        $ref: "#/definitions/AdditionalItemEvent",
      },
    },
    distances: {
      type: "array",
      items: {
        $ref: "#/definitions/DistanceEvent",
      },
    },
    extended_description: {
      title: "Extended description",
      type: "string",
      "x-nullable": true,
    },
  },
} as const;

export const EventRegistrationSchema = {
  required: ["event", "distances", "additional_items"],
  type: "object",
  properties: {
    event: {
      title: "Event",
      type: "integer",
    },
    distances: {
      type: "array",
      items: {
        type: "integer",
      },
      uniqueItems: true,
    },
    additional_items: {
      type: "array",
      items: {
        type: "integer",
      },
      uniqueItems: true,
    },
    registration_date: {
      title: "Registration date",
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    is_confirmed: {
      title: "Is confirmed",
      type: "boolean",
      readOnly: true,
    },
  },
} as const;

export const EventRegistrationDetailSchema = {
  required: ["event", "distances", "additional_items"],
  type: "object",
  properties: {
    event: {
      title: "Event",
      type: "integer",
    },
    distances: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
    },
    additional_items: {
      type: "array",
      items: {
        type: "string",
      },
      uniqueItems: true,
    },
    registration_date: {
      title: "Registration date",
      type: "string",
      format: "date-time",
      readOnly: true,
    },
    is_confirmed: {
      title: "Is confirmed",
      type: "boolean",
    },
  },
} as const;
