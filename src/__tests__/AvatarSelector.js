import React from 'react';
import { shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';

it('should render avatar of Zac', () =>{
  const avatar = shallow(<AvatarSelector currentPersona="Zac" />);
  expect(avatar.find("img").prop("src")).toContain("zac.png");
});

it('should render avatar of Esmeralda', () =>{
  const avatar = shallow(<AvatarSelector currentPersona="Esmeralda" />);
  expect(avatar.find("img").prop("src")).toContain("esmeralda.png");
});

it('should render avatar of Morgana', () =>{
  const avatar = shallow(<AvatarSelector currentPersona="Morgana" />);
  expect(avatar.find("img").prop("src")).toContain("morgana.png");
});