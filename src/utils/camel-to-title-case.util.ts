/**
 * @function - Formats provided string with camel case to title case
 * @param camelCase - string
 * @returns string
 */
const camelCaseToTitleCase = (camelCase: string) => {
  const splittedString = camelCase.replace(/([A-Z])/g, ' $1');
  return splittedString.charAt(0).toUpperCase() + splittedString.slice(1);
};

export default camelCaseToTitleCase;
