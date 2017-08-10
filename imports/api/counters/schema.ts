// Definition of the Counter Schema.
import SimpleSchema from 'simpl-schema'
import { StandardRecordSchema } from '../utils/schemas'

const Schema = {
  id: {
    type: String,
    label: 'name',
    optional: true,
  },
  value: {
    type: Number,
    label: 'value',
    optional: false,
    defaultValue: 0
  },
}

const NewCounterSchema = new SimpleSchema(Schema);
const ExistingCounterSchema = new SimpleSchema(Schema)
ExistingCounterSchema.extend(StandardRecordSchema)

export {
  NewCounterSchema,
  ExistingCounterSchema,
}
