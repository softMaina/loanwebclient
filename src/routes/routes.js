
import index from '../components/Index.vue';
import loans from '../components/Loans/LoansComponent.vue';
import login from '../components/Auth/LoginComponent.vue';
import members from '../components/Members/MembersComponent.vue';
import addmembers from '../components/Members/AddMemberComponent.vue';
import member from '../components/Members/MemberComponent.vue';
import staff from '../components/Staff/StaffComponent.vue';
import land from '../components/Land/LandComponent.vue';
import addLand from '../components/Land/AddLandComponent.vue';
import PageNotFound from '../shared/PageNotFoundComponent.vue';
import Payment from '../components/Payments/PaymentComponent.vue';

import uploads from '../shared/uploadComponent.vue';

const routes = [
    {path:'*',component:PageNotFound},
    {path:'/',component: index,meta:{ requiresAuth: true }},
    {path:'/loans',component:loans,meta:{ requiresAuth: true }},
    {path:'/login',component:login},
    {path:'/members',component:members,meta:{ requiresAuth: true }},
    {path:'/addmembers',component:addmembers,meta:{ requiresAuth: true }},
    {path:'/member',name:'member',component:member,meta:{ requiresAuth: true }},
    {path:'/staff',component:staff,meta:{ requiresAuth: true }},
    {path:'/land',component:land,meta:{ requiresAuth: true }},
    {path: '/uploads', component: uploads,meta:{ requiresAuth: true }},
    {path:'/addLand',component:addLand,meta:{ requiresAuth: true }},
    {path:'/userpayments',name:'user_payments',component:Payment, meta:{ requiresAuth:true }}
];


export default routes;