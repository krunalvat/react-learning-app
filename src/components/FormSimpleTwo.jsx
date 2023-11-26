import React,{useState} from "react";

function FormSimpleTwo () {

    const [fullName,setFullName] = useState( {
        name : '',
        email : '',
        phone: '',
    });
    
    const setInputData = (event)=> {

        const { value,name} = event.target;

        setFullName ( (previousValue) => {
            return{
                ...previousValue,
                [name]: value,
            }
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        alert('Submit');
    }
    

    return(
        <>
            <div className="text-center">
                <h1>{ fullName.name } { fullName.email }  { fullName.phone }</h1>
                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label>Email address:-</label>
                        <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={setInputData} />
                    </div>
                    <div className="form-group mt-2">
                        <label>Name:-</label>
                        <input type="text" className="form-control" placeholder="Enter Name" name="name" onChange={setInputData}  />
                    </div>
                    <div className="form-group mt-2">
                        <label>Phone Number:-</label>
                        <input type="number"  min="0" className="form-control" placeholder="Enter Phone Number" name="phone" onChange={setInputData}  />
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        </>
    );
}

export default FormSimpleTwo;