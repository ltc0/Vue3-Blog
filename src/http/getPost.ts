import axios from "axios"
import * as fs from 'fs';
import * as path from 'path'
import removeMarkdown from 'markdown-to-text'
import { PostIndex } from '@/types/PostIndex'

const dataStrPath = path.resolve('public', 'blog_store/数据结构')


const postFiles = fs.readdirSync(dataStrPath)
const postsIndex: PostIndex[] = []
for (const postFile of postFiles) {
    //读取post文件路径，即public/blog_store/posts/xxx/xxx.md
    const postPath = path.join(dataStrPath, postFile)
    //读取文件内容
    const postContent = fs.readFileSync(postPath).toString()

    /*  以下是对上述代码的解释：
    1.removeMarkdown(postContent)是一个函数，用于从帖子的内容中删除任何markdown语法。
    2. .split('\n') 将文本分割成一个数组，数组的每个元素是文本的一行。
    3. .map((l: String) => l.trim()) 删除每一行的开头和结尾的任何空白处。
    4. .filter((l: String) => Boolean(l)) 删除数组中的任何空行。 */
    const postLines = removeMarkdown(postContent)
        .split('\n').map((l: String) => l.trim()).filter((l: String) => Boolean(l));
    const [title, date, ...fullPost] = postLines

    const fullPostLines = fullPost.join(' ')
    const descriptionLines = fullPostLines.split(' ').slice(0, 64).join(' ')
    /*  */
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
console.log(postsIndex);

/* postsIndex为json数据格式 */
postsIndex.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
export function getPost() {
  return new Promise((resolve, reject) => {
        resolve(postsIndex)
    })
}