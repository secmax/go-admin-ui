import request from '@/utils/request'

export function getMetaDataList(query) {
  return request({
    url: '/api/v1/metaData',
    method: 'get',
    params: query
  })
}

// 查询部门详细
export function getMetaData(metaDataId) {
  return request({
    url: '/api/v1/metaData/' + metaDataId,
    method: 'get'
  })
}

// 查询部门下拉树结构
export function treeselect() {
  return request({
    url: '/api/v1/metaDataTree',
    method: 'get'
  })
}

// 根据角色ID查询部门树结构
export function roleMetaDataTreeselect(roleId) {
  return request({
    url: '/api/v1/roleMetaDataTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增部门
export function addMetaData(data) {
  return request({
    url: '/api/v1/metaData',
    method: 'post',
    data: data
  })
}

// 修改部门
export function updateMetaData(data, id) {
  return request({
    url: '/api/v1/metaData/' + id,
    method: 'put',
    data: data
  })
}

// 删除部门
export function delMetaData(data) {
  return request({
    url: '/api/v1/metaData',
    method: 'delete',
    data: data
  })
}
