import { ActionTree } from 'vuex';
import TYPES from './types';
import axios from 'axios';

const actions: ActionTree<any, any> = {

  // 获取项目列表

  async GetRegionList({state, commit}, params: {[key: string]: any}) {
    axios.post(params.url, ...params.data).then((res: {[key: string]: any}) => {
      commit(TYPES.REGION_LIST, res);
    });
  },
  // 获取详情
  async GetProjectList({state, commit}, params: {[key: string]: any}) {
    axios.post(params.url, params.data).then((res: {[key: string]: any}) => {
      commit(TYPES.PROJECT_LIST, res);
    });
  }
};

export default actions;
