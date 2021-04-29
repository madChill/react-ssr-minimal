import React from 'react';
import renderer from 'react-test-renderer';

import Review from '../../../src/containers/demo/reviews';

test('testing Review component is rendered', () => {
    const component = renderer.create(<Review />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
