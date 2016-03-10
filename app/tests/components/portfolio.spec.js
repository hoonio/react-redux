'use strict';
import TestUtils from 'react-addons-test-utils';
import Portfolio from '../scripts/components/portfolio';

describe('Portfolio', () => {
  var component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(Portfolio);
  });

  it('should display the correct title', () => {
    expect(component.getDOMNode().textContent).toMatch(/Portfolio/);
  });
});
