import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import CreateNewComment from '../components/CreateNewComment';

describe('test form and classes', () =>{
  const shallowWrap = shallow(<CreateNewComment postId="" author="Zac" updateComments={() => {}} />);
  
  it('should have the correct classes', () =>{
    const classes = "container mx-auto flex flex-col p-6";
    expect(shallowWrap.find('form').hasClass(classes)).toBe(true);
  });
        
  it('should create a new comment', () =>{
    const mountWrap = mount(<CreateNewComment postId="1" author="Zac" updateComments={() => {}} />);
    mountWrap.find('textarea[name="comment"]').simulate('change', {target: {name: "comment", value: "Best comment ever"}});
    expect(mountWrap.state().comment).toEqual('Best comment ever');
    mountWrap.find('form').simulate('submit');
  });
});

