export type UserProfile = {
  first_name?: string | null;
  last_name?: string | null;
  gender?: ("M" | "F") | null;
  date_of_birth?: Date | null;
  t_shirt_size?:
    | ("XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL")
    | null;
  country?: string | null;
  city?: string | null;
  phone_number?: string | null;
  sports_club?: string | null;
  emergency_contact_name?: string | null;
  emergency_contact_phone?: string | null;
  readonly registered_events?: string;
};

export type Register = {
  email: string;
  password: string;
  password2: string;
};

export type TokenObtainPair = {
  email: string;
  password: string;
};

export type TokenRefresh = {
  refresh: string;
  readonly access?: string;
};

export type OrganizerEvent = {
  name: string;
  site_url?: string | null;
  phone_number: string;
  email: string;
  instagram_url?: string | null;
  facebook_url?: string | null;
  telegram_url?: string | null;
};

export type AdditionalItemEvent = {
  readonly id?: number;
  item_type: "transfer" | "medal" | "t_shirt";
  price?: string | null;
  event?: number;
};

export type DistanceEvent = {
  readonly id?: number;
  name: string;
  cost?: string | null;
  is_free?: boolean;
  event?: number;
};

export type Event = {
  name: string;
  competition_type:
    | "running"
    | "trail"
    | "ultramarathon"
    | "cycling"
    | "online"
    | "walking"
    | "ocr"
    | "swimming"
    | "triathlon";
  date_from: Date;
  date_to: Date;
  place: string;
  readonly photos?: string | null;
  description: string;
  registration_link?: string | null;
  hide_participants?: boolean;
  readonly schedule_pdf?: string | null;
  organizer?: OrganizerEvent;
  additional_items?: Array<AdditionalItemEvent>;
  distances?: Array<DistanceEvent>;
  extended_description?: string | null;
};

export type EventRegistration = {
  event: number;
  distances: Array<number>;
  additional_items: Array<number>;
  readonly registration_date?: Date;
  readonly is_confirmed?: boolean;
};

export type EventRegistrationDetail = {
  event: number;
  distances: Array<string>;
  additional_items: Array<string>;
  readonly registration_date?: Date;
  is_confirmed?: boolean;
};

export type AuthGoogleAccountInfoListResponse = unknown;

export type AuthGoogleAccountInfoListError = unknown;

export type AuthProfileListResponse = UserProfile;

export type AuthProfileListError = unknown;

export type AuthProfileUpdateData = {
  body: UserProfile;
};

export type AuthProfileUpdateResponse = UserProfile;

export type AuthProfileUpdateError = unknown;

export type AuthProfilePartialUpdateData = {
  body: UserProfile;
};

export type AuthProfilePartialUpdateResponse = UserProfile;

export type AuthProfilePartialUpdateError = unknown;

export type AuthRegisterCreateData = {
  body: Register;
};

export type AuthRegisterCreateResponse = {
  /**
   * Confirmation message
   */
  message?: string;
};

export type AuthRegisterCreateError = {
  /**
   * Error messages related to the email field
   */
  email: Array<string>;
  /**
   * Error messages related to the password field
   */
  password: Array<string>;
  /**
   * Error messages related to the password confirmation field
   */
  password2: Array<string>;
};

export type AuthTokenCreateData = {
  body: TokenObtainPair;
};

export type AuthTokenCreateResponse = {
  /**
   * JWT Refresh Token
   */
  refresh: string;
  /**
   * JWT Access Token
   */
  access: string;
};

export type AuthTokenCreateError = unknown;

export type AuthTokenRefreshCreateData = {
  body: TokenRefresh;
};

export type AuthTokenRefreshCreateResponse = TokenRefresh;

export type AuthTokenRefreshCreateError = unknown;

export type CalendarFilterListData = {
  query?: {
    /**
     * Type of competition (running, trail, cycling)
     */
    competition_type?: string;
    /**
     * Maximum distance (km)
     */
    distance_max?: number;
    /**
     * Minimum distance (km)
     */
    distance_min?: number;
    /**
     * Event month (1-12)
     */
    month?: number;
    /**
     * Event name
     */
    name?: string;
    /**
     * Type number of page(Pagination)
     */
    page?: string;
    /**
     * Event location
     */
    place?: string;
    /**
     * Event year
     */
    year?: number;
  };
};

export type CalendarFilterListResponse = Array<Event>;

export type CalendarFilterListError = unknown;

export type EventAdditionalItemsReadData = {
  path: {
    event_id: string;
  };
};

export type EventAdditionalItemsReadResponse = AdditionalItemEvent;

export type EventAdditionalItemsReadError = unknown;

export type EventAdditionalItemsCreateData = {
  body: {
    item_type?: string;
    price?: number;
  };
  path: {
    event_id: string;
  };
};

