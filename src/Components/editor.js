import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const JSONTextArea = styled.textarea`
    width:  700px;
    height: 100%;
    resize: none;    
    border: none;
    background-image: linear-gradient(to bottom,#FFFFFF,#e2e2e2);
`;

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.dataChanged = this.dataChanged.bind(this);
        this.state = { data: JSON.stringify(this.props.mockData, null, "  ") }
    }

    dataChanged(event) {
        this.setState({ data: event.target.value }, () => {
            this.props.updateRawData(this.state.data);
        });
    }

    render() {
        let {data} = this.state;
        return (
            <div>
                <JSONTextArea value={data} onChange={this.dataChanged} />
            </div>
        );
    }
}

export default Editor;
