import React from "react"
import { Card } from "./Card"
import { Config } from "./Config"

export const Editor = () => {
  return (
    <Card>
      <Config />
      <input type="text" />
      <div className="flex">
        <textarea></textarea>
        <div className="flex-col">
          <button className="block">复制</button>
          <button className="block">清空</button>
          <button className="block">替换</button>
        </div>
      </div>
    </Card>
  )
}