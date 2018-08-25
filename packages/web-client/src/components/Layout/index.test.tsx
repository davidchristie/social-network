import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'

import Layout from './index'

describe('Layout component', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Layout />)
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
