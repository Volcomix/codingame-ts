import { Cell } from './cell'

export interface ValueCell<T> extends Cell {
  value: T
}
