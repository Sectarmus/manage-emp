import {Form,Button} from "react-bootstrap"
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext,useState } from "react";

const AddForm = ()=>{

    const {addEmployee} = useContext(EmployeeContext);

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault();
        addEmployee(name,email,address,phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                type="text"
                placeholder="Name *"
                value={name}
                onChange={e =>setName(e.target.value)}
                required 
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                type="email"
                value={email}
                onChange={e =>setEmail(e.target.value)}
                placeholder="Email *"
                required 
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                as="textarea"
                value={address}
                onChange={e =>setAddress(e.target.value)}
                placeholder="Adress *"
                rows={3} 
                />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                type="text"
                value={phone}
                onChange={e =>setPhone(e.target.value)}
                placeholder="Phone"
                />
            </Form.Group>

            <Button variant="success" type="submit" block>Add new employee</Button>
        </Form>
    )
}

export default AddForm;