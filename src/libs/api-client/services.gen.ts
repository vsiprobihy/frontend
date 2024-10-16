import {
  createClient,
  createConfig,
  type Options,
} from "@hey-api/client-fetch";
import type {
  AuthGoogleAccountInfoListError,
  AuthGoogleAccountInfoListResponse,
  AuthProfileListError,
  AuthProfileListResponse,
  AuthProfileUpdateData,
  AuthProfileUpdateError,
  AuthProfileUpdateResponse,
  AuthProfilePartialUpdateData,
  AuthProfilePartialUpdateError,
  AuthProfilePartialUpdateResponse,
  AuthRegisterCreateData,
  AuthRegisterCreateError,
  AuthRegisterCreateResponse,
  AuthTokenCreateData,
  AuthTokenCreateError,
  AuthTokenCreateResponse,
  AuthTokenRefreshCreateData,
  AuthTokenRefreshCreateError,
  AuthTokenRefreshCreateResponse,
  CalendarFilterListData,
  CalendarFilterListError,
  CalendarFilterListResponse,
  EventAdditionalItemsReadData,
  EventAdditionalItemsReadError,
  EventAdditionalItemsReadResponse,
  EventAdditionalItemsCreateData,
  EventAdditionalItemsCreateError,
  EventAdditionalItemsCreateResponse,
  EventAdditionalItemsUpdateData,
  EventAdditionalItemsUpdateError,
  EventAdditionalItemsUpdateResponse,
  EventAdditionalItemsPartialUpdateData,
  EventAdditionalItemsPartialUpdateError,
  EventAdditionalItemsPartialUpdateResponse,
  EventAdditionalItemsDeleteData,
  EventAdditionalItemsDeleteError,
  EventAdditionalItemsDeleteResponse,
  EventDistancesReadData,
  EventDistancesReadError,
  EventDistancesReadResponse,
  EventDistancesCreateData,
  EventDistancesCreateError,
  EventDistancesCreateResponse,
  EventDistancesUpdateData,
  EventDistancesUpdateError,
  EventDistancesUpdateResponse,
  EventDistancesPartialUpdateData,
  EventDistancesPartialUpdateError,
  EventDistancesPartialUpdateResponse,
  EventDistancesDeleteData,
  EventDistancesDeleteError,
  EventDistancesDeleteResponse,
  EventEventsCreateData,
  EventEventsCreateError,
  EventEventsCreateResponse,
  EventEventsReadData,
  EventEventsReadError,
  EventEventsReadResponse,
  EventEventsUpdateData,
  EventEventsUpdateError,
  EventEventsUpdateResponse,
  EventEventsPartialUpdateData,
  EventEventsPartialUpdateError,
  EventEventsPartialUpdateResponse,
  EventEventsDeleteData,
  EventEventsDeleteError,
  EventEventsDeleteResponse,
  EventInviteModeratorCreateData,
  EventInviteModeratorCreateError,
  EventInviteModeratorCreateResponse,
  EventOrganizerEventsListError,
  EventOrganizerEventsListResponse,
  EventOrganizerEventsCreateData,
  EventOrganizerEventsCreateError,
  EventOrganizerEventsCreateResponse,
  EventOrganizerEventsReadData,
  EventOrganizerEventsReadError,
  EventOrganizerEventsReadResponse,
  EventOrganizerEventsUpdateData,
  EventOrganizerEventsUpdateError,
  EventOrganizerEventsUpdateResponse,
  EventOrganizerEventsPartialUpdateData,
  EventOrganizerEventsPartialUpdateError,
  EventOrganizerEventsPartialUpdateResponse,
  EventOrganizerEventsDeleteData,
  EventOrganizerEventsDeleteError,
  EventOrganizerEventsDeleteResponse,
  RegisterUserForEventData,
  RegisterUserForEventError,
  RegisterUserForEventResponse,
  GetEventRegistrationData,
  GetEventRegistrationError,
  GetEventRegistrationResponse,
  UpdateEventRegistrationData,
  UpdateEventRegistrationError,
  UpdateEventRegistrationResponse,
  PartialUpdateEventRegistrationData,
  PartialUpdateEventRegistrationError,
  PartialUpdateEventRegistrationResponse,
  DeleteEventRegistrationData,
  DeleteEventRegistrationError,
  DeleteEventRegistrationResponse,
  UpcomingEventsListData,
  UpcomingEventsListError,
  UpcomingEventsListResponse,
} from "./types.gen";

