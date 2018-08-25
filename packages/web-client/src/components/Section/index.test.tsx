import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'

import Section from './index'

describe('Section component', () => {
  let wrapper: ShallowWrapper

  describe('with no props', () => {
    beforeEach(() => {
      wrapper = shallow(<Section />)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with custom class', () => {
    const CUSTOM_CLASS = 'custom_class'

    beforeEach(() => {
      wrapper = shallow(
        <Section className={CUSTOM_CLASS} />
      )
    })

    it('has custom class', () => {
      expect(wrapper.hasClass(CUSTOM_CLASS)).toBe(true)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })
})
