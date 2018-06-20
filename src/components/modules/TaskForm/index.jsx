import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import NProgress from 'react-nprogress'
import { CustomButton, CustomInput } from '../../common'
import Alert from '../Alert'
import 'react-nprogress/nprogress.css'
import 'react-datepicker/dist/react-datepicker.css'
import './style.css'

export default class TaskForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.task ? props.task.name : '',
            type: props.task ? props.task.type : 'Code',
            day: props.task ? moment(props.task.day) : moment(),
            createdAt: props.task ? moment(props.task.createdAt) : moment(),
            completed: props.task ? props.task.completed : false,
            error: undefined
        }
    }

    componentWillMount() {
        NProgress.start()
    }

    componentDidMount() {
        NProgress.done()
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })
    onDateChange = day => {
        if(!day) this.setState({ day: moment() })
        else this.setState({ day })
    }

    onSubmit = e => {
        e.preventDefault()
        const { name, day, type, createdAt, completed } = this.state
        const {onSubmit} = this.props

        if(!name || !day || !type) this.setState({ error: 'Fill in all the fields' })
        else {
            NProgress.start()
            onSubmit({
                name,
                type,
                day: day.valueOf(),
                createdAt: createdAt.valueOf(),
                completed
            })

            e.target.type.value = ''
            this.setState({
                name: '',
                type: 'Code',
                day: moment()
            })
            NProgress.done()
        }
    }

    closeModal = () => this.setState({ error: undefined })
    render() {
        const {name, type, day, error} = this.state
        return (
            <div className="card">
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="column xlarge-4 small-12">
                            <CustomInput
                                icon="task"
                                type="text"
                                placeholder="Enter a new task" 
                                autoComplete="off"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="column xlarge-4 small-12">
                            <div className="input-field purple-input">
                                <select name="type" onChange={this.handleChange} value={type}>
                                    <option defaultValue value="Code">Code</option>
                                    <option value="Design">Design</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="column xlarge-4 small-12">
                            <div className="input-field purple-input">
                                <DatePicker
                                    placeholderText="Choose date"
                                    todayButton={"Today"}
                                    selected={day}
                                    onChange={this.onDateChange}
                                    minDate={moment()}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="center-text">
                        <CustomButton typeBtn="submit">Submit</CustomButton>
                    </div>
                </form>
                <Alert alertMessage={error} closeModal={this.closeModal} />
            </div>
        )
    }
}