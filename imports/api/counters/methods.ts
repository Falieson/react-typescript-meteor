import { Meteor } from 'meteor/meteor'
import Counters from './collections'

Meteor.methods({
  'counters.add': function ({ id, value }: {id: string, value: number}) {
    return Counters.insert({ id, value, createdAt: new Date() })
  },
})
