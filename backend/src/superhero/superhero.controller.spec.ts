import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let service: SuperheroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);
    service = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add a superhero', () => {
    const superhero: CreateSuperheroDto = { name: 'Spiderman', superpower: 'Web-slinging', humilityScore: 9 };

    const result = controller.create(superhero);
    expect(result).toEqual({ message: 'Superhero added successfully!' });
  });

  it('should retrieve superheroes sorted by humility', () => {
    controller.create({ name: 'Iron Man', superpower: 'Tech Genius', humilityScore: 5 });
    controller.create({ name: 'Captain America', superpower: 'Super Soldier', humilityScore: 10 });

    const superheroes = controller.findAll();
    expect(superheroes[0].name).toBe('Captain America'); // Highest humility score first
    expect(superheroes[1].name).toBe('Iron Man'); // Lower humility score next
  });
});
