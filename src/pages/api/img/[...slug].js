/*
 * [...img]
 * used to bypass client, mask the real url under this app url
 * caution: bandwith killer, cache the image.
 */

export default async (req,res) => {
  if(req.query.slug.length == 2 ){
    const fetchImage = await fetch(`https://i.nhentai.net/galleries/${req.query.slug[0]}/${req.query.slug[1]}`)
    if (req.status == 404) {
      res.status(404).send("404 Not Found")
    } else {
      res.status(200)
      fetchImage.body.pipe(res)
    }
  } else {
    res.status(417).send("Expectation Failed")
  }
}
