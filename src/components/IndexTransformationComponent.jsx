import React from 'react'

export default function IndexTransformationComponent(props) {
  return (
    <div className="index-transformation-component">
        <div className="index-transformation-component-image">
            <img src={props.image} alt="" />
            <div className="index-tranformation-component-image-helper"></div>
        </div>
        <div className="index-transformation-component-info">
            <p>{props.nameYears}</p>
            <span>{props.kgDifference}</span>
        </div>
    </div>
  )
}