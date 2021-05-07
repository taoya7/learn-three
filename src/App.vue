<template>
    <el-row>
        <el-col :span="6" :xs="24">
            <div id="nav">
                <ul>
                    <li v-for="nav in navs">
                        <router-link :to="nav.path">{{ nav.name }}</router-link>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="18" :xs="24">
            <div id="main">
                <router-view/>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import {routes} from './router/index';
import { reactive, onMounted } from 'vue';
import {
    REVISION
} from 'three';
export default {
    name: 'App',
    data(){
        return {
            navs: [],
        }
    },
    mounted() {
        this.navs = routes;
        console.log('%c Three 版本号: '+REVISION,  'color: green; padding:20px;');
    }
}
</script>
