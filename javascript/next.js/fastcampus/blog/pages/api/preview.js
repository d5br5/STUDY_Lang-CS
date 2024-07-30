export default function handler(req, res) {
  if (req.query.token !== "doh" || !req.query.post) {
    return res.status(401).json({ message: "invalid token" });
  }
  res.setPreviewData({});
  res.redirect(`/post/${req.query.post}`);
}
