import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import './CodeForm.css'
import {fetchDecode, fetchEncode, textHandler} from "../../store/actions/codeAction";

class CodeForm extends Component {

submitEncode = () => {
        if (this.props.state.password === '' && this.props.state.encode === '') {
            alert('Enter password or message!');
        } else {
            const data = {
                password: this.props.state.password,
                encode: this.props.state.decode
            };
            this.props.fetchEncode(data);
        }
    };

    submitDecode = () => {
        if (this.props.state.password === '' && this.props.state.decode === '') {
            alert('Enter password or message!');
        } else {
            const data = {
                password: this.props.state.password,
                decode: this.props.state.encode
            };
            this.props.fetchDecode(data);
        }
    };

    render() {
        return (
            <Fragment>
                <div>
                    <span>Decoded message</span>
                    <input
                        name="decode"
                        value={this.props.state.decode}
                        onChange={(e) => this.props.textHandler({type: e.target.name, text: e.target.value})}
                        className="Decoded"
                    />
                </div>
                <div className="Password">
                    <span>Password</span>
                    <input
                        name="password"
                        value={this.props.state.password}
                        onChange={(e) => this.props.textHandler({type: e.target.name, text: e.target.value})}
                    />
                    <button onClick={this.submitEncode}>&#8595;</button>
                    <button onClick={this.submitDecode}>&#8593;</button>
                </div>
                <div>
                    <span>Encoded message</span>
                    <input
                        name="encode"
                        value={this.props.state.encode}
                        onChange={(e) => this.props.textHandler({type: e.target.name, text: e.target.value})}
                        className="Encoded"/>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    state
});


const mapDispatchToProps = dispatch => {
    return {
        textHandler : input => dispatch(textHandler(input)),
        fetchEncode: encode => dispatch(fetchEncode(encode)),
        fetchDecode: decode => dispatch(fetchDecode(decode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodeForm);