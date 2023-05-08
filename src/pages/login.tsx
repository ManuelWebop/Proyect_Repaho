import Back from './components/back'
import Form from './components/form'

export default function Login() {
    return (
        
            <div className="bg-cover object-cover flex max-sm:flex-col h-screen " id="login">
                <Back/>
                <Form/>
            </div>
    )
}