import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Question from './Question_data'
import MicRecorder from 'mic-recorder-to-mp3'
import './candidate.css'

const Mp3Recorder = new MicRecorder({ bitRate: 128});

class candidate extends React.Component {

    constructor() {
        super()

        this.state = {
            myArray: Question,
            questionCounter: 0,
            isRecording: false,
            blobURL: '',
            isBlocked: false,
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
      start = () => {
        if (this.state.isBlocked) {
          console.log('Permission Denied');
        } else {
          Mp3Recorder
            .start()
            .then(() => {
              this.setState({ isRecording: true });
            }).catch((e) => console.error(e));
        }
      };
      stop = () => {
        Mp3Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            const blobURL = URL.createObjectURL(blob)
            this.setState({ blobURL, isRecording: false });
          }).catch((e) => console.log(e));
      };
    
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
                                        <button onClick={this.start} disabled={this.state.isRecording}>
                                        Record
                                        </button>
                                        <button onClick={this.stop} disabled={!this.state.isRecording}>
                                        Stop
                                        </button>
                                        <audio src={this.state.blobURL} controls="controls" />
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
            </div>
        )
    }
}

export default candidate