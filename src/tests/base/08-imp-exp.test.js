import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
  test('debe retornar un heroe por id', () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find(h => h.id === id);
    expect(heroe).toEqual(heroeData);
  });

  test('debe retornar undefined si heroe no existe', () => {
    const id = 20;
    const heroe = getHeroeById(id);
    expect(heroe).toBeUndefined();
  });

  test('debe retornar los heroes de DC', () => {
    const owner = 'DC';
    const dcHeroes = getHeroesByOwner(owner);
    const dcHeroesTest = heroes.filter(h => h.owner === owner);
    expect(dcHeroes).toEqual(dcHeroesTest);
  });

  test('debe haber una longitud de 2 heroes de marvel', () => {
    const owner = 'Marvel';
    const marvelHeroes = getHeroesByOwner(owner);
    expect(marvelHeroes.length).toBe(2);
  });
});
