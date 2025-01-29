import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroService {
    private superheros: CreateSuperheroDto[] = [];

    create(superhero: CreateSuperheroDto) {
        this.superheros.push(superhero);
    }

    findAll() {
        return this.superheros.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}
