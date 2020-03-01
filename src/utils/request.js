import axios from 'axios'

// let cancelToken = axios.CancelToken

// const cancel = []

// const removePending = config => {
//   for (let p in cancel) {
//     if (cancel[p].u === config.url) {
//       cancel[p].f()
//     }
//   }
// }

// // 请求拦截器 发送一个请求之前
// axios.interceptors.request.use(config => {
//   //在一个ajax发送前执行一下取消操作
//   removePending(config)
//   config.cancelToken = new cancelToken(c => {
//     cancel.push({
//       f: c,
//       u: config.url,
//     })
//   })
//   return config
// }, error => {
//   return Promise.reject(error)
// })

// //添加响应拦截器
// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   return Promise.reject(error)
// })

export function post(url, action = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      baseURL: '/api',
      url,
      data: action,
    })
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}



export function login(url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: payload
    })
      .then(response => {
        const data = response.data
        if (data.status != 0) {
          resolve(data)
          alert('登录成功')
        } else {
          alert('登录失败')
          reject(data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function verification(url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: payload
    })
      .then(response => {
        const data = response.data
        if (data.status === 1) {
          resolve(data)

        } else {
          reject(data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function get(url, payload = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params: payload
    })
      .then(response => {
        resolve(response)
      })
      .catch(err => {
        reject(err)
      })
  })
}