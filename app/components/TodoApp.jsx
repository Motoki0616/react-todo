import React from 'react';
import * as Redux from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export class TodoApp extends React.Component{
    onLogout(e){
        var {dispatch} = this.props;
        e.preventDefault();

        dispatch(actions.startLogout());
    }
    render(){
        return (
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
                </div>
                <div className="container">
                    <h1 className="todolist-title">Todo List</h1>
                    <TodoSearch/>
                    <TodoList/>
                    <AddTodo/>
                </div>
            </div>
        );
    }
};

export default Redux.connect()(TodoApp);
