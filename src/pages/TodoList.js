import React, { Component } from 'react';
import { Button, Input, List } from 'antd';
import { connect } from 'react-redux'
import { ADD_ITEM, CHANGE_INPUT } from '../store/actionTypes';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { inputValue, list, inputChange, addItem } = this.props
    
    return ( 
      <div style={{ margin: 10 }}>
      <div>
        <Input
          placeholder={inputValue}
          style={{ width: 300, marginRight: 10 }}
          value={inputValue}
          onChange={inputChange}
          allowClear
        />
        <Button 
          type="primary"
          onClick={addItem}
        >
          Add
        </Button>
      </div>
      <div style={{ marginTop: 10, width: 300 }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => 
            <List.Item 
              // onClick={() => handleDele(index)}
            >
              {item}
            </List.Item>
          }
        />
      </div>
    </div>
    );
  }
}

// 添加映射
const stateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: [...state.list]  // 这里必须要解构一下！！！
  }
}
const dispatchToProps = dispatch => {
  return {
    inputChange: e => {
      dispatch({
        type: CHANGE_INPUT,
        value: e.target.value
      })
    },
    addItem: () => {
      dispatch({
        type: ADD_ITEM
      })
    }
  }
}

// 连接器，连接组件 和 store
export default connect(stateToProps, dispatchToProps)(TodoList);