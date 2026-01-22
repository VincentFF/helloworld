import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VisitCounter } from './visit-counter.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(VisitCounter)
    private readonly visitCounterRepository: Repository<VisitCounter>,
  ) {}

  async recordVisit(): Promise<number> {
    const id = 1;
    let counter = await this.visitCounterRepository.findOne({
      where: { id },
    });

    if (!counter) {
      counter = this.visitCounterRepository.create({ id, count: 0 });
      await this.visitCounterRepository.save(counter);
    }

    counter.count += 1;
    await this.visitCounterRepository.save(counter);

    return counter.count;
  }
}
