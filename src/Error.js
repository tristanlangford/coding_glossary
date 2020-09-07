import React from 'react'
import './Error.css'

export default class Error extends React.Component {
    constructor(props) {
        super()
        this.props = props
    }

    render() {
        console.log(this.props)
        return <div className='error-container'>
            <div className='error-message'>
                <div className='error-text'>
                    Opps... Looks like we don't have anything for <strong>{this.props.name}</strong>. If you think we should, drop us a message and let us know!
                </div>
            </div>
        </div>
    }
}