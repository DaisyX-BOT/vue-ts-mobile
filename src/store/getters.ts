import {GetterTree} from 'vuex';

const getters: GetterTree<any, any> = {
    saveIndexParams: (state) => state.saveIndexParams, // 跳转时首页的参数保存
    regionList: (state) => state.regionList, // top3数据
    projectList: (state) => state.projectList // bottom6数据

};

export default getters;
