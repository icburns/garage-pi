import React from 'react'
import { DoorConfig } from './models/DoorConfig'
import GarageContainer from './containers/GarageContainer'

const doorConfig: DoorConfig[] = [
  {
    doorId: 0,
    name: 'XING',
    forceDoor: true,
    light: false
  },
  {
    doorId: 1,
    name: 'BU XING',
    forceDoor: false,
    light: true
  }
]

export default class App extends React.Component {
  render () {
    const garageContainers = (
      <div className="garageContainers">
        <GarageContainer doorInfo={doorConfig[0]} doorCount={doorConfig.length} />
        <GarageContainer doorInfo={doorConfig[1]} doorCount={doorConfig.length} />
      </div>
    )
    return garageContainers
  }
}
