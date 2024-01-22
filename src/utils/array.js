console.log("[flattenDeep] declared here!");
const flattenDeep = (arr) =>
  arr.flatMap((subArray) =>
    Array.isArray(subArray) ? flattenDeep(subArray) : subArray
  );

export { flattenDeep };
