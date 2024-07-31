/*import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;*/
/*import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Scholar Information"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          
        />
      </Box>

    </Box>
    <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
  );
};

export default Contacts;*/
/*import React from "react";
import { Table} from 'react-bootstrap';

import { Box, Button} from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ProductConsumer } from "../../Context"; 

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (product) => (
        <ProductConsumer>
          {(value) => (
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => value.onEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="secondary"
                onClick={() => value.onDelete(product.id)}
              >
                Delete
              </Button>
              
            </>
          )}
        </ProductConsumer>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Scholar Information" subtitle="List of Contacts for Future Reference" />
      <Box m="40px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": { border: "none" },
        "& .MuiDataGrid-cell": { borderBottom: "none" },
        "& .name-column--cell": { color: colors.greenAccent[300] },
        "& .MuiDataGrid-columnHeaders": { backgroundColor: colors.blueAccent[700], borderBottom: "none" },
        "& .MuiDataGrid-virtualScroller": { backgroundColor: colors.primary[400] },
        "& .MuiDataGrid-footerContainer": { borderTop: "none", backgroundColor: colors.blueAccent[700] },
        "& .MuiCheckbox-root": { color: `${colors.greenAccent[200]} !important` },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": { color: `${colors.grey[100]} !important` },
      }}>
        {/*<ProductConsumer>
          {(value) => (
            <>
             {/* <Button variant="contained" color="primary" onClick={value.onAdd} style={{ marginBottom: 16 }}>
             <Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}
                Add New Contact
              </Button>
              <DataGrid
                rows={value.Alldata}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
              />
            </>
          )}
        </ProductConsumer>*/
        /*<ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </Box>
    </Box>
  );
};

export default Line;*/
/*import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Table, Button } from 'react-bootstrap';



export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h3>CRUD Operations</h3>
        <ProductConsumer>
          {(value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Actions</th>
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e)=>{value.updateValue(e,"title")}}/></td>
                    <td><input type="text" value={value.info} onChange={(e)=>{value.updateValue(e,"info")}}/></td>
                    <td><input type="text" value={value.price} onChange={(e)=>{value.updateValue(e,"price")}}/></td>
                    <td><input type="text" value={value.company} onChange={(e)=>{value.updateValue(e,"company")}}/></td>
                    <td><Button size="sm" onClick={()=>{value.onSave(value.id)}}>{value.id?"Save":"Add new row"}</Button></td>
                    </tr>
                
                
                  {value.Alldata.map(product => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.info}</td>
                      <td>{product.company}</td>
                      <td>
                        <Button size="sm" variant="primary" onClick={() => value.onEdit(product.id)}>
                          Edit
                        </Button>|
                        <Button size="sm" variant="danger" onClick={() => value.onDelete(product.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

*/
/*import React from "react";
import { Table, Button } from 'react-bootstrap'; // Import Bootstrap components
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ProductConsumer } from "../../Context"; 

const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "School",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (product) => (
        <ProductConsumer>
          {(value) => (
            <>
              <Button
                size="small"
                variant="primary"
                onClick={() => value.onEdit(product.id)}
              >
                Edit
              </Button>
              <Button
                size="small"
                variant="danger"
                onClick={() => value.onDelete(product.id)}
              >
                Delete
              </Button>
              
            </>
          )}
        </ProductConsumer>
      ),
    },
  ];

  return (
    <Box className="container mt-4"> {/* Use Bootstrap container class *//*}
      <Header title="Scholar Information" subtitle="List of Contacts for Future Reference" />
      <Box className="mt-4" style={{ height: '75vh' }}>
        <ProductConsumer>
          {(value) => (
            <Table responsive striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={value.name}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "name")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.age}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "age")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.info}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "info")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.company}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "company")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.price}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "price")}
                    />
                  </td><td>
                    <input
                      type="text"
                      value={value.address}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "address")}
                    />
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="success"
                      onClick={() => value.onSave(value.id)}
                    >
                      {value.id ? "Save" : "Add new row"}
                    </Button>
                  </td>
                </tr>

                {value.Alldata.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.age}</td>
                    <td>{product.phone}</td>
                    <td>{product.email}</td>
                    <td>{product.address}</td>
                    <td>{product.city}</td>
                    <td>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => value.onEdit(product.id)}
                      >
                        Edit
                      </Button>{''}
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => value.onDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </ProductConsumer>
      </Box>
    </Box>
  );
};
export default Line;*/
import React from "react";
import { Table, Button } from 'react-bootstrap';
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { ProductConsumer } from "../../Context"; 


const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="container mt-4">
      <Header title="Scholar Information" subtitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <ProductConsumer>
          {(value) => (
            <Table responsive striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>City</th>
                  <th style={{ width: '200px' }}>Actions</th> {/* Increased width */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={value.name}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "name")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.age}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "age")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.phone}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "phone")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.email}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "email")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.address}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "address")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={value.city}
                      className="form-control"
                      onChange={(e) => value.updateValue(e, "city")}
                    />
                  </td>
                  <td>
                    <Button
                      size="lg"
                      variant="success"
                      onClick={() => value.onSave(value.id)}
                    >
                      {value.id ? "Save" : "Add new row"}
                    </Button>
                  </td>
                </tr>

                {value.Alldata.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.age}</td>
                    <td>{product.phone}</td>
                    <td>{product.email}</td>
                    <td>{product.address}</td>
                    <td>{product.city}</td>
                    <td style={{ width: '200px' }}> {/* Apply the same width here */}
                      <Button
                        size="lg"
                        variant="primary"
                        className="me-2"
                        style={{ padding: '10px 20px', fontSize: '1.2rem' }}
                        onClick={() => value.onEdit(product.id)}
                      >
                        Edit
                      </Button>{''}
                      <Button
                        size="lg"
                        variant="danger"
                        onClick={() => value.onDelete(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </ProductConsumer>
      </Box>
    </Box>
  );
};

export default Line;
