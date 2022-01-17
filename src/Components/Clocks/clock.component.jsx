import React , {Component} from 'react';
import Button from '../Button/button.component';
class Clock extends Component{
    state={
            date : new Date(),
            locale : 'bn-BD'
        }
    
    componentDidMount(){
        this.timer = setInterval(()=>{
           this.tick();
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    tick(){
        this.setState({date:new Date()})
    }
    handleChange =  (locale) =>{
        console.log('The button was clicked!');
        this.setState({locale : locale});
    }
    render(){
        const {locale} = this.state;
        let button;
        if(locale === 'bn-BD'){
            button = (<Button
                handleClick ={this.handleChange}
                locale='en-US'
                >
                    Click Me!
            </Button>);
        }else{
            button = (<Button
                handleClick ={this.handleChange}
                locale='bn-BD'
                >
                    Click Me!
            </Button>);
        }
        return(
            

            <div>
                <h1 className="heading">
                    <span className="text">{this.props.children} {this.state.date.toLocaleTimeString(locale)}</span>
                </h1>
               {locale === 'bn-BD' ? 
               <Button
                handleClick ={this.handleChange}
                locale='en-US'
                show ={false}
                >
                    Click Me to see time in English!
            </Button> :
            <Button
            handleClick ={this.handleChange}
            locale='bn-BD'
            show
            >
                Click Me to see time in Bangla!
            </Button>}
            </div>
        )
    }
}

export default Clock;