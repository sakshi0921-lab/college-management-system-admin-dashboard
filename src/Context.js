import React, { Component } from 'react';
import { rowData } from './appData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: '',
    title: '',
    info: '',
    company: '',
    price: '',
    name:'',
    age:'',
    email:'',
    address:'',
    city:'',
    updateEdit: []
  };

  getRecord = (id) => {
    const product = this.state.Alldata.find(item => item.id === id);
    return product;
  }

  onEdit = (id) => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
    const selectedRecord = tempProduct[index];
    this.setState({
      id: selectedRecord.id,
      title: selectedRecord.title,
      info: selectedRecord.info,
      company: selectedRecord.company,
      price: selectedRecord.price,
      name:selectedRecord.name,
      age:selectedRecord.title,
      phone:selectedRecord.phone,
      address:selectedRecord.address
    });
  }

  updateValue = (e, field) => {
    this.setState({ [field]: e.target.value }, () => {
      const tempArr = [this.state.id, this.state.title, this.state.info, this.state.price,this.state.name, this.state.age,this.state.phone,this.state.address];
      this.setState({
        updateEdit: tempArr
      });
    });
  }

  onSave = (id) => {
    if (id !== '') {
      const SavedRecord = this.state.Alldata;
      const index = SavedRecord.indexOf(this.getRecord(id));
      const Record = SavedRecord[index];
      Record.title = this.state.updateEdit[1];
      Record.info = this.state.updateEdit[2];
      Record.price = this.state.updateEdit[3];
      Record.company = this.state.updateEdit[4];
      Record.phone=this.state.updateEdit[5];
      Record.name=this.state.updateEdit[5];
      Record.age=this.state.updateEdit[5];


      this.setState({
        Alldata: [...this.state.Alldata],
        id: '',
        title: '',
        info: '',
        price: '',
        company: ''
      });
    } else {
      const MaxId = Math.max(...this.state.Alldata.map(item => item.id));
      const newId = MaxId + 1;
      const newRecord = {
        id: newId,
        title: this.state.updateEdit[1],
        info: this.state.updateEdit[2],
        price: this.state.updateEdit[3],
        company: this.state.updateEdit[4]
      };
      this.setState({
        Alldata: [...this.state.Alldata, newRecord],
        id: '',
        title: '',
        info: '',
        price: '',
        company: '',
        name:'',
        age:'',
        address:'',
        phone:''
      });
    }
  }

  onDelete = (id) => {
    const tempProduct = this.state.Alldata.filter(item => item.id !== id);
    this.setState({
      Alldata: tempProduct
    });
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        onEdit: this.onEdit,
        updateValue: this.updateValue,
        onSave: this.onSave,
        onDelete: this.onDelete
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };



