import { createSlice } from '@reduxjs/toolkit';

export const User = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user:{},
    loading: false,
    success: false,
    postUserloading: false,
    postUserSuccess: false,
    editUserSuccess: false,
    error: "",
  },
  reducers: {
    getUsers: state => {},
    getUser: () => {},
    postUser: () => {},
    editUser: () => {},
    deleteUser: () => {},
    loading: state => {
      return {
        ...state,
        loading: true
      }
    },
    
    getSingleUser: (state,action)=> {
      const id = action.payload
      console.log(id);
      let newUser = [...state.users];
     // const nwsr = newUser.find( (user) => user.id === id);
      //console.log(state.users);
      return {
         ...state,
         user: newUser.find( (user) => user.id === id),
      }
    },
    postUserloading: state => {
      return {
        ...state,
        postUserloading: true
      }
    },
    success: (state, action) => {
      const updateduser = action.payload
      return {
            ...state,
            loading:false,
            users:updateduser
      }
    },
    deleteUserSuccess: (state,action) => {
      const user_id = action.payload
      return {
        ...state,
        users: state.users.filter(user=> user.id !== user_id),
  }
    },
    getUserSuccess : (state,action) => {
      const user = action.payload
      console.log(user);
      // let newUsers = [...state.users];
      // const Index = newUsers.findIndex(i =>i.id === user.id);
          // newUsers[Index]  = user;
          const oneuser ={
            email :user.email,
            name: user.name,
            phone:user
          }
      return {
        ...state,
        user: oneuser,
  }
    },
    editUserSuccess : (state,action) => {
      const user = action.payload
      let newUsers = [...state.users];
      const Index = newUsers.findIndex(i =>i.id === user.id);
          newUsers[Index]  = user;
      return {
        ...state,
        users: newUsers,
  }
    },
    postUserSuccess: (state,action) => {
      const newuser = action.payload
      return {
            ...state,
            postUserloading:false,
            success: false,
            postUserSuccess:true,
            //users: state.users.concat(newuser),
            users: [newuser,...state.users], // push it to the front
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { getUsers,getUser,getUserSuccess, editUser,editUserSuccess,success,loading,postUser,postUserSuccess,postUserloading,deleteUser,deleteUserSuccess,getSingleUser} = User.actions

export default User.reducer