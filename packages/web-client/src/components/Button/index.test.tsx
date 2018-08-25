import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'

import Button from './index'

describe('Button component', () => {
  let wrapper: ShallowWrapper

  describe('with no props', () => {
    beforeEach(() => {
      wrapper = shallow(<Button />)
    })

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('with custom class', () => {
    const CUSTOM_CLASS = 'custom_class'

    beforeEach(() => {
      wrapper = shallow(
        <Button className={CUSTOM_CLASS} />
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
