import Mock from 'mockjs' // 引入mockjs
import data from './listdata'



Mock.mock('data/index', 'get', data) // 根据数据模板生成模拟数据
