import React, { Component } from 'react';
import chunk from 'lodash/chunk';




class Clicker extends Component {

    constructor() {
        super();

        this.state = {
            x: 0,
            y: 4,
            f: 'N'
        };


        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.move = this.move.bind(this);
    }



    left() {
        if(this.state.f === 'N')
            this.setState({f: 'W'});
        else if(this.state.f === 'W')
            this.setState({f: 'S'});
        else if(this.state.f === 'S')
            this.setState({f: 'E'});
        else if(this.state.f === 'E')
            this.setState({f: 'N'});
    }

    right() {
        if(this.state.f === 'N')
            this.setState({f: 'E'});
        else if(this.state.f === 'W')
            this.setState({f: 'N'});
        else if(this.state.f === 'S')
            this.setState({f: 'W'});
        else if(this.state.f === 'E')
            this.setState({f: 'S'});
    }

    move() {
        if(this.state.f === 'N' && this.state.y !== 0)
            this.setState((prevState) => ({ y : prevState.y -1  }));
        else if(this.state.f === 'E' && this.state.x !== 3)
            this.setState((prevState) => ({ x : prevState.x + 1  }));
        else if(this.state.f === 'W' && this.state.x !== 0)
            this.setState((prevState) => ({ x : prevState.x - 1  }));
        else if(this.state.f === 'S' && this.state.y !== 4)
            this.setState((prevState) => ({ y : prevState.y + 1  }));

    }



    render() {

        function Robot(props) {
            if (props.index === props.x && props.itemIndex === props.y) {
                return <i className="fas fa-robot"></i>;
            }
            return <p>.</p>;
        }

        const styles = { width: '40px', height: '40px', float: 'left', textAlign: 'center', 'border-style': 'solid' };
        return (
            <div className="container">
                <div className="clicker border border-secondary rounded">
                    <div className="tic-tac-toe-container">
                        {chunk(new Array(20).fill(0), 4).map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className="row">
                                    {item.map((item,index) => <div className="col" style={styles} key={index}><Robot index={index} itemIndex={itemIndex} x={this.state.x} y={this.state.y}/></div>)}
                                </div>
                            );
                        })
                        }
                    </div>

                    <div className="clicker-button-panel d-flex flex-row">
                        <button className="btn btn-success w-100" onClick={this.left}>
                            <i className="fas fa-reply fa-2x"></i>
                        </button>
                        <button className="btn btn-warning w-100" onClick={this.move}>
                            <i className="fas fa-angle-up fa-2x"></i>
                        </button>
                        <button className="btn btn-danger w-100" onClick={this.right}>
                            <i className="fas fa-share fa-2x"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}



export default Clicker;
