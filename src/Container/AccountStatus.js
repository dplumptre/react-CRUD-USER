import React, {useState} from 'react';
import MaterialTable from 'material-table';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Link } from 'react-router-dom';


const AccountStatus = props => {


    const [success, setsuccess] = useState(false);
    const showStatus = () =>{
        setsuccess(!success);
    }


    let result = "";
    if(success){
     result = (
            <div>
            <div className="mt-3 alert alert-success col-md-6 offset-md-3">
                <h4 className="alert-heading">Status</h4>
                        <div><span className="font-weight-bold">CHN:</span> First </div>
                        <div><span className="font-weight-bold">CSCS #:</span> Mark</div>
                        <div><span className="font-weight-bold">Status:</span>  Jacob </div>
                        <div><span className="font-weight-bold">Comment:</span> Larry</div>
                        <div><span className="font-weight-bold">Ref # :</span>Larry </div>
                        <div><span className="font-weight-bold">Response:</span>Larry</div>
              </div>
        </div>
        )
    }


    return (<div>
              <ol className="breadcrumb">
        <li className="breadcrumb-item ">
          <Link to="open-account">Check Status</Link>
        </li>
      </ol>
        <div>
            <MaterialTable
                title="Accounts"
                columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Surname', field: 'surname' },
                    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                    {
                        title: 'Birth Place',
                        field: 'birthCity',
                        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                    },
                ]}
                data={[
                    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
                ]}
                actions={[
                    {
                        icon: ViewColumn,
                        tooltip: 'View status',
                        onClick: (event, rowData) => showStatus()
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
            />
        </div>


            {result}
    </div>
    );

}

export default AccountStatus;