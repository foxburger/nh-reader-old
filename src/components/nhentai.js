async function Nhentai(code) {
  const res = await fetch(`https://nhentai.net/api/gallery/${code}`)
  if (res.status == 404) {
    var data = {
      "status": 404,
      "content": {
        "error": "Not Found"
      }
    }
  } else {
    const jsonData = await res.json()
    var data = {
      "status": 200,
      "content": {
        "title_en": jsonData.title.english.toString(),
        "title_pretty": jsonData.title.pretty.toString(),
        "title_jp": jsonData.title.japanese.toString(),
        "tags": jsonData.tags
                .map((x) => x.name)
                .join(", "),
        "media_id": jsonData.media_id.toString(),
        "page": jsonData.num_pages.toString(),
      }
    }
  }

  return data
}

export default Nhentai
