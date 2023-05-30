import React from "react"

export const Card = (props: any) => {
  return (
    <div className="bg-sky-300 p-6 rounded-lg">
      {props.children}
    </div>
  )
}