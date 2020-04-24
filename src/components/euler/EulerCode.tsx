import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";

import React from "react";
import Card from "../Card";

type EulerCodeState = {
  code: string;
};

export default class EulerCode extends React.Component<
  { problemNumber: string },
  EulerCodeState
> {
  problemNumber: string;

  constructor(props: any) {
    super(props);
    this.problemNumber = props.problemNumber;

    this.state = {
      code: "",
    };
  }

  async componentDidMount() {
    const codeText = await this.getCodeText();
    this.setState({ code: codeText });
  }

  async getCodeText(): Promise<string> {
    const response = await fetch(
      `https://raw.githubusercontent.com/jackmoody11/project-euler-solutions/master/python/p${this.problemNumber.padStart(
        3,
        "0"
      )}.py`
    );
    return await response.text();
  }

  render() {
    return (
      <Card title="The Code">
        <SyntaxHighlighter language="python" style={googlecode}>
          {this.state.code}
        </SyntaxHighlighter>
      </Card>
    );
  }
}
