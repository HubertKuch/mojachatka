function objectToQueryUri(obj) {
  const uri = new URLSearchParams();

  Object.keys(obj).forEach((key) => {
    uri.append(key, obj[key]);
  });

  return `?${uri.toString()}`;
}

export default {
  objectToQueryUri,
};
