import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp component', () => {
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should display 100 as default value', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe(value.toString());
  });

  test('debe de incrementar contador con el btn +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe('11');
  });

  test('debe de incrementar contador con el btn -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe('9');
  });

  test('debe de colocar el valor por defecto con el btn reset', () => {
    const value = 105;
    const wrapper = shallow(<CounterApp value={value} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const textCounter = wrapper.find('h2').text();
    expect(textCounter).toBe(value.toString());
  });
});
