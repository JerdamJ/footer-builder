import { Property } from './property';

export interface Module {
  id: string;
  name: string;
  properties: Property[];
  template: string;
  status: string;
  icon: string;
  image: any;
}
