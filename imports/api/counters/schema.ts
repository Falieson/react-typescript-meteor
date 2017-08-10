// Definition of the Counter Schema.
import SimpleSchema from 'simpl-schema'
import { StandardRecordSchema } from '../utils/schemas'

const Schema = {
  id: {
    label: 'name',
    optional: true,
    type: String,
  },
  value: {
    defaultValue: 0,
    label: 'value',
    optional: false,
    type: Number,
  },
}

const NewCounterSchema = new SimpleSchema(Schema);
const ExistingCounterSchema = new SimpleSchema(Schema)
ExistingCounterSchema.extend(StandardRecordSchema)

export {
  NewCounterSchema,
  ExistingCounterSchema,
}
