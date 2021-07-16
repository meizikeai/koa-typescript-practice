const zk: { [key: string]: { [key: string]: string } } = {
  mysql: {
    activity: '/blued/backend/udb/livedata_activity',
  },
  redis: {
    users: '/blued/backend/umem/users',
  },
  server: {
    send: '/blued/service/hermes/send',
  },
}

export default zk
