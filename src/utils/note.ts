import supabaseClient from "./supaBaseClients";

export const fetchData = async () => {
  let { data, error } = await supabaseClient
    .from("comments")
    .select(
      `*,user:userId(*),post:postId(*),reply:replies!commentId(*,user:userId(*),reply_treats(*,treats:treatId(*)),reply_likes!replyId(*,user:userId(*))),
    likes:comment_likes!commentId(*,user:userId(*)),
    comment_Treats:comment_treats!commentId(*,treats:treatId(*))
    `
    )
    .order("insertedDate", { ascending: true });
  if (error) console.log("error", error);
  console.log(data);
  return data;
};
