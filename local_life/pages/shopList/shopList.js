// pages/shopList/shopList.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        params:{},
        shopList:[],
        page:1,
        pageSize:10,
        total:0,
        isLoading:false
    },

    /**
     * 生命周期函数--监听页面加载
     * 获取请求参数信息
     */
    onLoad(options) {
        this.setData({params:options})
        this.getShopList()
    },
    getShopList(){
        if(this.data.isLoading)
            return

        this.setData({isLoading:true})        
        //展示loading效果
        wx.showLoading({
          title: '数据加载中……',
        })
        wx.request({
          url: 'https://www.escook.cn/categories/'+this.data.params.id+'/shops',
          method:'GET',
          data:{
            _page:this.data.page,
            _limit:this.data.pageSize
          },
          success:(res)=>{
            this.setData({shopList:[...this.data.shopList,...res.data],
            total:res.header["X-Total-Count"]-0 //减0为了做数据类型转换          
        })},
        complete:()=>{
            wx.hideLoading()
            this.setData({isLoading:false})
        }
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
            title: this.data.params.title,
          })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        this.setData({shopList:[],
            page:1,
            total:0})
        this.getShopList()
        wx.stopPullDownRefresh()
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        if(this.data.page*this.data.pageSize>=this.data.total)
        return wx.showToast({
          title: '数据加载完毕！',
          icon:'none'
        })
        this.setData({page:this.data.page + 1})
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})