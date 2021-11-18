import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {
  test('getHeroeByIdAsync debe de retornar un Héroe async', () => {
    const id = 1;
    return getHeroeByIdAsync(id).then(heroe => {
      expect(heroe).toBe(heroes[0]);
    });
  });

  test('debe de obtener un error si el heroe por id no existe', () => {
    const id = 10;
    return expect(getHeroeByIdAsync(id)).rejects.toMatch('No se pudo encontrar el héroe');
  });
});
