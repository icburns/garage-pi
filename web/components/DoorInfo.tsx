import React = require('react')

const DoorInfo = (props: any) => {
  const { doorInfo } = props.doorInfo
  console.log(props)
  return (
    <div className="doorInfo">
      {doorInfo.name}
    </div>
  )
}

export default DoorInfo
