import './App.css';

function App() {
    var data =[
        {
            id: 101,
            name: 'Abacavir',
            quantity: 25,
            price: 150,
            expiry: 2022,
            status: true
        },
        {
            id: 102,
            name: 'Eltrombopag',
            quantity: 90,
            price: 550,
            expiry: 2021,
            status: true
        },
        {
            id: 103,
            name: 'Meloxicam',
            quantity: 85,
            price: 450,
            expiry: 2025,
            status: false
        },
        {
            id: 104,
            name: 'Allopurinol',
            quantity: 50,
            price: 600,
            expiry: 2023,
            status: true
        },
        {
            id: 105,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        },
        {
            id: 106,
            name: 'Phenytoin',
            quantity: 63,
            price: 250,
            expiry: 2021,
            status: false
        }
    ];
    // return(
    // <table align="center"cellPadding="10" cellSpacing="0" border="1" width="600">
    //     <tr align="center"class="tablehander">
    //         <td>id</td>
    //         <td>name</td>
    //         <td>quantity</td>
    //         <td>price</td>
    //         <td>expiry</td>
    //         <td>status</td>
    //     </tr>
    //     {
    //         data.map((d) =>
    //             <tr align="center">
    //                 <td>
    //                     {d.id}
    //                 </td>
    //                 <td>
    //                     {d.name}
    //                 </td>
    //                 <td>
    //                     {d.quantity}
    //                 </td>
    //                 <td>
    //                     {d.price}
    //                 </td>
    //                 <td>
    //                     {d.expiry}
    //                 </td>
    //                 <td>
    //                     {d.status.toString()}
    //                 </td>
    //             </tr>
    //         )
    //     }
    // </table>
    // )
    return (
        <div className="card">
            {
                
                data.map((d)=> {
                    return(
                        
                        <div className="card-item">
                            <h4>id : {d.id}</h4>
                            <h4>name : {d.name}</h4>
                            <h4>quantity : {d.quantity}</h4>
                            <h4>price : {d.price}</h4>
                            <h4>expiry : {d.expiry}</h4>
                            <h4>status : {d.status.toString()}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default App;
