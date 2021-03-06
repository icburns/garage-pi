import React from 'react'

import axios from 'axios'

import DoorInfo from '../components/DoorInfo'
import GarageDoorButton from '../components/GarageDoorButton'
import GarageLightButton from '../components/GarageLightButton'

class GarageContainer<DoorConfig> extends React.Component {
  public props: DoorConfig;
  public state: any;

  constructor (props) {
    super(props)
    this.props = props
    console.log(props)

    this.state = { garageState: {}, doorId: props.doorInfo.doorId, doorName: props.doorInfo.name, force: props.doorInfo.forceDoor, light: props.doorInfo.light }

    this.updateStatus = this.updateStatus.bind(this)
    this.sendDoor = this.sendDoor.bind(this)
    this.sendLight = this.sendLight.bind(this)
    this.getGarageDoorStatus = this.getGarageDoorStatus.bind(this)
    this.getGarageLightStatus = this.getGarageLightStatus.bind(this)
  }

  componentDidMount () {
    this.updateStatus()
  }

  updateStatus () {
    axios.get(`/status/${this.state.doorId}`)
      .then(res => {
        this.setState({ garageState: res.data, doorId: this.state.doorId, doorName: this.state.doorName })
      })
      .catch(err => {
        console.log(err)
      })
  }

  sendDoor (force:boolean = false) {
    const body = JSON.stringify({ force: force })
    if (force) {
      const pendingDoorState = this.state
      pendingDoorState.garageState.doorOpen = null
      this.setState(pendingDoorState)
    }
    axios.post(`/door/${this.state.doorId}`, body, { headers: { 'Content-Type': 'application/json' } })
      .then(res => {
        console.log(res)
        this.updateStatus()
      })
      .catch(err => {
        console.log(err)
      })
  }

  sendLight () {
    axios.post(`/light/${this.state.doorId}`)
      .then(res => {
        console.log(res)
        this.updateStatus()
      })
      .catch(err => {
        console.log(err)
      })
  }

  getGarageDoorStatus () {
    console.log('get door state')
    console.log(this.state.garageState.doorOpen)
    if (!this.state.garageState) {
      return '....'
    }

    if (this.state.garageState.doorOpen === true) {
      return 'OPEN'
    } else if (this.state.garageState.doorOpen === false) {
      return 'CLOSED'
    } else {
      return '....'
    }
  }

  getGarageLightStatus () {
    console.log('get light state')
    console.log(this.state.garageState.lightOn)
    if (!this.state.garageState) {
      return 'UNKNOWN'
    }
    if (this.state.garageState.lightOn === true) {
      return 'ON'
    } else if (this.state.garageState.lightOn === false) {
      return 'OFF'
    } else {
      return 'UNKNOWN'
    }
  }

  render () {
    return (
      <div className="garageContainer">
        <DoorInfo doorInfo={this.props} />
        <GarageDoorButton
          buttonText={'DOOR'}
          status={this.state.garageState.doorOpen}
          force={this.state.force}
          sendDoor={this.sendDoor} />
        <GarageLightButton
          disabled={!this.state.light}
          buttonText={'LIGHT'}
          status={this.state.garageState.lightOn}
          sendLight={this.sendLight} />
      </div>
    )
  }
}

export default GarageContainer
