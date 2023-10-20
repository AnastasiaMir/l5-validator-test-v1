import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    const validator = (value) => typeof value === 'number';
    return new NumberSchema([validator]);
  }

  array() {
    return new ArraySchema([(value) => Array.isArray(value)]);
  }

  object() {
    return new ObjectSchema();
  }
}
