import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Button from '../components/Button';

describe('the button renders and no explosions occurred', () =>{

  it.skip('snapshot of the button', () =>{
    const button = render(<Button onClick="onClick" />);
    expect(button).toMatchSnapshot();
  });

  it('should render the defaultStyle button', () =>{
    const defaultStyle = 'bg-indigo-dark hover:bg-indigo-darker text-white font-bold py-2 px-4 rounded-full';
    const wrapper = shallow(<Button onClick={() => {}} danger={false} children="Button" />)
    expect(wrapper.find('button').hasClass(defaultStyle)).toEqual(true);
  });
  
  it('should render the dangerStyle button', () =>{
    const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';
    const wrapper = shallow(<Button onClick={() => {}} danger={true} children="Button" />)
    expect(wrapper.find('button').hasClass(dangerStyle)).toEqual(true);
  });
});