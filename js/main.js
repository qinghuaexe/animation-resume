



var result = `
/*面试官你好，我是宋先生，

我将以动态简历的方式做一番自我介绍

首先我们准备一些样式吧!!!!*/

html{
   background:#eee;
   font-size : 16px;
}
*{
   transition: all 1s;
}
#code{
   border:1px solid red;
   padding:16px;
}

/*让我们的代码亮起来吧*/ 

.token.selector{color:#690;}
.token.function{color:#DD4A68;}
.token.property{color:#905;}

/*加点特技 duang! duang!! duang!!*/ 

#code{
    transform : rotate(360deg)
}

/*好了，下面开始自我介绍了*/
/*请给我一张白纸，谢谢！！！！*/ 
#code{
    position:fixed;
    left:0 ;
    width :50% ;
    height: 100%;
} 
#paper{
    position : fixed;
    right : 0 ;
    width : 50% ;
    height: 100%;
    background: black;
    display : flex;
    justify-content ：center;
    align-items : center;
    padding:16px;
}
#paper > .content{
    background: white;
    width:100%;
    height:100%;
}
`
var result2 = `
    #paper{
    }
    `

var md = `
# 自我介绍

我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉 JavaScript CSS

# 项目介绍

1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx

# 联系方式

- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
let reslut3 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                convertMarkdownToHtml(() => {
                    writeCode(result + result2, reslut3, () => {
                        console.log('完成')
                    })
                })
            })
        })
    })
})

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 25)
}


function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
function convertMarkdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}

// 把代码写进code和stlyeTag
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    var id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight;
        if (n > code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 25)
}