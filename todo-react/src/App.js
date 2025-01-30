// // App.js File
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import ListGroup from "react-bootstrap/ListGroup";

// class App extends Component {
//     constructor(props) {
//         super(props);

//         // Setting up state
//         this.state = {
//             userInput: "",
//             list: [],
//         };
//     }

//     // Set a user input value
//     updateInput(value) {
//         this.setState({
//             userInput: value,
//         });
//     }

//     // Add item if user input in not empty
//     addItem() {
//         if (this.state.userInput !== "") {
//             const userInput = {
//                 // Add a random id which is used to delete
//                 id: Math.random(),

//                 // Add a user value to list
//                 value: this.state.userInput,
//             };

//             // Update list
//             const list = [...this.state.list];
//             list.push(userInput);

//             // reset state
//             this.setState({
//                 list,
//                 userInput: "",
//             });
//         }
//     }

//     // Function to delete item from list use id to delete
//     deleteItem(key) {
//         const list = [...this.state.list];

//         // Filter values and leave value which we need to delete
//         const updateList = list.filter((item) => item.id !== key);

//         // Update list in state
//         this.setState({
//             list: updateList,
//         });
//     }

//     editItem = (index) => {
//       const todos = [...this.state.list];
//       const editedTodo = prompt('Edit the todo:');
//       if (editedTodo !== null && editedTodo.trim() !== '') {
//         let updatedTodos = [...todos]
//         updatedTodos[index].value= editedTodo
//         this.setState({
//           list: updatedTodos,
//       });
//       }
//     }

//     render() {
//         return (
//             <Container>
//                 <Row
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         fontSize: "3rem",
//                         fontWeight: "bolder",
//                     }}
//                 >
//                     TODO LIST
//                 </Row>

//                 <hr />
//                 <Row>
//                     <Col md={{ span: 5, offset: 4 }}>
//                         <InputGroup className="mb-3">
//                             <FormControl
//                                 placeholder="add item . . . "
//                                 size="lg"
//                                 value={this.state.userInput}
//                                 onChange={(item) =>
//                                     this.updateInput(item.target.value)
//                                 }
//                                 aria-label="add something"
//                                 aria-describedby="basic-addon2"
//                             />
//                             <InputGroup>
//                                 <Button
//                                     variant="dark"
//                                     className="mt-2"
//                                     onClick={() => this.addItem()}
//                                 >
//                                     ADD
//                                 </Button>
//                             </InputGroup>
//                         </InputGroup>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col md={{ span: 5, offset: 4 }}>
//                         <ListGroup>
//                             {/* map over and print items */}
//                             {this.state.list.map((item, index) => {
//                                 return (
//                                   <div key = {index} > 
//                                     <ListGroup.Item
//                                         variant="dark"
//                                         action
//                                         style={{display:"flex",
//                                                 justifyContent:'space-between'
//                                       }}
//                                     >
//                                         {item.value}
//                                         <span>
//                                         <Button style={{marginRight:"10px"}}
//                                         variant = "light"
//                                         onClick={() => this.deleteItem(item.id)}>
//                                           Delete
//                                         </Button>
//                                         <Button variant = "light"
//                                         onClick={() => this.editItem(index)}>
//                                           Edit
//                                         </Button>
//                                         </span>
//                                     </ListGroup.Item>
//                                   </div>
//                                 );
//                             })}
//                         </ListGroup>
//                     </Col>
//                 </Row>
//             </Container>
//         );
//     }
// }

// export default App;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class App extends Component {
    constructor(props) {
        super(props);

        // Setting up state
        this.state = {
            expenseName: "",
            expenseAmount: "",
            expenses: [],
            editingIndex: null, // This will store the index of the expense being edited
        };
    }

    // Update expense name or amount
    handleInputChange(event) {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    // Add expense
    addExpense = () => {
        const { expenseName, expenseAmount, expenses } = this.state;

        if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        const newExpense = {
            name: expenseName,
            amount: parseFloat(expenseAmount),
        };

        this.setState({
            expenses: [...expenses, newExpense],
            expenseName: "",
            expenseAmount: "",
        });
    };

    // Update expense details in the input fields
    updateExpense(index) {
        const { expenses } = this.state;
        const expenseToUpdate = expenses[index];

        // Set the expense details into the form fields for editing
        this.setState({
            expenseName: expenseToUpdate.name,
            expenseAmount: expenseToUpdate.amount.toString(),
            editingIndex: index,  // store the index for updating later
        });
    }

    // Save updated expense
    saveUpdatedExpense = () => {
        const { expenseName, expenseAmount, expenses, editingIndex } = this.state;

        if (expenseName === "" || isNaN(expenseAmount) || expenseAmount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        const updatedExpenses = [...expenses];
        updatedExpenses[editingIndex] = {
            name: expenseName,
            amount: parseFloat(expenseAmount),
        };

        this.setState({
            expenses: updatedExpenses,
            expenseName: "",
            expenseAmount: "",
            editingIndex: null, // reset editing index
        });
    };

    // Delete expense
    deleteExpense(index) {
        const expenses = [...this.state.expenses];
        expenses.splice(index, 1);
        this.setState({ expenses });
    }

    render() {
        const { expenses, expenseName, expenseAmount } = this.state;
        const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

        return (
            <Container>
                <Row className="text-center mt-5">
                    <h1>Expense List</h1>
                </Row>

                <Row className="mt-4">
                    <Col md={{ span: 6, offset: 3 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                id="expenseName"
                                placeholder="Expense Name"
                                value={expenseName}
                                onChange={(e) => this.handleInputChange(e)}
                                aria-label="Expense Name"
                            />
                            <FormControl
                                id="expenseAmount"
                                type="number"
                                placeholder="Amount"
                                value={expenseAmount}
                                onChange={(e) => this.handleInputChange(e)}
                                aria-label="Amount"
                            />
                            <Button
                                variant={this.state.editingIndex !== null ? "primary" : "success"}
                                className="ml-2"
                                onClick={this.state.editingIndex !== null ? this.saveUpdatedExpense : this.addExpense}
                            >
                                {this.state.editingIndex !== null ? "Save" : "Add"}
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="expense-table">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Expense Name</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expenses.map((expense, index) => (
                                        <tr key={index}>
                                            <td>{expense.name}</td>
                                            <td>Rs {expense.amount}</td>
                                            <td>
                                                <Button
                                                    variant="success"
                                                    onClick={() => this.updateExpense(index)}
                                                >
                                                    Update
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={() => this.deleteExpense(index)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md={{ span: 8, offset: 2 }} className="text-right">
                        <div className="total-amount">
                            <strong>Total:</strong> Rs {totalAmount.toFixed(2)}
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
