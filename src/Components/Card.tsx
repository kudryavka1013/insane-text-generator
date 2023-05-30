import React from "react"

export const Card = (props: any) => {
  return (
    <div className="bg-sky-200 p-6 rounded-lg">
      {props.title && <div>{props.title}</div>}
      <div>{props.children}</div>
    </div>
  )
}