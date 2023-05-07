// components/test/test.js
Component({
    options:{
        styleIsolation:"apply-shared" //样式隔离：isolated-启用样式隔离 apply-shared：y页面会单方面影响组件，组件不影响外部  shared：页面和组件样式相互影响
    },
    /**
     * 组件的属性列表
     */
    properties: {
        max:Number,
        min:{
            type: Number, 
            value:0
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        count:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        addCount(){
            if(this.data.count>=this.properties.max)
                return
            
            this.setData({count:this.data.count+1})
            wx.showToast({
              title: 'count值为：'+this.data.count
            })
        },
        showInfo(){            
            console.log(this.data)    
            console.log(this.properties)
            console.log(this.data===this.properties?"data和properties是同一个对象":"data和properties不是同一个对象")
        }
    }
})
