import React from "react"

export default class InsertaScript extends React.Component {
  constructor(props) {
      super(props);
      
  }

  componentDidMount() {
      console.log(this.props.liga)
    
    const script = document.createElement("script")
    script.src = this.props.liga
    script.charSet = "utf-8"
    script.async = true
    this.scriptTag.appendChild(script)
  }

  render() {
    return <div ref={ref => (this.scriptTag = ref)} />
  }
}
