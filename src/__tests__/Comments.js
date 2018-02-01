import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api';

describe('test comments', () =>{
  const mountWrap = mount(<Comments postId="565ddy34" currentPersona="Zac" author="Zac" />);
  const shallowWrap = shallow(<Comments postId="565ddy34" currentPersona="Zac" author="Zac" />);

  const comments = [{
      comment: "Blobagorn",
      id: "_lu4aiciyt",
      postId: "565ddy34",
      author: "Zac",
      date: "1/31/2018",
      currentPersona: "Zac"
    }];
  
  it('should show comments', () =>{
    mountWrap.setState({ comments });
    mountWrap.instance().renderCommentList(comments);
    expect(mountWrap.find('SingleComment').text()).toContain("Blobagorn");
  });
  
  it('should remove comment', () =>{
    api.removeComment = jest.fn();
    shallowWrap.instance().removeComment();
    expect(api.removeComment).toHaveBeenCalled();
  });

});