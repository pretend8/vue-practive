/**
 * Created by Zhangzhixing on 2020-07-01 22:33
 */

/**
 * @description: 校验是否为外链
 * @param {String} path
 * @return {Boolean} true/false
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description: 校验用户名
 * @param {String} string
 * @return {Boolean} true/false
 */
export function validUsername(string) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(string.trim()) >= 0
}




