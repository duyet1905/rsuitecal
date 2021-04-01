import React, {Component} from "react";
import { Button } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';
// const styles = {
//   padding: 20,
//   textAlign: "center"
// };

// class App extends Component = () => (
//   <div style={styles}>
//     <Button>Hello World</Button>
//   </div>
// );
class KeyPad extends Component {

    render() {
        return (
            <div className="button">
                <Button appearance="link" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</Button>
                <Button appearance="link" name="C" onClick={e => this.props.onClick(e.target.name)}>C</Button><br/>


                <Button appearance="link" name="1" onClick={e => this.props.onClick(e.target.name)}>1</Button>
                <Button appearance="link" name="2" onClick={e => this.props.onClick(e.target.name)}>2</Button>
                <Button appearance="link" name="3" onClick={e => this.props.onClick(e.target.name)}>3</Button>
                <Button appearance="link" name="+" onClick={e => this.props.onClick(e.target.name)}>+</Button><br/>


                <Button appearance="link" name="4" onClick={e => this.props.onClick(e.target.name)}>4</Button>
                <Button appearance="link" name="5" onClick={e => this.props.onClick(e.target.name)}>5</Button>
                <Button appearance="link" name="6" onClick={e => this.props.onClick(e.target.name)}>6</Button>
                <Button appearance="link" name="-" onClick={e => this.props.onClick(e.target.name)}>-</Button><br/>

                <Button appearance="link" name="7" onClick={e => this.props.onClick(e.target.name)}>7</Button>
                <Button appearance="link" name="8" onClick={e => this.props.onClick(e.target.name)}>8</Button>
                <Button appearance="link" name="9" onClick={e => this.props.onClick(e.target.name)}>9</Button>
                <Button appearance="link" name="*" onClick={e => this.props.onClick(e.target.name)}>x</Button><br/>


                <Button appearance="link" name="." onClick={e => this.props.onClick(e.target.name)}>.</Button>
                <Button appearance="link" name="0" onClick={e => this.props.onClick(e.target.name)}>0</Button>
                <Button appearance="link" name="=" onClick={e => this.props.onClick(e.target.name)}>=</Button>
                <Button appearance="link" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</Button><br/>
            </div>
        );
    }
}

export default KeyPad;


