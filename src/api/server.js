import { createServer, Model } from "miragejs"

export default function () {
  createServer({
    routes() {
      this.get("/api/books", () => (
        [
          {
            title: "Dac nhan tam",
            imgUrl: "https://picsum.photos/200/300"
          },
          {
            title: "Giet chet con chim nhai",
            imgUrl: "https://picsum.photos/200/300"
          },
          {
            title: "Giet chet con chim nhai",
            imgUrl: "https://picsum.photos/200/300"
          },
          {
            title: "Giet chet con chim nhai",
            imgUrl: "https://picsum.photos/200/300"
          },
          {
            title: "Giet chet con chim nhai",
            imgUrl: "https://picsum.photos/200/300"
          },
          {
            title: "Giet chet con chim nhai",
            imgUrl: "https://picsum.photos/200/300"
          }
        ]
      ))

      this.post('/api/books', (schema, req) => {
        let body = JSON.parse(req.requestBody);
        body = {...body, imgUrl: "https://picsum.photos/200/300"}
        return {...body};
      })
    },
  })
}
