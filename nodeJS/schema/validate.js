const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const validateSchema = (schema) => {
  return (req, res, next) => {
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);

    const validate = ajv.compile(schema); // generate a validation function based on the provided schema.
    const valid = validate(req.body); // invokes the compiled validation function with the data we made the POST (req.body).

    if (!valid) { // If the data does not match the schema 
      const map = validate.errors.map((i) => {
        return `${i.instancePath.substring(1).toUpperCase()} field -> ${i.message}`;
      });

      return res.status(400).send(map.join(" and "));
    }

    next(); // If the data matches the schema, we call next() to continue to the next middleware.
  };
};

module.exports = {
  validateSchema
};
