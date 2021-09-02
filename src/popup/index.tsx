import { FC } from "react"

import ReactDOM from "react-dom"

const App: FC = () => {
  const onClick = () => {
    chrome.runtime.sendMessage("Update")
  }

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        onClick={onClick}
        style={{ padding: "1rem 0.5rem" }}
      >
        Update headers
      </button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))
