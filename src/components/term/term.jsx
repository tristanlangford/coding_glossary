import React from 'react'
import './term.css'
import terms from '../../terms' 
import Error from '../../Error'

export default class Term extends React.Component {
    constructor(props) {
        super();
        this.props = props
        this.term = this.getTerm()
    }

    getTerm() {
        for(let i = 0; i < terms.length; i++) {
            if(terms[i].name === this.props.match.params.name) {
                return terms[i]
            }
        }
    }

    createList(info) {
        var list = []
        for(let i = 0; i < info.length; i++) {
            list.push(<li>{info[i]}</li>)
        }
        return list
    }

    render() {
        if(this.term) {
        return <div className='term-container'>
            <div className='title'>{this.term.name}</div>
            <div className='term-description'>
                <strong>Description: </strong> {this.term.description}
            </div>
            <div className='benefits'>
                <strong>Benefits: </strong> <ul>
                        {this.createList(this.term.benefits)}
                    </ul>
            </div>
            <div className='disadvantages'>
                <strong>Disadvantages: </strong> <ul>
                        {this.createList(this.term.disadvantages)}
                    </ul>
            </div>
            <div className='lehman'>
                <strong>In Lehman Terms: </strong> {this.term.lehman}
            </div>
        </div>
        } else {
            return <Error name={this.props.match.params.name}/>
        }
    }
}