import React,{useState} from 'react';
import Todo from '../components/Todo';
const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
    ])
    const [numero, setNumero] = useState('')
    const [palabra, setPalabra] = useState('')
    
    //const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleChange = e => {
        console.log(e)
        setPalabra(e.target.value)
    }
    const handleChangeN = e => setNumero(e.target.value);
    const handleClick = e => {

        switch(numero){
            case '':
                alert('Entro al switch')
                return
        }

        switch(palabra){
            case '':
                alert('Entro al switch palabra')
                return
        }

      
        if(numero.trim() === '' || palabra.trim() === ''){
            alert('Los campo no puede estar vacio')
            return
        }
        if(numero < 1){
            alert('La cantidad debe ser mayor a cero')
            return
        }
        
        setTodos([...todos, {todo: numero + " - " + palabra}])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar tarea</label>
            <input type="text" name="todo" onChange={handleChange} />
            <label>Cantidad</label>
            <input type="number" name="num" onChange={handleChangeN} />
            <button onClick={handleClick}>agregar</button>
        </form>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
            ))
        }
        </>
    )
}
export default Form