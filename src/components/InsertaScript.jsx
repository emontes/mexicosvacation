import React from "react"

export default class InsertaScript extends React.Component {
  componentDidMount() {
    console.log('-- el noAsync --')
    console.log(this.props.noAsync)
    const script = document.createElement("script")
    script.src = this.props.liga
    script.charSet = "utf-8"
    script.async = this.props.noAsync ? false : true
    this.scriptTag.appendChild(script)
  }

  render() {
    return <div ref={ref => (this.scriptTag = ref)} />
  }
}
