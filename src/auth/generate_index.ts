//这个文件用来生成json文件，用于存储博客的索引信息，方便后续的搜索功能

import { readdirSync,readFileSync,writeFileSync } from 'fs';
import { join,resolve } from 'path';
import { PostIndex } from '@/types/PostIndex'
import removeMarkdown from 'markdown-to-text'
//dataPath:'public/blog_store'
const dataPath = resolve('public', 'blog_store')
//dataPath:'public/blog_store'
const postsPath = join(dataPath, 'posts')
const categoryFolders = readdirSync(postsPath)
const postsIndex: PostIndex[] = []
for(const categoryFolder of categoryFolders){
  const categoryPath = join (postsPath, categoryFolder)
  const postFiles = readdirSync(categoryPath)
  for(const postFile of postFiles){
    //读取post文件路径，即public/blog_store/posts/xxx/xxx.md
    const postPath = join(categoryPath, postFile)
    //读取文件内容
    const postContent = readFileSync(postPath).toString()
    const postLines = removeMarkdown(postContent)
    .split('\n').map((l: String) => l.trim()).filter((l: String) => Boolean(l));
    const [title, date, ...fullPost] = postLines
    //console.log(title, date);
  }
}

//这里我要读取数据结构下的路径
const dataStrPath =  resolve('public', 'blog_store/数据结构')
//读取数据结构文件夹下的文件
const postFiles = readdirSync(dataStrPath)
for(const postFile of postFiles){
  //读取post文件路径，即public/blog_store/posts/xxx/xxx.md
  const postPath = join(dataStrPath, postFile)
  //读取文件内容
  const postContent = readFileSync(postPath).toString()

  /*  以下是对上述代码的解释：
  1.removeMarkdown(postContent)是一个函数，用于从帖子的内容中删除任何markdown语法。
  2. .split('\n') 将文本分割成一个数组，数组的每个元素是文本的一行。
  3. .map((l: String) => l.trim()) 删除每一行的开头和结尾的任何空白处。
  4. .filter((l: String) => Boolean(l)) 删除数组中的任何空行。 */
  const postLines = removeMarkdown(postContent)
  .split('\n').map((l: String) => l.trim()).filter((l: String) => Boolean(l));
  const [title, date, ...fullPost] = postLines
  
  const fullPostLines = fullPost.join(' ')
  const descriptionLines = fullPostLines.split(' ').slice(0, 12).join(' ')
  console.log(descriptionLines);
  
  const description = `${descriptionLines}${fullPostLines.trim().length > descriptionLines.trim().length ? '...' : ''}`

  /* ID就是文件名 */
  const [postFileId,] = postFile.split('.md')
  
  postsIndex.push({
    id: postFileId,
    section: '数据结构',
    date,
    title,
    description,

    url: `blog_store/数据结构/${postFile}`,
  })
}
/* postsIndex为json数据格式 */
postsIndex.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))


const indexPath = join(dataPath, '数据结构.json')

writeFileSync(indexPath, JSON.stringify(postsIndex, null, 4))