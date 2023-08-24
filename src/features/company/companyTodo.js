import { createSlice } from '@reduxjs/toolkit'
import test from '../../employees.json'

const CompanyTodo = createSlice({
    name: 'CompanyTodo',
    initialState: {
        todos: test
    }
})

export default CompanyTodo.reducer
