const dotenv = require('dotenv');
const mysql = require('mysql2/promise');
const sql_insert_post = 'insert into post(title, email, image) values(?, ?, ?)';
const sql_select_post = `select p.id, p.title, p.image,
concat('[',group_concat(distinct '"',t.name,'"'),']') as tags, 
concat('{',substring_index(group_concat(distinct '"',pt2.postId,'"',':', '"',pt2.title,'"' order by pt2.views desc), ',', 3),'}') as recommend
from post p 
left join postTag pt
on p.id=pt.postId
left join tag t 
on t.id=pt.tagId
left join (select p.id, p.title, p.views, pt.* from post p join postTag pt on p.id=pt.postId) pt2
on pt2.postId!=p.id && pt2.tagId in (select pt.tagId from post p join postTag pt on p.id=pt.postId where p.id=(?))
where p.id=(?)`;
const sql_select_all_post = `select id, title from post where email=(?) ORDER BY id desc`;
const sql_insert_tag = 'insert into tag(name) values(?) on duplicate key update name=(?)';
const sql_save_post_to_tag = (tags) =>
  `insert into postTag(postId, tagId) values ${tags.reduce((result, tag, index) => {
    result += `(?,?)`;
    if (index != tags.length - 1) result += ',';
    return result;
  }, '')}`;
const sql_update_post_views_plus_one = 'update post set views = views+1 where id=(?)';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_ENDPOINT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

exports.savePost = async (title, email, image) => {
  try {
    return await pool.query(sql_insert_post, [title, email, image]);
  } catch (err) {
    return false;
  }
};
exports.getPost = async (postId) => await pool.query(sql_select_post, [postId, postId]);
exports.getAllPost = async (email) => await pool.query(sql_select_all_post, [email]);
exports.saveTag = async (name) => await pool.query(sql_insert_tag, [name, name]);
exports.savePostToTag = async (postId, tags) =>
  await pool.query(
    sql_save_post_to_tag(tags),
    tags.reduce((result, tagId) => {
      result.push(postId);
      result.push(tagId);
      return result;
    }, [])
  );
exports.updatePostViewsPlusOne = async (postId) => await pool.query(sql_update_post_views_plus_one, [postId]);