export const client = createClient(createConfig());

export const authGoogleAccountInfoList = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    AuthGoogleAccountInfoListResponse,
    AuthGoogleAccountInfoListError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/google-account-info/",
  });
};

/**
 * Get user profile data
 */
export const authProfileList = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    AuthProfileListResponse,
    AuthProfileListError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/profile/",
  });
};

/**
 * Update user profile data
 */
export const authProfileUpdate = <ThrowOnError extends boolean = false>(
  options: Options<AuthProfileUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    AuthProfileUpdateResponse,
    AuthProfileUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/profile/",
  });
};

/**
 * Partial update of user profile data
 */
export const authProfilePartialUpdate = <ThrowOnError extends boolean = false>(
  options: Options<AuthProfilePartialUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    AuthProfilePartialUpdateResponse,
    AuthProfilePartialUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/profile/",
  });
};

/**
 * User Registration Endpoint.
 */
export const authRegisterCreate = <ThrowOnError extends boolean = false>(
  options: Options<AuthRegisterCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    AuthRegisterCreateResponse,
    AuthRegisterCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/register/",
  });
};

/**
 * Login with JWT token
 */
export const authTokenCreate = <ThrowOnError extends boolean = false>(
  options: Options<AuthTokenCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    AuthTokenCreateResponse,
    AuthTokenCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/token/",
  });
};

/**
 * Takes a refresh type JSON web token and returns an access type JSON web
 * token if the refresh token is valid.
 */
export const authTokenRefreshCreate = <ThrowOnError extends boolean = false>(
  options: Options<AuthTokenRefreshCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    AuthTokenRefreshCreateResponse,
    AuthTokenRefreshCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/auth/token/refresh/",
  });
};

/**
 * Filtering events by competition type, name, month, year, location, and distance
 */
export const calendarFilterList = <ThrowOnError extends boolean = false>(
  options?: Options<CalendarFilterListData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    CalendarFilterListResponse,
    CalendarFilterListError,
    ThrowOnError
  >({
    ...options,
    url: "/calendar/filter/",
  });
};

/**
 * Retrieve details of additional items for an event by ID.
 */
export const eventAdditionalItemsRead = <ThrowOnError extends boolean = false>(
  options: Options<EventAdditionalItemsReadData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    EventAdditionalItemsReadResponse,
    EventAdditionalItemsReadError,
    ThrowOnError
  >({
    ...options,
    url: "/event/additional-items/{event_id}/",
  });
};

/**
 * Add additional items (e.g., T-shirt, Medal) for an event.
 */
export const eventAdditionalItemsCreate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventAdditionalItemsCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    EventAdditionalItemsCreateResponse,
    EventAdditionalItemsCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/additional-items/{event_id}/",
  });
};

/**
 * Update additional items for an event by ID and Event_ID.
 */
export const eventAdditionalItemsUpdate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventAdditionalItemsUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    EventAdditionalItemsUpdateResponse,
    EventAdditionalItemsUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/additional-items/{event_id}/",
  });
};

/**
 * Partial update of additional items for an event by ID.
 */
export const eventAdditionalItemsPartialUpdate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventAdditionalItemsPartialUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    EventAdditionalItemsPartialUpdateResponse,
    EventAdditionalItemsPartialUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/additional-items/{event_id}/",
  });
};

/**
 *
 * Delete multiple additional items associated with a specific event identified by the `event_id` in the URL.
 * The `id` field is required to identify each additional item to be deleted.
 *
 */
export const eventAdditionalItemsDelete = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventAdditionalItemsDeleteData, ThrowOnError>
) => {
  return (options?.client ?? client).delete<
    EventAdditionalItemsDeleteResponse,
    EventAdditionalItemsDeleteError,
    ThrowOnError
  >({
    ...options,
    url: "/event/additional-items/{event_id}/",
  });
};

/**
 * Retrieve a list of distances associated with a specific event identified by the event_id passed in the URL.
 */
