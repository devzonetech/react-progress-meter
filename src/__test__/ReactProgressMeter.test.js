import React from 'react'
import renderer from 'react-test-renderer'
import ReactProgressMeter from '../ReactProgressMeter'

describe('ReactProgressMeter', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<ReactProgressMeter currentProgress={45} color="lime" />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})