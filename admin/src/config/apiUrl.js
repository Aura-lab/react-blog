let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin : ipUrl+'checkLogin',// 检查用户名和密码
    getTypeInfo : ipUrl+'getTypeInfo',// 文章类别信息
    addArticle :ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle',
    getArticleList:ipUrl + 'getArticleList' , 
    delArticle:ipUrl + 'delArticle/' ,//del
    
}

export default servicePath