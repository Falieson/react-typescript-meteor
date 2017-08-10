import * as Mongo from 'meteor/mongo';

declare module 'meteor/mongo' {
  module Mongo {
    interface Collection<T> extends Collection<T> {
      methods: any
    } 
  }
}
