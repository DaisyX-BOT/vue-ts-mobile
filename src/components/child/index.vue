<template>
    <div class="content">
  
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Router from '../../router';
import { Prop, Watch } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
]);

@Component({
    name: 'Index',
    components: {
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    background: #F0F0F0;

}

</style>
<style>

</style>

