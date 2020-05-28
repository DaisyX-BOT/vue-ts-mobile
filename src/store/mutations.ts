import TYPES from './types';
import { MutationTree } from 'vuex';
import { Message, Option } from 'element-ui';

const mutations: MutationTree<any> = {

  // 项目列表
  [TYPES.REGION_LIST](state, preload): void {
    // regionList
    console.log(preload);
    state.regionList = preload.data;
  },
  // 详情
  [TYPES.PROJECT_LIST](state, preload): void {
    // regionList
    console.log(preload);
    state.projectList = preload.data;
  }
};
export default mutations;
