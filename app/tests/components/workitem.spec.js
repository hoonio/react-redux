import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import WorkItem from '../../scripts/components/workitem';

const setupPortfolio = () => {
  const props = {
    item: {
      gsx$title: { $t: 'Portfolio item title' },
      gsx$client: { $t: 'Hoonio' },
      gsx$description: { $t: 'Portfolio item description' },
      gsx$period: { $t: '2016' },
      gsx$link: { $t: 'https://www.hoonio.com' },
      gsx$image: { $t: 'https://lh3.googleusercontent.com/-8Z3yuTBwxPM/VujUgRbZ_BI/AAAAAAACxo0/MvOyeMohYAwvJt08bD3s-yncLO82k2DAwCCo/w386-h240-Ic42/Screen%2BShot%2B2016-03-16%2Bat%2B03.34.08.png' },
      gsx$imagealt: { $t: 'image alt' },
      gsx$stacks: { $t: 'React.js, Redux, ES6, Node.js, Express, Bootstrap, Babel, Gulp, Azure' },
      gsx$sourcecode: { $t: 'https://github.com/hoonio/root' },
      gsx$portfolio: { $t: 'TRUE' }
    },
    index: 1
  };

  return shallow(<WorkItem {...props} />);
}

describe('Render Portfolio', () => {
  const wrapper = setupPortfolio();
  it('renders catalog item name', () => {
    expect(wrapper.find('h4').text()).toEqual('Portfolio item title')
  });
});
