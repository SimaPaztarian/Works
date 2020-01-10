import React, { Component } from "react";
import axios from "axios";

import { Button } from "antd";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      list: []
    };
  }
  componentDidMount() {
    let body = {
      count: 10,
      index: 0
    };

    axios
      .get("https://5e111b0f83440f0014d83073.mockapi.io/api/list", body)
      .then(response => {
        const list = response.data.slice(0, 8);
        const updatedList = list.map(item => {
          return {
            ...item
          };
        });
        this.setState({ list: updatedList });

        //   console.log(response);
      });
  }

  deletePostHandler = id => {
    axios
      .delete("https://5e111b0f83440f0014d83073.mockapi.io/api/list/" + id)
      .then(response => {
        const newList = this.state.list.filter(item => item.id !== id);
        this.setState({
          list: newList
        });
        console.log(response);
      });
  };

  
   

  render() {
    return (
      <div>
        <div className="container">
          <table className="table" style={{ boxShadow: " 1px 1px #888888" }}>
            <thead>
              <tr>
                <th>شماره</th>
                <th>عنوان</th>
                <th>عکس</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {this.state.list.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <img
                        style={{ width: "5em", hight: "5em" }}
                        src={item.avatar}
                        alt="random pic"
                      />
                    </td>
                    <td>
                      <Button
                        onClick={() => this.deletePostHandler(item.id)}
                        style={{ marginLeft: "1rem" }}
                        type="danger"
                      >
                        حذف
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
