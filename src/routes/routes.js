
import index from '../components/Index.vue';
import loans from '../components/Loans/LoansComponent.vue';
import login from '../components/Auth/LoginComponent.vue';
import members from '../components/Members/MembersComponent.vue';
import addmembers from '../components/Members/AddMemberComponent.vue';
import member from '../components/Members/MemberComponent.vue';
import staff from '../components/Staff/StaffComponent.vue';
import land from '../components/Land/LandComponent.vue';

const routes = [
    {path:'/',component: index},
    {path:'/loans',component:loans},
    {path:'/login',component:login},
    {path:'/members',component:members},
    {path:'/addmembers',component:addmembers},
    {path:'/member',component:member},
    {path:'/staff',component:staff},
    {path:'/land',component:land}
];

export default routes;