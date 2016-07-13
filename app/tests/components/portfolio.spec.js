import TestUtils from 'react-addons-test-utils';
import Portfolio from '../../scripts/containers/portfolio';

describe('Portfolio', () => {
  let component, result;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(Portfolio);
  });

  it('should display the correct title', () => {
    expect(component.getDOMNode().textContent).toMatch(/Portfiolio/);
  });

  let renderer = TestUtils.createRenderer();
  result = renderer.getRenderOutput();

  console.log(result)
  it('should render correctly', () => {
    expect(result.type).toBe('div');
  });

});
