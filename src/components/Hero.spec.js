import React from 'react'
import renderer from 'react-test-renderer'
import Hero from './Hero'

describe('Hero Component', () => {
  it('', () => {
    const component = renderer.create(<Hero />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
