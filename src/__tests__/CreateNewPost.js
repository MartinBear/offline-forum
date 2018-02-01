import React from 'react';
import { render, shallow, mount } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

describe('test form and create new post', ()=>{
  const mountWrap = mount(<CreateNewPost author="Zac" updatePosts={() => {}} />);
  const shallowWrap = shallow(<CreateNewPost author="Zac" updatePosts={() => {}} />);

  it('should render a form', () =>{
    expect(shallowWrap.find('form').exists()).toEqual(true);
  });

  it('should create new post', () =>{
    mountWrap.find('input[name="title"]').simulate('change', {target: {name: "title", value: "hey"}});
    mountWrap.find('textarea[name="content"]').simulate('change', {target: {name: "content", value: "cool post 2000"}});
    expect(mountWrap.state().title).toEqual('hey');
    expect(mountWrap.state().content).toEqual('cool post 2000');
    mountWrap.find("form").simulate('submit');
  });
});