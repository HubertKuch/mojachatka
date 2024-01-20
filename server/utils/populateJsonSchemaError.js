function getMessage(type, field, def) {
  const MESSAGE_BY_TYPE = {
    required: `Pole ${def?.label} nie moze byc puste`,
    minLength: `Pole ${def?.label} musi miec conajmniej ${def.minLength} znakow`,
    maxLength: `Pole ${def?.label} nie moze przekraczzac ${def.maxLength} znakow`,
    type: `Pole ${field} niepoprawne`,
  };

  return MESSAGE_BY_TYPE[type] || "";
}

function populateJsonSchemaError(schema, errors) {
  return errors.map((err) => {
    const keywordKeys = err.keywordLocation.replace("#/", "").split("/");
    const type = keywordKeys[keywordKeys.length - 1];
    keywordKeys.pop();

    const field = err.instanceLocation
      .replace("#/", "")
      .split("/")
      .reverse()[0];

    keywordKeys.push("properties", field);

    let propDef = schema;

    for (const key of keywordKeys) {
      try {
        const newProp = propDef[key];

        if (newProp) propDef = newProp;
      } catch {}
    }

    return {
      type,
      path: err.instanceLocation.replace("#/", "").split("/").join("."),
      message: getMessage(type, field, propDef),
      def: propDef,
      field,
    };
  });
}

module.exports = populateJsonSchemaError;
