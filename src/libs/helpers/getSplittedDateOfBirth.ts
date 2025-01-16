export const getSplittedDateOfBirth = (dateOfBirth?: Date | string | null) => {
  if (!dateOfBirth) {
    return { day: "", month: "", year: "" };
  }
  const date =
    typeof dateOfBirth === "string" ? new Date(dateOfBirth) : dateOfBirth;

  return {
    day: date.getDate().toString(),
    month: (date.getMonth() + 1).toString(),
    year: date.getFullYear().toString(),
  };
};
