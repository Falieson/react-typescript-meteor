import { Meteor } from 'meteor/meteor';
import  Counters from './collections';

if(Meteor.isServer) {
  Meteor.publish('counters.all', function() { // tslint:disable-line only-arrow-functions
    return Counters.find({}, { sort: { createdAt: -1 }})
  })
}
