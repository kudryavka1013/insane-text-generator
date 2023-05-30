import React from "react"
import { Card } from "./Card"
import { Config } from "./Config"

export const Editor = () => {
  return (
    <Card>
      <Config />
      <div className="flex mt-8">
        <input type="text" placeholder="输入文本，按下回车"/>
        <button>生成</button>
      </div>
      <div className="flex">
        <textarea placeholder="输出内容"></textarea>
        <div className="flex-col">
          <button className="block">复制</button>
          <button className="block">清空</button>
          {/* <button className="block">替换</button> */}
        </div>
      </div>
    </Card>
  )
}