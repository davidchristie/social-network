import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'

import ButtonLink from './index'

describe('ButtonLink component', () => {
  const TO = '/test-route'

  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(
      <ButtonLink to={TO} />
    )
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
