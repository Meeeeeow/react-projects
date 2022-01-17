import React,{Component} from "react";

class Form extends Component{
    constructor(){
        super();

        this.state ={
            title : 'hello',
            text : 'This is  a text area!',
            option: 'React',
            writer: 'Mosh',
            isChecked : true
        }
        // this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e)=>{
        if(e.target.name === 'title')
        {
            console.log(e.target.value);
            this.setState({title : e.target.value});
        }else if(e.target.name === 'writer'){
            console.log(e.target.value);
            this.setState({writer : e.target.value});
        }else if(e.target.type === 'textarea'){
            console.log(e.target.value);
            this.setState({text : e.target.value});
        }else if(e.target.type === 'select-one'){
            console.log(e.target.type);
            this.setState({option : e.target.value});
        }else if(e.target.type === "checkbox"){
            console.log(e.target.type);
            this.setState({isChecked : e.target.checked});
        }
    }

    submitHandle = (e)=>{
        e.preventDefault();
        const {title,text,option,writer,isChecked} = this.state;
        console.log(title,text,option,writer,isChecked);
    }
    render(){
        const {title,text,option,writer,isChecked} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandle}>
                    <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    name="title"
                    onChange={this.handleClick} />
                    <br/>
                    <br/>
                    <input
                    type="text"
                    name="writer"
                    placeholder="enter writer"
                    value={writer}
                    onChange={this.handleClick}/>
                    <br/>
                    <br/>
                    <textarea 
                    name="text" 
                    value={text}
                    placeholder="Enter about yourself"
                    onChange={this.handleClick} />
                    <br/>
                    <br/>
                    <select 
                    value={option}
                    onChange={this.handleClick}
                    >
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="Javascript">Javascript</option>
                        <option value="React">React</option>
                    </select>
                    <br/>
                    <br/>
                    <input 
                    type="checkbox"
                    checked={isChecked}
                    onChange={this.handleClick}
                    />
                    <br/>
                    <br/>
                    <input
                    type="submit"
                    value="submit"/>
                </form>
            </div>
        )
    }
}
export default Form;