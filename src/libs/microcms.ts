import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
  // サービスドメイン名
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  
  // APIキー
  apiKey: import.meta.env.API_KEY,
});

// 全てのブログの情報を取得する関数
export const getBlogs = async (queries: MicroCMSQueries) => {
  return client.get({endpoint: "blogs", queries
  });
};

// ブログの個別詳細の情報を取得する関数
export const getBlogDetail = async (
  // どのブログの詳細を見たいのか
  blogId: string,
  // queries?をつけるとクエリがあってもなくてもよい問意味
  queries?: MicroCMSQueries
) => {
  return client.getListDetail({
    endpoint: "blogs",
    contentId: blogId,
    queries
  });
};