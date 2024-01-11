import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase'

import { getDatabase, onValue, ref, set } from "firebase/database";
import { uid } from "uid";
import { onAuthStateChanged } from 'firebase/auth';
const User = () => {
    // Get auth
    const [authUser, setAuthUser] = useState("");

    // useEffect(() => {
    //     console.log('get auth')
    //   const listen = onAuthStateChanged(auth, (user) => {
    //       if (user){
    //           setAuthUser(user);
    //       }
    //       else{
    //           setAuthUser(null);
    //       }
    //   });
    //   return () => {
    //       listen();
    //   }
    // }, []);


    const [meaning, setMeaning] = useState("");
    const [vocab, setVocab] = useState("");

    const handleChangeVocab = (e) => {
        setVocab(e.target.value);
    }

    const handleChangeMeaning = (e) => {
        setMeaning(e.target.value);
    }

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    // read 
    useEffect (() => {
        console.log('get auth')
        var myUser = '';
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                console.log('get auth success')
                
                setAuthUser(user);
                myUser = user;

                console.log('get data');
                console.log(user.uid)
                onValue(ref(db, `${user.uid}`), (snapshot) => {
                    const data = snapshot.val();
                    if (data !== null){
                        Object.values(data).map((todo) => {
                            console.log('data:')
                            console.log(todo)
                            // setTodos((oldArray) => [...oldArray, todo]);
                            setTodos(() => [todo]);
                        });
                    }
                });
            }
            else{
                setAuthUser(null);
            }
        });
    }, []);
    //write vocab
    const write_vocab_to_database = () => {
        const uuid = uid();
        console.log(authUser)
        console.log(vocab);
        console.log(meaning);
        const db = getDatabase();
        
        set (ref(db, `${authUser.uid}/${uuid}`), {
            vocab,
            meaning,
            uuid
        });

        // clear on screen after submit
        setVocab("");
        setMeaning("");
        setTodos(null);
    }

  
    return (
 
    <div>
        <h1> User</h1> 
        <input value={vocab} placeholder='enter vocab' onChange={handleChangeVocab}></input>
        <input value={meaning} placeholder='enter meaning' onChange={handleChangeMeaning}></input>
        
        <button onClick={write_vocab_to_database}>submit</button>
        {todos.map((todo) => (
        <>
            <h1> {todo.vocab} mean: {todo.meaning}</h1>
        </>      
        ))}  
    </div>
    
  )
}

export default User