/**
 * Created by Zhangzhixing on 2020-07-09 09:28
 */

const token = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}
const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super Admin',
    name: 'super Admin',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am a Editor',
    name: 'Normal Editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  },

}
module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
  },
  //get user info
  {
    url: '/vue-admin-template/user/info\.*'
  },
  {
    url: '/vue-admin-template/user/logout'
  }
]
