import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
  // test('debe de mostrar el mensaje `Hola, Soy Goku`', () => {
  //   const saludo = 'Hola, Soy Goku';
  //   const wrapper = render(<PrimeraApp saludo={saludo} />);
  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // });

  test('debe de mostrar el <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy Goku';
    const subtitulo = 'Soy un subtítulo bien bonito';
    const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
    const textParrafo = wrapper.find('p').text();
    expect(textParrafo).toBe(subtitulo);
  });
});
