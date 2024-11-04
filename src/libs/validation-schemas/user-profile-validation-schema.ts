import * as Yup from "yup";

type TranslateFunction = (key: string) => string;

const createUserProfileValidationSchema = (t: TranslateFunction) =>
  Yup.object().shape({
    first_name: Yup.string().required(
      t("profileForm.validation.firstNameRequired")
    ),
    last_name: Yup.string().required(
      t("profileForm.validation.lastNameRequired")
    ),
    gender: Yup.string().nullable(),
    year: Yup.string().optional(),
    day: Yup.string().optional(),
    month: Yup.string().optional(),
    email: Yup.string().required(),

    t_shirt_size: Yup.string().nullable(),

    country: Yup.string().required(t("profileForm.validation.countryRequired")),
    city: Yup.string().required(t("profileForm.validation.cityRequired")),
    phone_number: Yup.string().notRequired().nullable(),

    sports_club: Yup.string().required(
      t("profileForm.validation.clubNameRequired")
    ),

    emergency_contact_name: Yup.string().required(
      t("profileForm.validation.emergencyContactFullNameRequired")
    ),
    emergency_contact_phone: Yup.string().optional().notRequired().nullable(),
  });

export default createUserProfileValidationSchema;
