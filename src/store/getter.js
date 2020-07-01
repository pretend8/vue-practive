/**

 * @author zzx

 * @date 2020-06-27 15:34

 */
const getter = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.app.token,
  avatar: state => state.app.avatar,
  name: state => state.app.name
}
export default getter
