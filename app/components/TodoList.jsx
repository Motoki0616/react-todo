var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export class TodoList extends React.Component{
    render(){
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            var fileteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if(fileteredTodos.length === 0){
                return (
                    <p className="container__message">Nothing To Do</p>
                );
            }
            return fileteredTodos.map((todo)=>{
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            })
        };
        return(
            <div>
                {renderTodos()}
            </div>
        )
    }
};

export default connect(
    (state)=>{
        return state;
    }
)(TodoList);
