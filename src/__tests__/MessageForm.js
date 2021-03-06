import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Bot from '../components/Bot/Bot';

describe('<Bot />', () =>{
  const shallowWrap = shallow(<Bot />);

  it('should create a message', () =>{
    const content = 'Fo i heldvede';
    shallowWrap.instance().onSubmit(content);
    expect(shallowWrap.state().messages[0].message).toContain('Fo i heldvede');
  });
      
  it('should change state when typing', ()=>{
    const shallowWrap = shallow(<Bot />);
    expect(shallowWrap.state('typing')).toBe(false);
    shallowWrap.instance().sendReply();
    expect(shallowWrap.state('typing')).toBe(true);
  });
});