import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheros')
export class SuperheroController {
    constructor(private readonly superheroService: SuperheroService) {}
    
    @Post()
    create(@Body() CreateSuperheroDto: CreateSuperheroDto) {
        this.superheroService.create(CreateSuperheroDto);
        return { message: 'Superhero added successfully!'};
    }

    @Get()
    findAll() {
        return this.superheroService.findAll();
    }
}