export type EventAdditionalItemsCreateResponse = AdditionalItemEvent;

export type EventAdditionalItemsCreateError = unknown;

export type EventAdditionalItemsUpdateData = {
  path: {
    event_id: string;
  };
};

export type EventAdditionalItemsUpdateResponse = Array<AdditionalItemEvent>;

export type EventAdditionalItemsUpdateError = unknown;

export type EventAdditionalItemsPartialUpdateData = {
  body: {
    /**
     * ID of the additional item (required for update)
     */
    id: number;
    /**
     * Type of the item, choices: "transfer", "medal", "t_shirt"
     */
    item_type?: string;
    /**
     * Price of the item
     */
    price?: number;
    /**
     * Is the item free or not
     */
    is_free?: boolean;
  };
  path: {
    event_id: string;
  };
};

export type EventAdditionalItemsPartialUpdateResponse = AdditionalItemEvent;

export type EventAdditionalItemsPartialUpdateError = unknown;

export type EventAdditionalItemsDeleteData = {
  path: {
    event_id: string;
  };
};

export type EventAdditionalItemsDeleteResponse = void;

export type EventAdditionalItemsDeleteError = unknown;

export type EventDistancesReadData = {
  path: {
    event_id: string;
  };
};

export type EventDistancesReadResponse = Array<{
  /**
   * Name of the distance (e.g., "5K Run")
   */
  name?: string;
  /**
   * Cost of the distance in numeric format, or null if free.
   */
  cost?: number;
  /**
   * Indicates whether the distance is free or not. If True, cost is null.
   */
  is_free?: boolean;
}>;

export type EventDistancesReadError = unknown;

export type EventDistancesCreateData = {
  body: {
    /**
     * Name of the distance (e.g., "5K Run")
     */
    name: string;
    /**
     * Cost of the distance in numeric format, leave null if free.
     */
    cost?: number;
    /**
     * Indicates whether the distance is free or not. If True, cost should be null.
     */
    is_free: boolean;
  };
  path: {
    event_id: string;
  };
};

export type EventDistancesCreateResponse = DistanceEvent;

export type EventDistancesCreateError = unknown;

export type EventDistancesUpdateData = {
  path: {
    event_id: string;
  };
};

export type EventDistancesUpdateResponse = Array<{
  /**
   * ID of the updated distance
   */
  id?: number;
  /**
   * Name of the updated distance
   */
  name?: string;
  /**
   * Cost of the updated distance
   */
  cost?: number;
  /**
   * Indicates if the updated distance is free
   */
  is_free?: boolean;
  /**
   * ID of the event the distance is associated with
   */
  event?: number;
}>;

export type EventDistancesUpdateError = unknown;

export type EventDistancesPartialUpdateData = {
  path: {
    event_id: string;
  };
};

export type EventDistancesPartialUpdateResponse = Array<{
  /**
   * ID of the updated distance
   */
  id?: number;
  /**
   * Name of the updated distance
   */
  name?: string;
  /**
   * Cost of the updated distance
   */
  cost?: number;
  /**
   * Indicates if the updated distance is free
   */
  is_free?: boolean;
  /**
   * ID of the event the distance is associated with
   */
  event?: number;
}>;

export type EventDistancesPartialUpdateError = unknown;

export type EventDistancesDeleteData = {
  path: {
    event_id: string;
  };
};

export type EventDistancesDeleteResponse = void;

export type EventDistancesDeleteError = unknown;