export const eventDistancesRead = <ThrowOnError extends boolean = false>(
  options: Options<EventDistancesReadData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    EventDistancesReadResponse,
    EventDistancesReadError,
    ThrowOnError
  >({
    ...options,
    url: "/event/distances/{event_id}/",
  });
};

/**
 * Create a new distance for an event. The event is identified by the event_id passed in the URL.
 */
export const eventDistancesCreate = <ThrowOnError extends boolean = false>(
  options: Options<EventDistancesCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    EventDistancesCreateResponse,
    EventDistancesCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/distances/{event_id}/",
  });
};

/**
 *
 * Update one or more distances for a specific event. The `event_id` is passed through the URL, and each distance
 * should have a valid `id` to identify which distance is being updated. All fields will be fully replaced with the new data.
 *
 */
export const eventDistancesUpdate = <ThrowOnError extends boolean = false>(
  options: Options<EventDistancesUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    EventDistancesUpdateResponse,
    EventDistancesUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/distances/{event_id}/",
  });
};

/**
 *
 * Partially update one or more distances associated with a specific event identified by the `event_id` in the URL.
 * You can update one or more fields of the distances. The `id` field is required to identify each distance to be updated.
 *
 */
export const eventDistancesPartialUpdate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventDistancesPartialUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    EventDistancesPartialUpdateResponse,
    EventDistancesPartialUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/distances/{event_id}/",
  });
};

/**
 *
 * Delete multiple distances associated with a specific event identified by the `event_id` in the URL.
 * The `id` field is required to identify each distance to be deleted.
 *
 */
export const eventDistancesDelete = <ThrowOnError extends boolean = false>(
  options: Options<EventDistancesDeleteData, ThrowOnError>
) => {
  return (options?.client ?? client).delete<
    EventDistancesDeleteResponse,
    EventDistancesDeleteError,
    ThrowOnError
  >({
    ...options,
    url: "/event/distances/{event_id}/",
  });
};

/**
 * Create a new event with all related details including organizer, additional items, and distances.
 */
export const eventEventsCreate = <ThrowOnError extends boolean = false>(
  options: Options<EventEventsCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    EventEventsCreateResponse,
    EventEventsCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/events/",
  });
};

/**
 * Retrieve event details by ID.
 */
export const eventEventsRead = <ThrowOnError extends boolean = false>(
  options: Options<EventEventsReadData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    EventEventsReadResponse,
    EventEventsReadError,
    ThrowOnError
  >({
    ...options,
    url: "/event/events/{id}/",
  });
};

/**
 * Update event details without organizer, additional_items, or distances fields.
 */
export const eventEventsUpdate = <ThrowOnError extends boolean = false>(
  options: Options<EventEventsUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    EventEventsUpdateResponse,
    EventEventsUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/events/{id}/",
  });
};

/**
 * Partially update event details without organizer, additional_items, or distances fields.
 */
export const eventEventsPartialUpdate = <ThrowOnError extends boolean = false>(
  options: Options<EventEventsPartialUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    EventEventsPartialUpdateResponse,
    EventEventsPartialUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/events/{id}/",
  });
};

/**
 * Delete an event by ID.
 */
export const eventEventsDelete = <ThrowOnError extends boolean = false>(
  options: Options<EventEventsDeleteData, ThrowOnError>
) => {
  return (options?.client ?? client).delete<
    EventEventsDeleteResponse,
    EventEventsDeleteError,
    ThrowOnError
  >({
    ...options,
    url: "/event/events/{id}/",
  });
};

export const eventInviteModeratorCreate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventInviteModeratorCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    EventInviteModeratorCreateResponse,
    EventInviteModeratorCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/invite-moderator/",
  });
};

export const eventOrganizerEventsList = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    EventOrganizerEventsListResponse,
    EventOrganizerEventsListError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/",
  });
};

export const eventOrganizerEventsCreate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventOrganizerEventsCreateData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    EventOrganizerEventsCreateResponse,
    EventOrganizerEventsCreateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/",
  });
};

