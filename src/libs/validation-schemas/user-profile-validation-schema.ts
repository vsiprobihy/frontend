import * as Yup from "yup";

type TranslateFunction = (key: string) => string;

const createUserProfileValidationSchema = (t: TranslateFunction) =>
  Yup.object().shape({
    firstName: Yup.string().required(
      t("profileForm.validation.firstNameRequired")
    ),
    lastName: Yup.string().required(
      t("profileForm.validation.lastNameRequired")
    ),
    gender: Yup.string().nullable(),
    year: Yup.string().optional(),
    day: Yup.string().optional(),
    month: Yup.string().optional(),
    email: Yup.string().required(),

    tShirtSize: Yup.string().nullable(),

    country: Yup.string().required(t("profileForm.validation.countryRequired")),
    city: Yup.string().required(t("profileForm.validation.cityRequired")),
    phoneNumber: Yup.string().notRequired().nullable(),

    sportsClub: Yup.string().required(
      t("profileForm.validation.clubNameRequired")
    ),

    emergencyContactName: Yup.string().required(
      t("profileForm.validation.emergencyContactFullNameRequired")
    ),
    emergencyContactPhone: Yup.string().optional().notRequired().nullable(),
  });

export default createUserProfileValidationSchema;
