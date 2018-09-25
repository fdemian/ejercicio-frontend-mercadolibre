import React from 'react';
import Enzyme, { mount }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Breadcrumb from '../Breadcrumb';
import CrumbDisplay from '../CrumbDisplay';
import SearchResults from '../../SearchResults/Container';

Enzyme.configure({ adapter: new Adapter() });

describe('<Breadcrumb /> ', () => {
  it('<Breadcrumb /> component', () => {

    const categories = ['Category1', 'Category2'];
    const enzymeWrapper = mount(<Breadcrumb items={categories} />);

    const componentContainer = enzymeWrapper.find('div');
    const crumbs = componentContainer.find(CrumbDisplay);

    expect(componentContainer.length).toBe(1);
    expect(crumbs.length).toBe(2);
  })
})
