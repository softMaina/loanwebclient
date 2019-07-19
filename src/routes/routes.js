
import index from '../components/Index.vue';
import loans from '../components/Loans/LoansComponent.vue';
import login from '../components/Auth/LoginComponent.vue';
import members from '../components/Members/MembersComponent.vue';
import addmembers from '../components/Members/AddMemberComponent.vue';

const routes = [
    {path:'/',component: index},
    {path:'/loans',component:loans},
    {path:'/login',component:login},
    {path:'/members',component:members},
    {path:'/addmembers',component:addmembers}
];

export default routes;