export const eventOrganizerEventsRead = <ThrowOnError extends boolean = false>(
  options: Options<EventOrganizerEventsReadData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    EventOrganizerEventsReadResponse,
    EventOrganizerEventsReadError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/{id}/",
  });
};

export const eventOrganizerEventsUpdate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventOrganizerEventsUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    EventOrganizerEventsUpdateResponse,
    EventOrganizerEventsUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/{id}/",
  });
};

export const eventOrganizerEventsPartialUpdate = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventOrganizerEventsPartialUpdateData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    EventOrganizerEventsPartialUpdateResponse,
    EventOrganizerEventsPartialUpdateError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/{id}/",
  });
};

export const eventOrganizerEventsDelete = <
  ThrowOnError extends boolean = false,
>(
  options: Options<EventOrganizerEventsDeleteData, ThrowOnError>
) => {
  return (options?.client ?? client).delete<
    EventOrganizerEventsDeleteResponse,
    EventOrganizerEventsDeleteError,
    ThrowOnError
  >({
    ...options,
    url: "/event/organizer-events/{id}/",
  });
};

/**
 *
 * Registers a user for an event. The user is authenticated via JWT, and the event is identified by its ID.
 * The request body should include the event ID, a list of distance IDs the user wants to participate in, and optionally, additional item IDs.
 * The response will include the event registration details, such as the event ID, selected distances, additional items, registration date, and confirmation status.
 *
 */
export const registerUserForEvent = <ThrowOnError extends boolean = false>(
  options: Options<RegisterUserForEventData, ThrowOnError>
) => {
  return (options?.client ?? client).post<
    RegisterUserForEventResponse,
    RegisterUserForEventError,
    ThrowOnError
  >({
    ...options,
    url: "/event/registrations/",
  });
};

/**
 *
 * Retrieves detailed information about a specific event registration, including user information, the selected event, distances, additional items, registration date, and whether the registration has been confirmed.
 *
 */
export const getEventRegistration = <ThrowOnError extends boolean = false>(
  options: Options<GetEventRegistrationData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    GetEventRegistrationResponse,
    GetEventRegistrationError,
    ThrowOnError
  >({
    ...options,
    url: "/event/registrations/{id}/",
  });
};

/**
 *
 * Updates the details of an existing event registration. You can change the distances the user is registered for, update additional items, or modify other registration details.
 * The event itself cannot be changed; only distances and additional items can be updated.
 *
 */
export const updateEventRegistration = <ThrowOnError extends boolean = false>(
  options: Options<UpdateEventRegistrationData, ThrowOnError>
) => {
  return (options?.client ?? client).put<
    UpdateEventRegistrationResponse,
    UpdateEventRegistrationError,
    ThrowOnError
  >({
    ...options,
    url: "/event/registrations/{id}/",
  });
};

/**
 *
 * Partially updates an existing event registration. This can include modifying the distances or additional items associated with the registration.
 * Only the fields provided in the request body will be updated.
 *
 */
export const partialUpdateEventRegistration = <
  ThrowOnError extends boolean = false,
>(
  options: Options<PartialUpdateEventRegistrationData, ThrowOnError>
) => {
  return (options?.client ?? client).patch<
    PartialUpdateEventRegistrationResponse,
    PartialUpdateEventRegistrationError,
    ThrowOnError
  >({
    ...options,
    url: "/event/registrations/{id}/",
  });
};

/**
 *
 * Deletes a specific event registration by its ID. This operation cannot be undone.
 *
 */
export const deleteEventRegistration = <ThrowOnError extends boolean = false>(
  options: Options<DeleteEventRegistrationData, ThrowOnError>
) => {
  return (options?.client ?? client).delete<
    DeleteEventRegistrationResponse,
    DeleteEventRegistrationError,
    ThrowOnError
  >({
    ...options,
    url: "/event/registrations/{id}/",
  });
};

/**
 * API endpoint for receiving the next upcoming events.
 */
export const upcomingEventsList = <ThrowOnError extends boolean = false>(
  options?: Options<UpcomingEventsListData, ThrowOnError>
) => {
  return (options?.client ?? client).get<
    UpcomingEventsListResponse,
    UpcomingEventsListError,
    ThrowOnError
  >({
    ...options,
    url: "/upcoming-events/",
  });
};
