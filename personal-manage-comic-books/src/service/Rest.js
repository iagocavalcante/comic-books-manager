import Service from './Service'
import { promise } from './helper'

/**
 * @type {Rest}
 */
export default class Rest extends Service {
  /**
   * @param {Object} options
   * @param {string} resource
   */
  constructor(options, resource) {
    super(options)
    this.resource = resource
  }

  /**
   * @param {Object} record
   */
  getAll() {
    return promise.get('/comic-book')
  }

  /**
   * @param {Object} record
   */
  create(record) {
    return promise.post('/comic-book', record)
  }

  /**
   * @param {string} id
   */
  read(id) {
    return promise([{ status: id }])
  }

  /**
   * @param {string} id
   * @param {Object} record
   */
  update(id, record) {
    return promise.put(`${this.resource}/${id}`, record)
  }

  /**
   * @param {string} id
   */
  destroy(id) {
    return promise.delete(`${this.resource}/${id}`)
  }
}