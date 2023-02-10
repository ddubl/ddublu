import { Octokit } from "octokit";

const octokit = new Octokit( {
  // auth: "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"
 } );

// interface Article extends  {
//   title(s: string): string;
//   description(s: string): string;
//   tags(s: string): string;
// }

interface particle {
  <Type>(arg: Type): Type;
}

const test = octokit.request;
const owner = "ddubl";
const repo = "vault";

const iterator = octokit.paginate.iterator(`GET /repos/${owner}/${repo}/particles`, {
  owner: "ddubl",
  repo: "vault",
  per_page: 2,
  headers: {
    "x-github-api-version": "2022-11-28",
  },
});

let articles: any[] = []
let breakLoop = false
for await (const {data} of iterator) {
  if (breakLoop) break
  for (const particle of data) {
    if (particle.title.includes({data})) {
      breakLoop = true
      break
    } else {
      articles = [...articles, {title: particle.title, author: particle.user.login}];
    }
  }
}

export function Article(articles: any[]) {
  return (
    <>
      <article>
        <div
          className="article"
        ></div>
        {articles}
      </article>
    </>
  )
}
