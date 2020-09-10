import React from 'react'
import './header.css'
import terms from '../../terms'

export default class Header extends React.Component {
    constructor () {
        super();
        this.state = {
            word: ""
        }
      }

      updateSearchArray(e) {
          this.setState({
              word: e.target.value
          })
      }

      dropDownAutoFill(word) {
        this.setState({
            word: word
        })
      }

      searchDropDown() {
          var results = []
          if(this.state.word.length > 0) {
            for(let i = 0; i < terms.length || i < 6; i++) {
                if(terms[i].name.includes(this.state.word)) {
                    results.push(<a href={`/term/${terms[i].name}`}><li>{terms[i].name}</li></a>)
                }
            }
          }
          return results
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
                        <li className='search-bar'> 
                            <div className='search'>
                                Search: <input className='search-input' type='text' value={this.state.word} onChange={(e) => {this.updateSearchArray(e)}}/>
                            </div>
                            <div className='search-dropdown'>
                                <ul>
                                    {this.searchDropDown()}
                                </ul>
                            </div>
                        </li>
                    </ul>
            </div>
    }

}