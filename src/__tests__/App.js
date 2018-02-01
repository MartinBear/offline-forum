import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';
import Posts from '../components/Posts';
import PersonaSwitcher from '../components/PersonaSwitcher';


it('renders the app and no explosions occurred', () =>{
  render(<App />);
});

describe('<PersonaSwitcher />', () =>{
  const mountWrap = mount(<App />);

  it('should switch current persona', () =>{
    expect(mountWrap.find(PersonaSwitcher).render().find('select').val()).toEqual('Zac');
    const selectPersona = mountWrap.find('select');
    selectPersona.simulate('change', {target : {value : "Esmeralda"}});
    expect(mountWrap.state().currentPersona).toEqual('Esmeralda');
  });

  it('should render currentPage as home', () =>{
    expect(mountWrap.state().currentPage).toBe('home');
  });

  it('should set currentPage to bot', () =>{
    mountWrap.instance().changePage();
    expect(mountWrap.state().currentPage).toBe('bot');
  });
});

describe('test if posts or bot should render', () =>{
  const mountWrap = mount(<App />);

  it('should render posts if currentPage is home', () =>{
    mountWrap.setState({ currentPage: 'home' });
    expect(mountWrap.find(Posts).length).toBe(1);
  });
  
  it('should not render posts if currentPage is bot', () =>{
    mountWrap.setState({ currentPage: "bot" });
    expect(mountWrap.find(Posts).length).toBeLessThan(1);
  });
});