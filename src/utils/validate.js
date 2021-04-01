/*
 * @Author: your name
 * @Date: 2020-12-24 09:24:21
 * @LastEditTime: 2021-04-01 16:15:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /yh-vue-template/src/utils/validate.js
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
