/* eslint-disable */
<template>
    <div class="main_content ">
        <nav class=" ">
            <div class="nav_container">
                <div class="dashboard">Dashboard</div>
                <ul class="menu_list">
                    <li class="active">
                        <router-link to="/">Feed</router-link>
                    </li>
                    <li>
                        <router-link to="/edit">Edit</router-link>
                    </li>
                </ul>
                <p>{{search}} </p>
                <div class="input-group mb-3">

                    <span class="input-group-text" id="basic-addon1" @click="$emit('handlefetchFilter',search)"><i
                            class="fa fa-search"></i>
                    </span>
                    <input type="text" v-model="search" class="form-control input_text" placeholder="Username"
                        aria-label="Username" aria-describedby="basic-addon1">
                </div>

            </div>
        </nav>

    </div>
</template>

<script>

export default {
    name:'NavBarC',
    props: {
        // search: {
        //     type: String,
        //     default() {
        //         return 'My name'
        //     }
        // },
        handlefetchFilter: {
            type: Function,
            default() {
                return {}
            }
        }
       
    },
    data(){
        return{
            search: ''
        }
    }


}
</script>