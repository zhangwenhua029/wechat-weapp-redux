import warning from './warning'

function checkStoreShape(store) {
  const missingMethods = ['subscribe', 'dispatch', 'getState'].filter(m => !store.hasOwnProperty(m));

  if(missingMethods.length > 0) {
    warning(
      'Store似乎不是一个合法的Redux Store对象: ' +
      '缺少这些方法: ' + missingMethods.join(', ') + '。'
    )
  }
}

export default function Provider(store) {
  checkStoreShape(store)
  return function(appConfig) {
    return Object.assign({}, appConfig, {store})
  }
}