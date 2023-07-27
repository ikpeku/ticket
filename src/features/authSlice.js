import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
        return authService.register(user)
    } catch (error) {
        const message = (
            error.message || error.toString()
        )
        thunkAPI.rejectWithValue(message)
    }
  },
)

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      return authService.login(user)
      
    } catch (error) {
      const message = (
        error.message || error.toString()
    )
      thunkAPI.rejectWithValue(message)
      
    }
  },
)

const userIN = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userIN ? userIN : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  },
  reducers: {
    reset: (state) => {
      state.message = ""
      state.isSuccess = false
      state.isLoading = false
      state.isError = false
    }
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerThunk.pending, (state) => {
      state.isLoading = true
    })
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.isSuccess  = true
    })
    .addCase(registerThunk.rejected , (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message =  action.payload
    })
 
    .addCase(loginThunk.pending, (state) => {
      state.isLoading = true
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.user = action.payload
      state.isSuccess  = true
    })
    .addCase(loginThunk.rejected , (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message =  action.payload
    })
    
  },
})

export const authSliceActions = authSlice.actions
export default authSlice.reducer
