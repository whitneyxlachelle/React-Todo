import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item:""
        };
    }

    handleChanges = event => {
        this.setState({ item: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({ item: "" });
    }
    render() {
        //console.log(this.state.item);
        return (
            <form 
            onSubmit={this.submitHandler}>
                <input 
                type="text" 
                name="item" 
                onChange={this.handleChanges} />
                <button>New Task</button>
            </form>
        )
    }
}
export default TodoForm;