import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

Vue.prototype.hostname = 'https://loanserver.herokuapp.com'

const base_url ='https://loanserver.herokuapp.com';


export const store = new Vuex.Store({
    state:{
        loanApplications:[],
        customerInfo:[],
        Guarantors:[],
        Loans:[],
        auth:[],
        members:[],
        staff:[],
        land:[],
        token: localStorage.getItem('token') || '',
    },
    getters:{
        APPLICATIONS: state => state.loanApplications,
        CUSTOMER: state => state.customerInfo,
        GUARANTORS: state => state.Guarantors,
        LOANS:state => state.Loans,
        AUTH:state => state.auth,
        MEMBERS:state => state.members,
        STAFF:state=> state.staff,
        LAND:state => state.land,
        TOKEN:state => state.token,
        isLoggedIn: state => !!state.token,
        

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
        SET_MEMBERS: (state, payload)=>{
            state.members = payload
        },
        SET_STAFF: (state,payload)=>{
            state.staff = payload
        },
        SET_LANDS: (state, payload)=>{
            state.land = payload
        }

    },
  
    actions:{
        //login
        LOGIN: async (context, payload) => {
            try {
                console.log(payload)
                await axios.post(base_url + '/api/v1/login',payload).then((response)=>{
                    context.commit('SET_LOGIN',response)
                    localStorage.setItem('token',response.data.token)
                    localStorage.setItem('user',response.data.user)
                    console.log(response)
                    return response;
                })
                
            } catch (error) {
                console.log(error)
                return error;
            }
         
        },
        //eslint-disable-next-line
        LOGOUT: async(context, payload)=>{
            localStorage.removeItem('token')
            localStorage.removeItem('auth')
        },  
        // eslint-disable-next-line 
        GET_LOANAPPLICATIONS: async (context, payload) =>{
            console.log('fetch started')
            let { data } = await axios.get(base_url + '/api/v1/applications')
            context.commit('SET_LOANAPPLICATIONS',data)
            console.log(data)
        },

        // eslint-disable-next-line
        GET_LOANS: async (context, payload) =>{
            let { data } = await axios.get(base_url + '/api/v1/loans')
            console.log(data)
            context.commit('SET_LOANS',data);
        },

        UPDATE_LOANAPPLICATION: async (context, payload) => {
             // eslint-disable-next-line 
            try {
                await axios.put(base_url + '/api/v1/application/update/'+context.state.customerInfo._id, payload)
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
            let { data } = await axios.get(base_url + '/api/v1/guarantors/show/'+context.state.customerInfo.userId)
            context.commit('SET_GUARANTORS',data)
           
        },

        // eslint-disable-next-line
        GET_MEMBERS: async (context, payload)=>{
            let {data} = await axios.get(base_url + '/api/v1/users')
            context.commit('SET_MEMBERS',data)
        },
        
        // eslint-disable-next-line
        GET_STAFF: async (context, payload)=>{
            let {data} = await axios.get(base_url + '/api/v1/staff')
            context.commit('SET_STAFF',data)
        },
        // eslint-disable-next-line
        GET_LANDS: async (context, payload) =>{
            let {data} = await axios.get(base_url + '/api/v1/land')
            console.log(data)
            context.commit('SET_LANDS',data)
        }
    
    }


   
});
