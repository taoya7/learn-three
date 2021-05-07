<template>
    <el-card>
        <h3 class="card-title">第一个3D</h3>
        <div id="render01"></div>
    </el-card>

    <el-card>
        <h3 class="card-title">旋转的球</h3>
        <div id="render02"></div>
    </el-card>
</template>

<script lang="ts">
    import FirstExample from './01';
    import SecondExample from './02';
    import { onMounted, reactive, onUnmounted } from 'vue';
    export default {
        name: "index",
        setup(){
            let obj2 = reactive(null);
            onMounted(()=>{
                new FirstExample('#render01', 600, 400);
                obj2 = new SecondExample('#render02', 600, 400);
            });
            onUnmounted(()=>{

            })
        }
    }
</script>

<style scoped>

</style>
