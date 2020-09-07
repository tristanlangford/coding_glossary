import React from 'react'
import './header.css'

export default class Header extends React.Component {
    constructor () {
        super();
      }
    
    render() {
        return <div className='header-container'>
                    <ul className='header-list'>
                        <li> 
                            <a href='/'>
                                <div className='web-title'>
                                    The Coding Glossary
                                </div>
                            </a>
                        </li>
                    </ul>
            </div>
    }

}