export type EventEventsCreateData = {
  body: {
    /**
     * Name of the event
     */
    name: string;
    /**
     * Type of competition
     */
    competition_type: string;
    /**
     * Event start date
     */
    date_from: Date;
    /**
     * Event end date
     */
    date_to: Date;
    /**
     * Location of the event
     */
    place: string;
    /**
     * Event description
     */
    description: string;
    /**
     * Registration link
     */
    registration_link: string;
    /**
     * Whether to hide participants
     */
    hide_participants: boolean;
    organizer: {
      /**
       * Name of the organizer
       */
      name?: string;
      /**
       * Website of the organizer
       */
      site_url?: string;
      /**
       * Phone number of the organizer
       */
      phone_number?: string;
      /**
       * Email of the organizer
       */
      email?: string;
      /**
       * Instagram link
       */
      instagram_url?: string;
      /**
       * Facebook link
       */
      facebook_url?: string;
      /**
       * Telegram link
       */
      telegram_url?: string;
    };
    /**
     * List of additional items
     */
    additional_items: Array<{
      /**
       * Type of additional item
       */
      item_type?: string;
      /**
       * Price of additional item
       */
      price?: string;
    }>;
    /**
     * List of distances
     */
    distances: Array<{
      /**
       * Name of the distance
       */
      name?: string;
      /**
       * Cost of the distance
       */
      cost?: string;
      /**
       * Is the distance free
       */
      is_free?: boolean;
    }>;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
};

export type EventEventsCreateResponse = Event;

export type EventEventsCreateError = unknown;

export type EventEventsReadData = {
  path: {
    id: string;
  };
};

export type EventEventsReadResponse = Event;

export type EventEventsReadError = unknown;

export type EventEventsUpdateData = {
  body: {
    /**
     * Name of the event
     */
    name: string;
    /**
     * Type of competition
     */
    competition_type: string;
    /**
     * Event start date
     */
    date_from: Date;
    /**
     * Event end date
     */
    date_to: Date;
    /**
     * Location of the event
     */
    place: string;
    /**
     * Event description
     */
    description: string;
    /**
     * Registration link
     */
    registration_link: string;
    /**
     * Whether to hide participants
     */
    hide_participants: boolean;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
  path: {
    id: string;
  };
};

export type EventEventsUpdateResponse = Event;

export type EventEventsUpdateError = unknown;

export type EventEventsPartialUpdateData = {
  body: {
    /**
     * Name of the event
     */
    name?: string;
    /**
     * Type of competition
     */
    competition_type?: string;
    /**
     * Event start date
     */
    date_from?: Date;
    /**
     * Event end date
     */
    date_to?: Date;
    /**
     * Location of the event
     */
    place?: string;
    /**
     * Event description
     */
    description?: string;
    /**
     * Registration link
     */
    registration_link?: string;
    /**
     * Whether to hide participants
     */
    hide_participants?: boolean;
    /**
     * Extended description of the event
     */
    extended_description?: string;
  };
  path: {
    id: string;
  };
};

export type EventEventsPartialUpdateResponse = Event;

export type EventEventsPartialUpdateError = unknown;

export type EventEventsDeleteData = {
  path: {
    id: string;
  };
};

export type EventEventsDeleteResponse = void;

export type EventEventsDeleteError = unknown;

export type EventOrganizersReadData = {
  path: {
    event_id: string;
  };
};

export type EventOrganizersReadResponse = OrganizerEvent;

export type EventOrganizersReadError = unknown;

export type EventOrganizersUpdateData = {
  body: OrganizerEvent;
  path: {
    event_id: string;
  };
};

export type EventOrganizersUpdateResponse = OrganizerEvent;

export type EventOrganizersUpdateError = unknown;

export type EventOrganizersPartialUpdateData = {
  body: OrganizerEvent;
  path: {
    event_id: string;
  };
};

export type EventOrganizersPartialUpdateResponse = OrganizerEvent;

export type EventOrganizersPartialUpdateError = unknown;

export type EventOrganizersDeleteData = {
  path: {
    event_id: string;
  };
};

export type EventOrganizersDeleteResponse = void;

export type EventOrganizersDeleteError = unknown;

export type RegisterUserForEventData = {
  body: {
    /**
     * ID of the event to register for.
     */
    event: number;
    /**
     * List of distance IDs selected by the user. At least one distance is required.
     */
    distances: Array<number>;
    /**
     * List of additional item IDs selected by the user, such as t-shirts or medals. This field is optional.
     */
    additional_items?: Array<number>;
  };
};

export type RegisterUserForEventResponse = EventRegistration;

export type RegisterUserForEventError = unknown;

export type GetEventRegistrationData = {
  path: {
    id: string;
  };
};

export type GetEventRegistrationResponse = EventRegistrationDetail;

export type GetEventRegistrationError = unknown;

export type UpdateEventRegistrationData = {
  body: {
    /**
     * ID of the event to update registration for.
     */
    event: number;
    /**
     * List of updated distance IDs selected by the user.
     */
    distances: Array<number>;
    /**
     * List of updated additional item IDs selected by the user.
     */
    additional_items?: Array<number>;
  };
  path: {
    id: string;
  };
};

export type UpdateEventRegistrationResponse = EventRegistrationDetail;

export type UpdateEventRegistrationError = unknown;

export type PartialUpdateEventRegistrationData = {
  body: {
    /**
     * List of updated distance IDs selected by the user.
     */
    distances?: Array<number>;
    /**
     * List of updated additional item IDs selected by the user.
     */
    additional_items?: Array<number>;
  };
  path: {
    id: string;
  };
};

export type PartialUpdateEventRegistrationResponse = EventRegistrationDetail;

export type PartialUpdateEventRegistrationError = unknown;

export type DeleteEventRegistrationData = {
  path: {
    id: string;
  };
};

export type DeleteEventRegistrationResponse = void;

export type DeleteEventRegistrationError = unknown;
