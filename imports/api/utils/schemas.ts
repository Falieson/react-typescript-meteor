import SimpleSchema from 'simpl-schema'

interface ITimeStamp {
  created: Date,
  updated: Date,
}

interface IMongoUID {
  _id: string,
}

interface IStandardRecord extends ITimeStamp, IMongoUID {}

const StandardRecordSchema = new SimpleSchema({
  _id: {
    label: 'UID',
    optional: true,
    type: Date,
  },
  created: {
    label: 'Creation Date',
    optional: false,
    type: Date,
    autoValue(){
      if (this.isInsert) return new Date()
      if (this.isUpsert) return { $setOnInsert: newDate() }
      return this.unset();
    }
  },
  updated: {
    label: 'Update Date',
    optional: false,
    type: Date,
    autoValue() {
      if (this.isInsert || this.isUpsert) return new Date()
      return this.unset();
    }
  },
});

export {
  StandardRecordSchema,
  IStandardRecord,
  ITimeStamp,
  IMongoUID,
}
