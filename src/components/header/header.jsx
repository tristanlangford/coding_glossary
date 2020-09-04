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
                            <div className='web-title'>
                                Coding Glossary
                            </div>
                        </li>
                    </ul>
            </div>
    }

}