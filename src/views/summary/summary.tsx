import React from "react";
import { Dropdown, DropdownProps, Grid, Button } from "semantic-ui-react";
import moment from 'moment';
import { SingleDatePicker } from "react-dates";

class SummaryPage extends React.Component {

    state = {
        meal: "",
        zone: "",
        date: moment(),
        focused: false
    }

    generateReport = () => {
        console.log(this.state.meal)
    }

    render() {
        return (
            <div>
                <p className="lead">
                    Select the below options to generate an excel report of the total quantity bought of each item,
                    and the price/margins breakdown.
                </p>
                <i>Note that there will be no responses if there are no transactions for the given settings.</i>
                <Grid centered>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            <Dropdown
                                style={{"marginLeft": "5px"}}
                                fluid
                                placeholder='Select Meal'
                                selection
                                value={this.state.meal}
                                options={mealOptions}
                                onChange={(e, data)=>this.setState({meal:data.value})}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown
                                style={{"marginLeft": "5px"}}
                                fluid
                                placeholder='Select Zone'
                                selection
                                value={this.state.zone}
                                options={zoneOptions}
                                onChange={(e, data)=>this.setState({zone:data.value})}/>
                        </Grid.Column>
                        <Grid.Column>
                            <SingleDatePicker
                                id="2"
                                isOutsideRange={() => false}
                                date={this.state.date}
                                onDateChange={date=>this.setState({date: date})}
                                focused={this.state.focused}
                                onFocusChange={({focused}) => this.setState({focused})}
                                numberOfMonths={1}
                                displayFormat="DD/MM/YYYY"
                                small={true}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        <Grid.Column width={6}>
                            <Button
                                fluid
                                disabled={this.state.meal.length===0 || this.state.zone.length===0}
                                as="a"
                                href={`https://ouc6l5ennh.execute-api.ap-southeast-1.amazonaws.com/dev/generate_report?zone=${this.state.zone}&date=${this.state.date.format("DDMMYYYY")}&meal=${this.state.meal}&datetime=${Math.floor(Date.now() / 1000)}`}>
                            Generate
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                    
                    
                
            </div>
        )
    }
}

let zoneOptions = [
    {
        key: 'Cinnamon',
        text: 'Cinnamon',
        value: 'Cinnamon'
    },
    {
        key: 'Tembusu',
        text: 'Tembusu',
        value: 'Tembusu'
    }
]

const mealOptions = [
    {
      key: 'lunch',
      text: 'Lunch',
      value: 'lunch'
    },
    {
      key: 'dinner',
      text: 'Dinner',
      value: 'dinner'
    }
]

export default SummaryPage