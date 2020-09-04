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

    randomFontSize() {
        var num = Math.random()
        if (num < .1) {
            num = .15
        } else if (num > .3 ) {
            num = .2
        }
        return num * 100
    }

    formatTerms() {
        var terms = []
        for(let i = 0; i < this.terms.length; i++) {
        terms.push(<div className='term' style={{fontSize:this.randomFontSize()}}>{this.terms[i]}</div>)
        }
        return terms
    }
    
    render() {
        return <div className='homepage-container'>
            <div className='glossary-board'>
                {this.formatTerms()}
            </div>
            <div className='description'>
                Welcome to Coding Glossary, your online classroom for learning all your techy terminology needed for your Software Engineering interview. While you can code, explaining what HTML is, Composition vs Inheritance or defining SRP can make or break your interview.
                Use our glossary to learn what all these terms mean, why they exist, and how to explain them to Engineering lead, or non-technical interviewer.
            </div>
        </div>
    }

}