import React from "react"

export const Wrapper = (props: any) => {
  return (
    <div className="p-10 h-screen">
      {props.children}
    </div>
  )
}