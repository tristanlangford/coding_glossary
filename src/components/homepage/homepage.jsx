import React from 'react'
import './homepage.css'
 
export default class Homepage extends React.Component {
    constructor () {
        super();
        this.terms = ["Dependency Injection",
            "Concatenation",
            "MVP",
            "Machine Learning",
            "Edge case",
            "Concurrency",
            "Inheritance" ,
            "Functional language",
            "OOL",
            "SRP",
            "Interface segregation principle",
            "Dependency Inversion Principle",
            "Atomic increment",
            "Composition over inheritance",
            "Continuous Integration"
        ]
    }

    formatTerms() {
        var terms = []
        for(let i = 0; i < this.terms.length; i++) {
        terms.push(<div className='term'>{this.terms[i]}</div>)
        }
        return terms
    }
    
    render() {
        return <div className='homepage-container'>
            <div className='glossary-board'>
                {this.formatTerms()}
            </div>
        </div>
    }

}