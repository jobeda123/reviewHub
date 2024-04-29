export const getCompanyName = (text: string): string => {
  const name = text
    .split(" ")
    .find((word) => word.includes("#"))?.substring(1);

  return name ? name : "";
};
