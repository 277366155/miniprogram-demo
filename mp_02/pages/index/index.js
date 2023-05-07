// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
				info:"hello world!",
				imgSrc:"https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
				randomNum:Math.random()*10,
				randomNum2:Math.random().toFixed(2),
				count:1,
        msg:"你好。",
        type:2,
        showGender:true,
        arr1:['苹果','华为','小米','vivo'],
        userList:[{id:1002,name:"张三"},{id:1003,name:"李四"},{id:1004,name:"王五"}]
    },
		onTapHandler(e){
			// console.log(e);
			this.setData({count:this.data.count+1});
		},
		onTapResetHandler(e){
			this.setData({count:e.target.dataset.info});
		},
		onInputHandler(e){
				// console.log(e.detail.value);
				this.setData({msg:e.detail.value});
				console.log(this.data.msg);
		},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})