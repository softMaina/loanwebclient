import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loanApplications:[],
        customerInfo:[],
        Guarantors:[],
        Loans:[],
        auth:[],
        members:[],
    },
    getters:{
        APPLICATIONS: state => state.loanApplications,
        CUSTOMER: state => state.customerInfo,
        GUARANTORS: state => state.Guarantors,
        LOANS:state => state.Loans,
        AUTH:state => state.auth,
        MEMBERS:state => state.members,
    },
    mutations:{
        SET_LOANAPPLICATIONS: (state, payload) =>{
            state.loanApplications = payload
        },
        SET_CUSTOMERINFO: (state, payload) =>{
            state.customerInfo = payload
        },
        SET_GUARANTORS: (state, payload) =>{
            state.Guarantors = payload
        },
        SET_LOANS: (state, payload)=>{
            state.Loans = payload
        },
        SET_LOGIN: (state,payload)=>{
            state.auth = payload
        },
        SET_MEMBER: (state, payload)=>{
            state.members = payload
        }

        

    },
  
    actions:{
        //login
        LOGIN: async (context, payload) => {
            try {
                console.log(payload)
                await axios.post('http://localhost:3000/api/v1/login',payload).then((response)=>{
                    context.commit('SET_LOGIN',response)
                    return response;
                })
                
            } catch (error) {
                console.log(error)
                return error;
            }
         
        },  
        // eslint-disable-next-line 
        GET_LOANAPPLICATIONS: async (context, payload) =>{
            console.log('fetch started')
            let { data } = await axios.get('http://localhost:3000/api/v1/applications')
            context.commit('SET_LOANAPPLICATIONS',data)
            console.log(data)
        },

        // eslint-disable-next-line
        GET_LOANS: async (context, payload) =>{
            let { data } = await axios.get('http://localhost:3000/api/v1/loans')
            console.log(data)
            context.commit('SET_LOANS',data)
        },

        UPDATE_LOANAPPLICATION: async (context, payload) => {
             // eslint-disable-next-line 
            try {
                await axios.put('http://localhost:3000/api/v1/application/update/'+context.state.customerInfo._id, payload)
                            .then((response)=>{
                               console.log(response)
                            }).catch((error)=>{
                                console.log(error)
                            });
            } catch (error) {
                console.log(error)
            }    
        },

         // eslint-disable-next-line 
        GET_GUARANTORS: async (context, payload) => {
            let { data } = await axios.get('http://localhost:3000/api/v1/guarantors/show/'+context.state.customerInfo.userId)
            context.commit('SET_GUARANTORS',data)
           
        },

        ADD_MEMBERS: async (context, payload)=>{
            await axios.post('http://localhost:3000/api/v1/users/register',payload)
                       .then((response)=>{
                           console.log(response)
                       })
        }
    
    }


   
});
