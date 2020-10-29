import React from 'react'
import { Button } from 'react-bootstrap'
import Question from './Question_data'
import './candidate.css'


class candidate extends React.Component {

    constructor() {
        super()

        this.state = {
            myArray: Question,
            questionCounter: 0
        }

        this.nextButton = this.nextButton.bind(this)
        this.recButton = this.recButton.bind(this)
    }

    nextButton() {
        if (this.state.questionCounter + 1 < 10) {
            this.setState((prevState) => (
                {
                    questionCounter: prevState.questionCounter + 1
                }
            )
            )
        }else{
            console.log("hi")
        }
    }

    recButton(){
        let index = this.state.questionCounter;
        let c = [...this.state.myArray]
        c[this.state.questionCounter].recCounter = c[this.state.questionCounter].recCounter - 1;

        if(c[this.state.questionCounter].recCounter <= 0){
            console.log("No more rec.!")
        }else{
            this.setState((prevState) => (
                {
                    myArray: c
                }
            ))
        }
    }
    render() {
        return (
            <div classNanme="candidate">
                <div className="container-fluid nav_bg">
                    <div class="col-12 mx-auto">
                        <div className="row cust_candiate align-items-center">
                            <div className="col-12 col-lg-10 col-sm-12 mx-auto" >

                                <div className="row justify-content-center">
                                    <h1>{this.state.myArray[this.state.questionCounter].question}</h1>
                                </div><br /><br />


                                <div className="row ">
                                    <div className="col-12 col-lg-6">
                                        <div className="row justify-content-center">
                                            <Button type="button" className="btn-danger" onClick={this.recButton}>Recoarding</Button>
                                        </div>
                                    </div>

                                    <div className="col-12 col-lg-6">
                                        <div className="row justify-content-center">
                                            {this.state.questionCounter <= 8 ? <Button type="primary" onClick={this.nextButton}>Next</Button> : <Button type="primary">Finish</Button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default candidate