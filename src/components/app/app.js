import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage'
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage'


export default class App extends Component {
    state = {
        hide: true,
        error: false
        }
    
    componentDidCatch(){
        console.log('errpr')
        this.setState({error: true})
    }
    
        
    hideMe(){
        this.setState({
            hide:!this.state.hide
        })
    }



    render(){

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <> 
                        { this.state.hide ? (<RandomChar/>) : null }
                        <Button color="danger" onClick={()=> this.hideMe()}>Hide or show random Character?</Button>
                        </>
                    </Col>
                </Row>
                    <CharacterPage/>
                    <CharacterPage/>
                    <CharacterPage/>
            </Container>
        </>
    )
   }
}
