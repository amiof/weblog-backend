const Ajv = require("ajv");
const createHttpError = require("http-errors");
const ajv = new Ajv();

const categoryValidtionSchema = {
  type: "object",
  properties: {
    categoryName: { type: "string", maxLength: 20, minLength: 3 },
  },
};

const validate = ajv.compile(categoryValidtionSchema);

function validateCategory(data) {
  const valid = validate(data);
  if (!valid) throw createHttpError.BadRequest(` ${console.log(validate.errors)}`);
  return valid;
}

module.exports = {
  validateCategory,
};
