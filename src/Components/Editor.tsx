import React from "react"
import { Card } from "./Card"
import { Config } from "./Config"

export const Editor = () => {
  return (
    <Card>
      <Config />
      <div className="flex mt-8">
        <input type="text" />
        <button>输入</button>
      </div>
      <div className="flex">
        <textarea></textarea>
        <div className="flex-col">
          <button className="block">复制到剪贴板</button>
          <button className="block">清空</button>
          {/* <button className="block">替换</button> */}
        </div>
      </div>
    </Card>
  )
}