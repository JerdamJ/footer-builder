import { Module } from './module';

export interface Response {
  total_count: number;
  total_pages: number;
  current_page: number;
  count: number;
  data: Module[];
}
