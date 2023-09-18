export default {
  fields: {
    title: 'system name',
    status: 'status',
    remark: 'remark'
  },
  actions: {
    confirm: 'confirm',
    cancel: 'cancel',
    create: 'create',
    upload: 'upload',
    return: 'return',
    esc: 'esc',
    clone: 'clone',
    remarks: 'remarks',
    submit: 'submit',
    check: 'check',
    download: 'download',
    config: 'config',
    delete: 'delete',
    all: 'all',
    login: 'login',
    next: 'next',
    prev: 'prev',
    start: '开始',
    pause: 'pause',
    fail: 'fail',
    edit: 'edit'
  },
  status: {
    fail: 'fail',
    waitingStart: '待开始',
    process: '进行中',
    finished: '已完成'
  },
  message: {
    serverError: '服务器错误',
    tokenInvalid: '登录凭证失效',
    timeout: '请求超时',
    clientError: '请求错误',
    networkError: '网络错误',
    required: '必填项。'
  },

  // 登录页
  login: {
    inputLoginAccount: '请输入登录账号',
    inputLoginPwd: '请输入密码',
    toggleMode: '切换主题',
    toggleLocale: '中英切换'
  },

  // 错误页面
  error: {
    notFound: '抱歉，您访问的页面不存在！ '
  },

  dashboard: {
    title: 'dashboard'
  },

  demo: {
    title: 'demo'
  },

  personalCenter: {
    title: 'personal center',
    basicInfo: {
      title: 'basic info'
    }
  },
  dataManage: {
    title: 'dataManage'
  },
  taskManage: {
    title: 'taskManage'
  }
}
