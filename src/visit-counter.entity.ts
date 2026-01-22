import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'visit_counters' })
export class VisitCounter {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'int', default: 0 })
  count: number;
}
