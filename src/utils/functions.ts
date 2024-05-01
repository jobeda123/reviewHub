export const getCompanyName = (text: string): string => {
  const name = text
    .split(" ")
    .find((word) => word.includes("#"))
    ?.substring(1);

  return name ? name : "";
};

export const getCompanyBadge = (text: string): string => {
  const badge = getCompanyName(text).split("")[0].toLocaleUpperCase();

  return badge ? badge : "";
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};
