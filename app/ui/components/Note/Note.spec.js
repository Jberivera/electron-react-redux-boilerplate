import React from 'react';
import Note from './Note';
import expect, { createSpy } from 'expect';
import { shallow } from 'enzyme';

describe('<Note />', () => {
  it('has a h1 element', () => {
    const wrapper = shallow(<Note />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('simulates click events', () => {
    const onButtonClick = createSpy();
    const wrapper = shallow(
      <Note onClick={onButtonClick} />
    );
    wrapper.find('h1').simulate('click');
    expect(onButtonClick).toHaveBeenCalled();
  });
});
