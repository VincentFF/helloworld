import { Repository } from 'typeorm';
import { VisitCounter } from './visit-counter.entity';
export declare class AppService {
    private readonly visitCounterRepository;
    constructor(visitCounterRepository: Repository<VisitCounter>);
    recordVisit(): Promise<number>;
}
