import { userDetail } from "constants/userDetail";

export default function handler(req, res) {
  const { uid } = req.query;

  console.log(uid);
  res.status(200).json(userDetail);
}
