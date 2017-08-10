import {ICounter} from '../../ui/src/counter/'
import {IStandardRecord} from '../utils/schemas'

interface ICounterDB extends ICounter, IStandardRecord {}
export {
  ICounter,
  ICounterDB
}