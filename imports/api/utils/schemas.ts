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
    type: Date,
    label: 'UID',
    optional: true,
  },
  created: {
    type: Date,
    label: 'Creation Date',
    optional: false,
    autoValue: function(){
      if (this.isInsert) return new Date()
      if (this.isUpsert) return { $setOnInsert: newDate() }
      return this.unset();
    }
  },
  updated: {
    type: Date,
    label: 'Update Date',
    optional: false,
    autoValue: function() {
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
