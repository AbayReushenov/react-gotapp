import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'

export default class RandomChar extends Component {
    newGame = new GotService()

    state = {
        data: {},
        timeLoading: true,
        er404: false
    }
    componentDidMount() {
        console.log('3. Mounting')
        this.newPerson()
        this.idTimerNewPerson = setInterval(this.newPerson, 3000)
    }

    componentWillUnmount() {
        console.log('4. Unmounting')
        clearInterval(this.idTimerNewPerson)
    }

    loader = data => this.setState({data, timeLoading: false})

    onError = () => this.setState({er404: true, timeLoading: false })

    newPerson = () => {
        console.log("newPerson")

        const newid = Math.floor(Math.random()*140 + 25);
   
        this.newGame.getElement(0,newid)
            .then(this.loader)
            .catch(this.onError)  
    }

    render() {
        console.log("2.render")
        const { data, timeLoading, er404 } = this.state

        const er404Message = er404 ? <ErrorMessage/> : null
        const spinner = timeLoading ? <Spinner/> : null
        const content = !(timeLoading || er404) ? <ComponentView data={data}/> : null
  
        return (
            <div className="random-block rounded"> 
             {er404Message}
             {spinner}
             {content}
            </div>
        );
    }
}

const ComponentView = ({data}) => {
    const { name, gender, born, died, culture } = data

    return (
    <>
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture}</span>
            </li>
        </ul>
    </>
    )
}