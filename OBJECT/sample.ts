type Res = {
  id: Number,
  status: String,
}
const res: Res = {
  id: 123456,
  status: "success",
}

type GetResponse = {
  id: Number,
  status: String,
}

const getter: GetResponse = res;